import { DATASET } from "./recipes.js";
import * as Auth from "./auth.js";

// ==================== AUTH ELEMENTS ====================
const authScreen = document.querySelector("#authScreen");
const appContainer = document.querySelector("#appContainer");
const loginForm = document.querySelector("#loginForm");
const signupForm = document.querySelector("#signupForm");
const loginError = document.querySelector("#loginError");
const signupError = document.querySelector("#signupError");
const authTabs = document.querySelectorAll(".auth-tab");

const userMenu = document.querySelector("#userMenu");
const userMenuBtn = document.querySelector("#userMenuBtn");
const userAvatar = document.querySelector("#userAvatar");
const userName = document.querySelector("#userName");
const userRole = document.querySelector("#userRole");
const btnLogout = document.querySelector("#btnLogout");

function showAuthScreen() {
    authScreen.style.display = "flex";
    appContainer.style.display = "none";
}

function showApp() {
    authScreen.style.display = "none";
    appContainer.style.display = "block";
    updateUserUI();
}

function updateUserUI() {
    const user = Auth.getCurrentUser();
    if (user) {
        userAvatar.textContent = user.username.charAt(0).toUpperCase();
        userName.textContent = user.username;
        userRole.textContent = "User";
    }
}

function switchAuthTab(tab) {
    authTabs.forEach(t => t.classList.remove("active"));
    document.querySelector(`[data-auth-tab="${tab}"]`).classList.add("active");
    document.querySelectorAll(".auth-form").forEach(form => form.classList.remove("active"));
    document.querySelector(`[data-form="${tab}"]`).classList.add("active");
    loginError.textContent = "";
    signupError.textContent = "";
}

authTabs.forEach(tab => {
    tab.addEventListener("click", () => switchAuthTab(tab.dataset.authTab));
});

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.querySelector("#loginUsername").value.trim();
    const password = document.querySelector("#loginPassword").value;
    const result = Auth.loginUser(username, password);
    if (result.success) {
        loginError.textContent = "";
        loginForm.reset();
        showApp();
        showToast(`Welcome back, ${result.user.username}!`);
    } else {
        loginError.textContent = result.error;
    }
});

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.querySelector("#signupUsername").value.trim();
    const password = document.querySelector("#signupPassword").value;
    const confirm = document.querySelector("#signupConfirm").value;
    if (password !== confirm) {
        signupError.textContent = "Passwords do not match";
        return;
    }
    const result = Auth.registerUser(username, password);
    if (result.success) {
        signupError.textContent = "";
        signupForm.reset();
        showApp();
        showToast(`Account created! Welcome, ${result.user.username}!`);
    } else {
        signupError.textContent = result.error;
    }
});

userMenuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    userMenu.classList.toggle("open");
});

document.addEventListener("click", (e) => {
    if (!userMenu.contains(e.target)) userMenu.classList.remove("open");
});

btnLogout.addEventListener("click", () => {
    Auth.logoutUser();
    userMenu.classList.remove("open");
    showAuthScreen();
    showToast("Logged out successfully");
});

// ==================== APP ====================

const $ = (sel) => document.querySelector(sel);
const cardsEl = $("#cards");
const emptyEl = $("#emptyState");
const resultCountEl = $("#resultCount");
const ingredientInput = $("#ingredientInput");
const suggestionsEl = $("#suggestions");
const pantryChipsEl = $("#pantryChips");
const pantryStatsEl = $("#pantryStats");
const categorySelect = $("#categorySelect");
const sortSelect = $("#sortSelect");
const onlyCanMake = $("#onlyCanMake");
const onlyFavorites = $("#onlyFavorites");
const searchInput = $("#searchInput");
const btnAddIngredient = $("#btnAddIngredient");
const btnClearPantry = $("#btnClearPantry");
const btnSavePantry = $("#btnSavePantry");
const btnDemo = $("#btnDemo");
const btnHelp = $("#btnHelp");
const btnAddRecipe = $("#btnAddRecipe");
const recipeModal = $("#recipeModal");
const addModal = $("#addModal");
const helpModal = $("#helpModal");
const modalTitle = $("#modalTitle");
const modalMeta = $("#modalMeta");
const modalIngredients = $("#modalIngredients");
const modalHave = $("#modalHave");
const modalMissing = $("#modalMissing");
const modalSteps = $("#modalSteps");
const modalToggleFav = $("#modalToggleFav");
const modalAddMissingToPantry = $("#modalAddMissingToPantry");
const addForm = $("#addForm");
const fName = $("#fName");
const fCategory = $("#fCategory");
const fTime = $("#fTime");
const fIngredients = $("#fIngredients");
const fSteps = $("#fSteps");
const toastEl = $("#toast");

let activeTab = "best";

const LS = {
    pantry: "rb_pantry_v1",
    favorites: "rb_favorites_v1",
    customRecipes: "rb_custom_v1",
};

function normalize(s) {
    return String(s || "").toLowerCase().trim().replace(/\s+/g, " ");
}
function uniq(arr) { return Array.from(new Set(arr)); }
function loadJSON(key, fallback) {
    try { const r = localStorage.getItem(key); return r ? JSON.parse(r) : fallback; }
    catch { return fallback; }
}
function saveJSON(key, val) { localStorage.setItem(key, JSON.stringify(val)); }

let pantry = loadJSON(LS.pantry, []);
let favorites = new Set(loadJSON(LS.favorites, []));
let customRecipes = loadJSON(LS.customRecipes, []);

function getAllRecipes() {
    const customIds = new Set(customRecipes.map(r => r.id));
    return [...customRecipes, ...DATASET.recipes.filter(r => !customIds.has(r.id))];
}

function showToast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toastEl.classList.remove("show"), 1600);
}

function setModal(modal, show) {
    modal.classList.toggle("show", show);
    modal.setAttribute("aria-hidden", show ? "false" : "true");
}

function renderCategoryOptions() {
    const cats = uniq(["all", ...DATASET.categories, ...getAllRecipes().map(r => r.category)]).filter(Boolean);
    categorySelect.innerHTML = "";
    for (const c of cats) {
        const opt = document.createElement("option");
        opt.value = c === "all" ? "all" : c;
        opt.textContent = c === "all" ? "All" : c;
        categorySelect.appendChild(opt);
    }
}

function renderPantry() {
    pantryChipsEl.innerHTML = "";
    for (const ing of pantry.slice().sort((a, b) => a.localeCompare(b))) {
        const chip = document.createElement("span");
        chip.className = "chip";
        chip.innerHTML = `<span>${ing}</span><button title="Remove">×</button>`;
        chip.querySelector("button").addEventListener("click", (e) => {
            e.stopPropagation();
            pantry = pantry.filter(x => x !== ing);
            renderPantry(); render();
        });
        pantryChipsEl.appendChild(chip);
    }
    pantryStatsEl.textContent = `${pantry.length} item${pantry.length !== 1 ? "s" : ""} in pantry`;
}

function renderSuggestions() {
    const q = normalize(ingredientInput.value);
    suggestionsEl.innerHTML = "";
    if (!q) return;
    const starts = [], includes = [];
    for (const ing of DATASET.ingredients) {
        const n = normalize(ing);
        if (n.startsWith(q)) starts.push(ing);
        else if (n.includes(q)) includes.push(ing);
    }
    for (const s of [...starts, ...includes].slice(0, 10)) {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "suggestion-item";
        b.textContent = s;
        b.addEventListener("click", () => {
            addIngredient(s);
            ingredientInput.value = "";
            suggestionsEl.innerHTML = "";
            ingredientInput.focus();
        });
        suggestionsEl.appendChild(b);
    }
}

function addIngredient(raw) {
    const ing = normalize(raw);
    if (!ing) return;
    const best = DATASET.ingredients.find(x => normalize(x) === ing)
        || DATASET.ingredients.find(x => normalize(x).startsWith(ing))
        || raw.trim();
    const final = normalize(best);
    if (!final) return;
    if (pantry.includes(final)) { showToast("Already in pantry"); return; }
    pantry.push(final);
    renderPantry(); render();
    showToast(`Added: ${final}`);
}

function recipeScore(recipe, pantrySet) {
    const need = recipe.ingredients.map(normalize);
    const have = need.filter(x => pantrySet.has(x));
    const missing = need.filter(x => !pantrySet.has(x));
    const overlap = have.length / Math.max(need.length, 1);
    const score = Math.max(0, overlap - missing.length * 0.04 + (recipe.rating || 4.0) * 0.01);
    return { have, missing, score, overlap };
}

function render() {
    const pantrySet = new Set(pantry.map(normalize));
    const cat = categorySelect.value;
    const q = normalize(searchInput.value);

    let rows = getAllRecipes().map(r => ({ recipe: r, ...recipeScore(r, pantrySet) }));
    if (cat !== "all") rows = rows.filter(x => x.recipe.category === cat);
    if (q) rows = rows.filter(x => normalize(x.recipe.name).includes(q) || x.recipe.ingredients.some(i => normalize(i).includes(q)));
    if (activeTab === "can") rows = rows.filter(x => x.missing.length === 0);
    if (activeTab === "missing") rows = rows.filter(x => x.missing.length >= 1 && x.missing.length <= 3);
    if (onlyCanMake.checked) rows = rows.filter(x => x.missing.length === 0);
    if (onlyFavorites.checked) rows = rows.filter(x => favorites.has(x.recipe.id));
    if (pantry.length === 0 && !q) rows = [];

    const mode = sortSelect.value;
    if (mode === "best") rows.sort((a, b) => b.score - a.score);
    else if (mode === "missingAsc") rows.sort((a, b) => a.missing.length - b.missing.length);
    else if (mode === "timeAsc") rows.sort((a, b) => (a.recipe.time || 999) - (b.recipe.time || 999));
    else if (mode === "ratingDesc") rows.sort((a, b) => (b.recipe.rating || 0) - (a.recipe.rating || 0));
    else if (mode === "az") rows.sort((a, b) => a.recipe.name.localeCompare(b.recipe.name));

    resultCountEl.textContent = String(rows.length);
    cardsEl.innerHTML = "";
    emptyEl.style.display = rows.length ? "none" : "block";
    for (const row of rows.slice(0, 80)) cardsEl.appendChild(renderCard(row, pantrySet));
}

function renderCard(row, pantrySet) {
    const r = row.recipe;
    const canMake = row.missing.length === 0;
    const pct = Math.round(row.overlap * 100);
    const favOn = favorites.has(r.id);

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <div class="card-name">${escapeHtml(r.name)}</div>
        <div class="card-category">${escapeHtml(r.category)}</div>
        <div class="card-meta">
            <span>⏱ ${r.time ?? 20} min</span>
            <span>⭐ ${r.rating ?? 4.3}</span>
            <span style="color:${canMake ? "#2a9a4f" : "#b07800"}">${canMake ? "✓ Can make" : `${row.missing.length} missing`}</span>
        </div>
        <div class="match-bar-wrap"><div class="match-bar${canMake ? " full" : ""}" style="width:${pct}%"></div></div>
        <div class="match-label">${pct}% match</div>
        <button class="fav-btn" title="Favourite" style="position:absolute;top:8px;right:8px;background:none;border:none;cursor:pointer;font-size:16px;color:${favOn ? "#e44" : "#bbb"}">${favOn ? "♥" : "♡"}</button>
    `;
    card.style.position = "relative";

    const favBtn = card.querySelector(".fav-btn");
    favBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleFav(r.id);
        favBtn.style.color = favorites.has(r.id) ? "#e44" : "#bbb";
        favBtn.textContent = favorites.has(r.id) ? "♥" : "♡";
    });

    card.addEventListener("click", () => openRecipeModal(row, pantrySet));
    return card;
}

function toggleFav(id) {
    if (favorites.has(id)) favorites.delete(id);
    else favorites.add(id);
    saveJSON(LS.favorites, Array.from(favorites));
    showToast(favorites.has(id) ? "Added to favorites" : "Removed from favorites");
    render();
}

function openRecipeModal(row, pantrySet) {
    modalTitle.textContent = row.recipe.name;
    modalMeta.textContent = `${row.recipe.category} • ${row.recipe.time ?? 20} min • ⭐ ${row.recipe.rating ?? 4.3}`;
    modalIngredients.innerHTML = "";
    modalHave.innerHTML = "";
    modalMissing.innerHTML = "";
    modalSteps.innerHTML = "";

    for (const ing of row.recipe.ingredients.map(normalize)) {
        const span = document.createElement("span");
        span.className = "tag";
        span.textContent = ing;
        modalIngredients.appendChild(span);
        const span2 = span.cloneNode(true);
        if (pantrySet.has(ing)) modalHave.appendChild(span2);
        else modalMissing.appendChild(span2);
    }

    for (const step of row.recipe.steps || []) {
        const li = document.createElement("li");
        li.textContent = step;
        modalSteps.appendChild(li);
    }

    modalToggleFav.textContent = favorites.has(row.recipe.id) ? "♥ Favorited" : "♡ Favorite";
    modalToggleFav.onclick = () => {
        toggleFav(row.recipe.id);
        modalToggleFav.textContent = favorites.has(row.recipe.id) ? "♥ Favorited" : "♡ Favorite";
    };
    modalAddMissingToPantry.onclick = () => {
        if (!row.missing.length) { showToast("Nothing missing!"); return; }
        for (const m of row.missing) { if (!pantry.includes(m)) pantry.push(m); }
        renderPantry(); render();
        showToast("Added missing to pantry");
    };

    setModal(recipeModal, true);
}

function escapeHtml(s) {
    return String(s).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

// Tabs
document.querySelectorAll(".tab").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".tab").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        activeTab = btn.dataset.tab;
        render();
    });
});

// Modal close
document.addEventListener("click", (e) => {
    if (e.target?.dataset?.close === "true") {
        const modal = e.target.closest(".modal");
        if (modal) setModal(modal, false);
    }
});
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") [recipeModal, addModal, helpModal].forEach(m => setModal(m, false));
});

btnHelp.addEventListener("click", () => setModal(helpModal, true));
btnAddRecipe.addEventListener("click", () => { addForm.reset(); setModal(addModal, true); });
btnAddIngredient.addEventListener("click", () => {
    addIngredient(ingredientInput.value);
    ingredientInput.value = ""; renderSuggestions(); ingredientInput.focus();
});
ingredientInput.addEventListener("input", renderSuggestions);
ingredientInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        addIngredient(ingredientInput.value);
        ingredientInput.value = ""; renderSuggestions();
    }
});
btnClearPantry.addEventListener("click", () => { pantry = []; renderPantry(); render(); showToast("Pantry cleared"); });
btnSavePantry.addEventListener("click", () => { saveJSON(LS.pantry, pantry); showToast("Pantry saved"); });
btnDemo.addEventListener("click", () => {
    pantry = ["rice", "chicken", "garlic", "onion", "soy sauce", "salt", "pepper", "olive oil", "tomato", "cucumber", "lemon"];
    renderPantry(); render(); showToast("Demo pantry loaded");
});
categorySelect.addEventListener("change", render);
sortSelect.addEventListener("change", render);
onlyCanMake.addEventListener("change", render);
onlyFavorites.addEventListener("change", render);
searchInput.addEventListener("input", () => { clearTimeout(searchInput._t); searchInput._t = setTimeout(render, 120); });

addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = fName.value.trim();
    const category = fCategory.value.trim();
    const time = Math.max(1, Number(fTime.value || 20));
    const ingredients = fIngredients.value.split(",").map(normalize).filter(Boolean);
    const steps = fSteps.value.split("\n").map(s => s.trim()).filter(Boolean);
    if (!name || ingredients.length < 2 || steps.length < 1) {
        showToast("Please fill in name, ingredients and steps."); return;
    }
    customRecipes.unshift({ id: `custom-${Date.now()}`, name, category, time, rating: 4.5, tags: ["Custom"], ingredients: uniq(ingredients), steps });
    saveJSON(LS.customRecipes, customRecipes);
    renderCategoryOptions(); render();
    addForm.reset(); setModal(addModal, false);
    showToast("Recipe saved!");
});

// Init
renderCategoryOptions();
renderPantry();
render();
