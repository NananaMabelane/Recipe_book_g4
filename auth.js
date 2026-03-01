/**
 * Recipe Book - Authentication Module
 * Handles user registration, login, and session management using localStorage
 */

// ==================== CONSTANTS ====================
const AUTH_KEYS = {
    users: 'rb_users_v1',
    session: 'rb_session_v1'
};

// ==================== UTILITY FUNCTIONS ====================

/**
 * Simple hash function for password security
 * Note: For production, use proper cryptographic hashing
 */
function simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    // Add a salt-like suffix for extra security
    return 'hash_' + Math.abs(hash).toString(16) + '_' + str.length;
}

/**
 * Generate unique ID for users
 */
function generateId() {
    return 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

/**
 * Load JSON from localStorage
 */
function loadJSON(key, fallback) {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
    } catch {
        return fallback;
    }
}

/**
 * Save JSON to localStorage
 */
function saveJSON(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
}

// ==================== USER MANAGEMENT ====================

/**
 * Get all registered users
 */
export function getAllUsers() {
    return loadJSON(AUTH_KEYS.users, []);
}

/**
 * Save users array to localStorage
 */
function saveUsers(users) {
    saveJSON(AUTH_KEYS.users, users);
}

/**
 * Find user by username
 */
export function findUserByUsername(username) {
    const users = getAllUsers();
    return users.find(u => u.username.toLowerCase() === username.toLowerCase());
}

/**
 * Find user by ID
 */
export function findUserById(id) {
    const users = getAllUsers();
    return users.find(u => u.id === id);
}

/**
 * Register a new user
 * First user automatically becomes admin
 */
export function registerUser(username, password) {
    // Validation
    if (!username || username.length < 3) {
        return { success: false, error: 'Username must be at least 3 characters' };
    }
    if (!password || password.length < 4) {
        return { success: false, error: 'Password must be at least 4 characters' };
    }
    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
        return { success: false, error: 'Username can only contain letters, numbers, and underscores' };
    }

    // Check if username exists
    if (findUserByUsername(username)) {
        return { success: false, error: 'Username already exists' };
    }

    const users = getAllUsers();
    const isFirstUser = users.length === 0;

    const newUser = {
        id: generateId(),
        username: username.trim(),
        passwordHash: simpleHash(password),
        role: isFirstUser ? 'admin' : 'user',
        createdAt: new Date().toISOString()
    };

    users.push(newUser);
    saveUsers(users);

    // Auto-login after registration
    createSession(newUser);

    return {
        success: true,
        user: { id: newUser.id, username: newUser.username, role: newUser.role },
        isFirstUser
    };
}

/**
 * Login user with credentials
 */
export function loginUser(username, password) {
    if (!username || !password) {
        return { success: false, error: 'Please enter both username and password' };
    }

    const user = findUserByUsername(username);

    if (!user) {
        return { success: false, error: 'User not found' };
    }

    if (user.passwordHash !== simpleHash(password)) {
        return { success: false, error: 'Incorrect password' };
    }

    createSession(user);

    return {
        success: true,
        user: { id: user.id, username: user.username, role: user.role }
    };
}

/**
 * Logout current user
 */
export function logoutUser() {
    localStorage.removeItem(AUTH_KEYS.session);
}

// ==================== SESSION MANAGEMENT ====================

/**
 * Create a session for logged-in user
 */
function createSession(user) {
    const session = {
        userId: user.id,
        username: user.username,
        role: user.role,
        loginTime: new Date().toISOString()
    };
    saveJSON(AUTH_KEYS.session, session);
}

/**
 * Get current session (if logged in)
 */
export function getSession() {
    return loadJSON(AUTH_KEYS.session, null);
}

/**
 * Check if user is logged in
 */
export function isLoggedIn() {
    const session = getSession();
    if (!session) return false;

    // Verify user still exists
    const user = findUserById(session.userId);
    return !!user;
}

/**
 * Check if current user is admin
 */
export function isAdmin() {
    const session = getSession();
    return session && session.role === 'admin';
}

/**
 * Get current logged-in user
 */
export function getCurrentUser() {
    const session = getSession();
    if (!session) return null;

    const user = findUserById(session.userId);
    if (!user) {
        logoutUser(); // Clean up invalid session
        return null;
    }

    return { id: user.id, username: user.username, role: user.role };
}

// ==================== ADMIN FUNCTIONS ====================

/**
 * Delete a user (admin only)
 */
export function deleteUser(userId) {
    const session = getSession();
    if (!session || session.role !== 'admin') {
        return { success: false, error: 'Admin access required' };
    }

    if (session.userId === userId) {
        return { success: false, error: 'Cannot delete your own account' };
    }

    let users = getAllUsers();
    const userToDelete = users.find(u => u.id === userId);

    if (!userToDelete) {
        return { success: false, error: 'User not found' };
    }

    users = users.filter(u => u.id !== userId);
    saveUsers(users);

    return { success: true, deletedUser: userToDelete.username };
}

/**
 * Change user role (admin only)
 */
export function changeUserRole(userId, newRole) {
    const session = getSession();
    if (!session || session.role !== 'admin') {
        return { success: false, error: 'Admin access required' };
    }

    if (!['admin', 'user'].includes(newRole)) {
        return { success: false, error: 'Invalid role' };
    }

    const users = getAllUsers();
    const user = users.find(u => u.id === userId);

    if (!user) {
        return { success: false, error: 'User not found' };
    }

    // Prevent demoting yourself if you're the only admin
    if (session.userId === userId && newRole === 'user') {
        const adminCount = users.filter(u => u.role === 'admin').length;
        if (adminCount <= 1) {
            return { success: false, error: 'Cannot demote the only admin' };
        }
    }

    user.role = newRole;
    saveUsers(users);

    // Update session if changed own role
    if (session.userId === userId) {
        session.role = newRole;
        saveJSON(AUTH_KEYS.session, session);
    }

    return { success: true, user: { id: user.id, username: user.username, role: user.role } };
}

/**
 * Get user statistics (for admin dashboard)
 */
export function getUserStats() {
    const users = getAllUsers();
    return {
        total: users.length,
        admins: users.filter(u => u.role === 'admin').length,
        users: users.filter(u => u.role === 'user').length
    };
}

/**
 * Get all users for admin display (excludes password hash)
 */
export function getUsersForAdmin() {
    const users = getAllUsers();
    return users.map(u => ({
        id: u.id,
        username: u.username,
        role: u.role,
        createdAt: u.createdAt
    }));
}
