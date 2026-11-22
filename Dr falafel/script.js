/* =========================================================
   Dr. Falafel – menu website
   To edit prices / items: change the MENU array below.
   To change phone numbers: edit PHONE_WA and the links in index.html.
   ========================================================= */

const PHONE_WA = "249126239676";   // WhatsApp number, international format, no + or leading 0
const CURRENCY = { ar: "ج.س", en: "SDG", fr: "SDG" };

/* ---------- Interface texts ---------- */
const UI = {
  heroTitle:   { ar: "دكتور فلافل", en: "Dr. Falafel", fr: "Dr. Falafel" },
  heroSub:     { ar: "أشهى الفلافل والساندوتشات والبطاطس في أمدرمان", en: "The tastiest falafel, sandwiches and fries in Omdurman", fr: "Les meilleurs falafels, sandwichs et frites d'Omdurman" },
  viewMenu:    { ar: "شاهد القائمة", en: "View Menu", fr: "Voir le menu" },
  callUs:      { ar: "اتصل بنا", en: "Call us", fr: "Appelez-nous" },
  menuTitle:   { ar: "قائمة الطعام", en: "Our Menu", fr: "Notre menu" },
  all:         { ar: "الكل", en: "All", fr: "Tout" },
  search:      { ar: "ابحث في القائمة...", en: "Search the menu...", fr: "Rechercher dans le menu..." },
  noResults:   { ar: "لا توجد نتائج", en: "No results found", fr: "Aucun résultat" },
  add:         { ar: "أضف", en: "Add", fr: "Ajouter" },
  contactTitle:{ ar: "تواصل معنا", en: "Contact Us", fr: "Contactez-nous" },
  phones:      { ar: "أرقام الهاتف", en: "Phone numbers", fr: "Téléphones" },
  address:     { ar: "العنوان", en: "Address", fr: "Adresse" },
  addressText: {
    ar: "أمدرمان – جنوب استوب مدينة النيل – عطبرة – غرب تقاطع الجودي",
    en: "Omdurman – south of Istop, Madinat Al-Nil, Atbara – west of Al-Jawdi intersection",
    fr: "Omdurman – sud d'Istop, Madinat Al-Nil, Atbara – à l'ouest du carrefour Al-Jawdi"
  },
  openMap:     { ar: "افتح في الخريطة", en: "Open in Maps", fr: "Ouvrir dans Maps" },
  rights:      { ar: "جميع الحقوق محفوظة", en: "All rights reserved", fr: "Tous droits réservés" },
  yourOrder:   { ar: "طلبك", en: "Your Order", fr: "Votre commande" },
  total:       { ar: "المجموع", en: "Total", fr: "Total" },
  clear:       { ar: "إفراغ السلة", en: "Clear cart", fr: "Vider le panier" },
  sendWa:      { ar: "أرسل الطلب عبر واتساب", en: "Send order via WhatsApp", fr: "Envoyer la commande via WhatsApp" },
  empty:       { ar: "السلة فارغة", en: "Your cart is empty", fr: "Votre panier est vide" },
  waHello:     { ar: "مرحباً، أود طلب:", en: "Hello, I would like to order:", fr: "Bonjour, je voudrais commander :" },
  waTotal:     { ar: "المجموع", en: "Total", fr: "Total" }
};

/* ---------- Menu data (prices in SDG) ---------- */
const CATEGORIES = [
  { id: "sandwiches", ar: "ساندوتشات", en: "Sandwiches", fr: "Sandwichs" },
  { id: "trays",      ar: "طلبات",     en: "Trays",      fr: "Plateaux" },
  { id: "fries",      ar: "فرايز",     en: "Fries",      fr: "Frites" },
  { id: "extras",     ar: "إضافات",    en: "Extras",     fr: "Suppléments" },
  { id: "drinks",     ar: "مشروبات",   en: "Drinks",     fr: "Boissons" }
];

const MENU = [
  /* Sandwiches */
  { id: "s1",  cat: "sandwiches", price: 16000, ar: "الوحش", en: "Al-Wahsh (The Beast)", fr: "Al-Wahsh (La Bête)" },
  { id: "s2",  cat: "sandwiches", price: 13000, ar: "صاروخ", en: "Sarookh (Rocket)", fr: "Sarookh (Fusée)" },
  { id: "s3",  cat: "sandwiches", price: 12500, ar: "صاروخ بطاطس", en: "Potato Sarookh", fr: "Sarookh aux pommes de terre" },
  { id: "s4",  cat: "sandwiches", price: 12500, ar: "بطاطس بالجبنة الرومي", en: "Potato with Roumi Cheese", fr: "Pommes de terre au fromage Roumi" },
  { id: "s5",  cat: "sandwiches", price: 12500, ar: "فلافل بالجبنة الرومي", en: "Falafel with Roumi Cheese", fr: "Falafel au fromage Roumi" },
  { id: "s6",  cat: "sandwiches", price: 12000, ar: "بطاطس جامبو", en: "Jumbo Potato", fr: "Pommes de terre Jumbo" },
  { id: "s7",  cat: "sandwiches", price: 11000, ar: "بطاطس عادي", en: "Regular Potato", fr: "Pommes de terre classique" },
  { id: "s8",  cat: "sandwiches", price: 12000, ar: "فلافل ميكس جامبو", en: "Mix Falafel Jumbo", fr: "Falafel mixte Jumbo" },
  { id: "s9",  cat: "sandwiches", price: 11500, ar: "فلافل ميكس عادي", en: "Mix Falafel Regular", fr: "Falafel mixte classique" },
  { id: "s10", cat: "sandwiches", price: 11500, ar: "صاروخ الفلافل", en: "Falafel Sarookh", fr: "Sarookh au falafel" },
  { id: "s11", cat: "sandwiches", price: 11000, ar: "فلافل جامبو", en: "Jumbo Falafel", fr: "Falafel Jumbo" },
  { id: "s12", cat: "sandwiches", price: 10500, ar: "فلافل عادي", en: "Regular Falafel", fr: "Falafel classique" },

  /* Trays */
  { id: "t1", cat: "trays", price: 12500,
    ar: "طلب فلافل عادي", en: "Regular Falafel Tray", fr: "Plateau falafel classique",
    dAr: "6 حبات فلافل + طحينة + كاتشب + ثومية + مخلل + بطاطس + فطيرة",
    dEn: "6 falafel + tahini + ketchup + garlic sauce + pickles + fries + bread",
    dFr: "6 falafels + tahini + ketchup + sauce à l'ail + cornichons + frites + pain" },
  { id: "t2", cat: "trays", price: 13500,
    ar: "طلب فلافل جامبو", en: "Jumbo Falafel Tray", fr: "Plateau falafel Jumbo",
    dAr: "10 حبات فلافل + طحينة + كاتشب + ثومية + مخلل + بطاطس + فطيرة",
    dEn: "10 falafel + tahini + ketchup + garlic sauce + pickles + fries + bread",
    dFr: "10 falafels + tahini + ketchup + sauce à l'ail + cornichons + frites + pain" },

  /* Fries */
  { id: "f1", cat: "fries", price: 14500, ar: "سبيشال فرايز", en: "Special Fries", fr: "Frites spéciales" },
  { id: "f2", cat: "fries", price: 10500, ar: "كلاسيك", en: "Classic Fries", fr: "Frites classiques" },
  { id: "f3", cat: "fries", price: 11500, ar: "صوص المايونيز", en: "Mayo Sauce Fries", fr: "Frites sauce mayonnaise" },
  { id: "f4", cat: "fries", price: 13500, ar: "صوص الشيدر", en: "Cheddar Sauce Fries", fr: "Frites sauce cheddar" },
  { id: "f5", cat: "fries", price: 13500, ar: "صوص الباربكيو", en: "BBQ Sauce Fries", fr: "Frites sauce barbecue" },
  { id: "f6", cat: "fries", price: 13500, ar: "ميكس صوص", en: "Mix Sauce Fries", fr: "Frites sauces mixtes" },

  /* Extras */
  { id: "e1", cat: "extras", price: 2000, ar: "مخلل", en: "Pickles", fr: "Cornichons" },
  { id: "e2", cat: "extras", price: 2000, ar: "كاتشب", en: "Ketchup", fr: "Ketchup" },
  { id: "e3", cat: "extras", price: 2000, ar: "مايونيز", en: "Mayonnaise", fr: "Mayonnaise" },
  { id: "e4", cat: "extras", price: 2000, ar: "طحينة", en: "Tahini", fr: "Tahini" },
  { id: "e5", cat: "extras", price: 2500, ar: "ذرة حلوة", en: "Sweet Corn", fr: "Maïs doux" },
  { id: "e6", cat: "extras", price: 2500, ar: "صوص بابريكو", en: "Paprika Sauce", fr: "Sauce paprika" },
  { id: "e7", cat: "extras", price: 2500, ar: "هلابينو", en: "Jalapeño", fr: "Jalapeño" },
  { id: "e8", cat: "extras", price: 2500, ar: "جبنة رومي", en: "Roumi Cheese", fr: "Fromage Roumi" },
  { id: "e9", cat: "extras", price: 2500, ar: "صوص شيدر", en: "Cheddar Sauce", fr: "Sauce cheddar" },

  /* Drinks */
  { id: "d1", cat: "drinks", price: 3000, ar: "مياه غازية", en: "Soft Drink", fr: "Boisson gazeuse" },
  { id: "d2", cat: "drinks", price: 2000, ar: "مياه معدنية", en: "Mineral Water", fr: "Eau minérale" }
];

/* ---------- State ---------- */
const store = {
  get(k, d) { try { return localStorage.getItem(k) ?? d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch {} }
};
let lang = store.get("lang", "ar");
let theme = store.get("theme", "light");
let activeCat = "all";
let query = "";
let cart = {};
try { cart = JSON.parse(store.get("cart", "{}")) || {}; } catch { cart = {}; }

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const isBi = () => lang === "ar-en";
const fmt = (n) => n.toLocaleString("en-US");
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* Returns HTML for a {ar,en,fr} object according to the current language mode */
function tx(obj) {
  if (isBi()) return `<span class="l1">${esc(obj.ar)}</span><span class="l2">${esc(obj.en)}</span>`;
  return esc(obj[lang]);
}
/* Plain text version (for WhatsApp, search, attributes) */
function txt(obj) { return isBi() ? obj.ar : obj[lang]; }

const itemName = (i) => ({ ar: i.ar, en: i.en, fr: i.fr });
const itemDesc = (i) => i.dEn ? { ar: i.dAr, en: i.dEn, fr: i.dFr } : null;
const currency = () => (isBi() ? CURRENCY.ar : CURRENCY[lang]);

/* ---------- Rendering ---------- */
function applyLanguage() {
  const rtl = lang === "ar" || lang === "ar-en";
  document.documentElement.lang = isBi() ? "ar" : lang;
  document.documentElement.setAttribute("dir", rtl ? "rtl" : "ltr");
  // CSS picks the font from this attribute (ar, en, fr or ar-en)
  document.documentElement.lang = lang;

  $$("[data-lang]").forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));
  $$("[data-i18n]").forEach((el) => { el.innerHTML = tx(UI[el.dataset.i18n]); });
  $("#search").placeholder = txt(UI.search);
  renderTabs();
  renderMenu();
  renderCart();
}

function renderTabs() {
  const tabs = [{ id: "all", ...UI.all }, ...CATEGORIES];
  $("#tabs").innerHTML = tabs.map((c) =>
    `<button class="tab ${c.id === activeCat ? "active" : ""}" data-cat="${c.id}">${isBi() ? esc(c.ar) + " · " + esc(c.en) : esc(c[lang])}</button>`
  ).join("");
}

function matches(i) {
  if (activeCat !== "all" && i.cat !== activeCat) return false;
  if (!query) return true;
  const hay = [i.ar, i.en, i.fr, i.dAr, i.dEn, i.dFr].filter(Boolean).join(" ").toLowerCase();
  return hay.includes(query);
}

function renderMenu() {
  let html = "", shown = 0;
  CATEGORIES.forEach((cat) => {
    const items = MENU.filter((i) => i.cat === cat.id && matches(i));
    if (!items.length) return;
    shown += items.length;
    html += `<h3 class="cat-title">${tx(cat)}</h3><div class="grid">` + items.map((i, idx) => {
      const d = itemDesc(i);
      return `<article class="card" style="animation-delay:${idx * 40}ms">
        <h4>${tx(itemName(i))}</h4>
        ${d ? `<p>${tx(d)}</p>` : ""}
        <div class="card-foot">
          <span class="price">${fmt(i.price)} <small>${currency()}</small></span>
          <button class="add-btn" data-add="${i.id}">+ ${esc(txt(UI.add))}</button>
        </div>
      </article>`;
    }).join("") + `</div>`;
  });
  $("#menuList").innerHTML = html;
  $("#noResults").hidden = shown > 0;
}

/* ---------- Cart ---------- */
const byId = (id) => MENU.find((i) => i.id === id);
function saveCart() { store.set("cart", JSON.stringify(cart)); }

function renderCart() {
  const ids = Object.keys(cart).filter((id) => byId(id) && cart[id] > 0);
  let total = 0, count = 0;
  $("#cartItems").innerHTML = ids.length ? ids.map((id) => {
    const i = byId(id), q = cart[id];
    total += i.price * q; count += q;
    return `<div class="cart-row">
      <div class="nm">${isBi() ? esc(i.ar) + `<small>${esc(i.en)}</small>` : esc(txt(itemName(i)))}
        <small>${fmt(i.price)} ${currency()}</small></div>
      <div class="qty">
        <button data-dec="${id}" aria-label="-">−</button><span>${q}</span><button data-inc="${id}" aria-label="+">+</button>
      </div></div>`;
  }).join("") : `<p class="cart-empty">${tx(UI.empty)}</p>`;
  $("#cartTotal").textContent = `${fmt(total)} ${currency()}`;
  $("#cartCount").textContent = count;
  $("#cartCount").style.display = count ? "grid" : "none";
}

function change(id, delta) {
  cart[id] = Math.max(0, (cart[id] || 0) + delta);
  if (!cart[id]) delete cart[id];
  saveCart(); renderCart();
}

function openCart(open) {
  $("#drawer").classList.toggle("open", open);
  $("#drawer").setAttribute("aria-hidden", String(!open));
  $("#overlay").hidden = !open;
}

function sendWhatsApp() {
  const ids = Object.keys(cart).filter((id) => byId(id));
  if (!ids.length) return;
  const l = isBi() ? "ar" : lang;
  let total = 0;
  const lines = ids.map((id) => {
    const i = byId(id); total += i.price * cart[id];
    return `• ${i[l]} × ${cart[id]} — ${fmt(i.price * cart[id])} ${CURRENCY[l]}`;
  });
  const msg = `${UI.waHello[l]}\n\n${lines.join("\n")}\n\n${UI.waTotal[l]}: ${fmt(total)} ${CURRENCY[l]}`;
  window.open(`https://wa.me/${PHONE_WA}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
}

/* ---------- Theme ---------- */
function applyTheme() {
  document.documentElement.setAttribute("data-theme", theme);
  $("#themeBtn").textContent = theme === "dark" ? "☀️" : "🌙";
}

/* ---------- Events ---------- */
document.addEventListener("click", (e) => {
  const t = e.target.closest("button");
  if (!t) return;
  if (t.dataset.lang) { lang = t.dataset.lang; store.set("lang", lang); applyLanguage(); }
  else if (t.dataset.cat) { activeCat = t.dataset.cat; renderTabs(); renderMenu(); }
  else if (t.dataset.add) { change(t.dataset.add, 1); t.textContent = "✓"; setTimeout(() => (t.textContent = "+ " + txt(UI.add)), 700); }
  else if (t.dataset.inc) change(t.dataset.inc, 1);
  else if (t.dataset.dec) change(t.dataset.dec, -1);
});
$("#search").addEventListener("input", (e) => { query = e.target.value.trim().toLowerCase(); renderMenu(); });
$("#themeBtn").addEventListener("click", () => { theme = theme === "dark" ? "light" : "dark"; store.set("theme", theme); applyTheme(); });
$("#cartBtn").addEventListener("click", () => openCart(true));
$("#closeCart").addEventListener("click", () => openCart(false));
$("#overlay").addEventListener("click", () => openCart(false));
$("#clearCart").addEventListener("click", () => { cart = {}; saveCart(); renderCart(); });
$("#waBtn").addEventListener("click", sendWhatsApp);
document.addEventListener("keydown", (e) => { if (e.key === "Escape") openCart(false); });

/* ---------- Init ---------- */
if (!["ar", "en", "fr", "ar-en"].includes(lang)) lang = "ar";
$("#year").textContent = new Date().getFullYear();
applyTheme();
applyLanguage();
