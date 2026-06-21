const DEFAULT_PRODUCTS = [
  {
    id: "horizontal-local",
    model: "42\" Horizontal Band Saw Machine (Local)",
    type: "Horizontal Band Saw Machine",
    category: "Machine",
    cuttingCapacity: "Height 3.6 Ft. [42\"], Breadth 5.5 Ft. [66\"]",
    system: "Heavy Duty Excel System",
    pillerHeight: "7 Ft.",
    wheelSize: "42\"",
    wheelThickness: "23mm",
    trolleySize: "Length 10 Ft., Breadth 4 Ft., Wheel Size 8\"",
    trolleyRail: "70 Ft.",
    liftSystem: "Gear & Motor (Any One Choice)",
    liftMotor: "2 Hp - 960RPM",
    motor: "15Hp - 960RPM",
    idealFor: "Log, hardwood, plywood, MDF, and softwood cutting",
    description: "Heavy duty horizontal band saw machine trusted by timber merchants and plywood companies. Ideal for log, hardwood, plywood, MDF, and softwood cutting.",
    media: [
      "assets/products/horizontal-local/horizontal-local-1.jpg",
      "assets/products/horizontal-local/horizontal-local-2.png",
      "assets/products/horizontal-local/horizontal-local-3.jpg",
      "assets/products/horizontal-local/horizontal-local-4.jpg",
      "assets/products/horizontal-local/horizontal-local-5.png",
      "assets/products/horizontal-local/horizontal-local- Detail.png"
    ]
  },
  {
    id: "horizontal-south",
    model: "42\" Horizontal Band Saw Machine (South)",
    type: "Horizontal Band Saw Machine",
    category: "Machine",
    cuttingCapacity: "Height 3.6 Ft. [42\"], Breadth 5.5 Ft. [66\"]",
    system: "Heavy Duty Excel System",
    pillerHeight: "7 Ft.",
    wheelSize: "42\"",
    wheelThickness: "23mm",
    trolleySize: "Length 10 Ft. / 12 Ft. / 14 Ft. / 16 Ft. / 18 Ft., Breadth 4 Ft., Wheel Size 10\"",
    trolleyRail: "As Per Requirement",
    liftSystem: "Gear & Motor (Any One Choice)",
    liftMotor: "2 Hp - 960RPM",
    motor: "15Hp - 960RPM",
    idealFor: "Log, hardwood, plywood, MDF, and softwood cutting",
    description: "Heavy duty horizontal band saw machine for timber merchants and plywood companies, designed for precision cutting and low maintenance.",
    media: [
      "assets/products/horizontal-south/horizontal-south-1.jpg",
      "assets/products/horizontal-south/horizontal-south-2.jpg",
      "assets/products/horizontal-south/horizontal-south-3.jpg",
      "assets/products/horizontal-south/horizontal-south-4.jpg",
      "assets/products/horizontal-south/horizontal-south-Detail.png"
    ]
  },
  {
    id: "vertical12",
    model: "42\" Vertical Band Saw Machine (12\"x12\" Body)",
    type: "Vertical Band Saw Machine",
    category: "Machine",
    cuttingCapacity: "42\" vertical cutting class",
    system: "Heavy Duty Excel System",
    bodySize: "12\" x 12\" Body (Height 7.9 Ft., Breadth 1.8 Ft., Length 5 Ft.)",
    tableSize: "42\" x 42\"",
    wheelSize: "42\"",
    wheelThickness: "23mm",
    motor: "15Hp - 960RPM",
    idealFor: "All types of wood like hardwood, MDF, softwood, and plywood",
    description: "Engineered for strength and built for precision. Trusted by timber merchants and plywood companies.",
    media: [
      "assets/products/vertical12/vertical12-1.png",
      "assets/products/vertical12/vertical12-2.jpg",
      "assets/products/vertical12/vertical12-3.jpg",
      "assets/products/vertical12/vertical12-4.jpg",
      "assets/products/vertical12/vertical12-5.jpg",
      "assets/products/vertical12/vertical12-Detail.png"
    ]
  },
  {
    id: "vertical16",
    model: "42\" Vertical Band Saw Machine (16\"x16\" Body)",
    type: "Vertical Band Saw Machine",
    category: "Machine",
    cuttingCapacity: "42\" vertical cutting class",
    system: "Heavy Duty Excel System",
    bodySize: "16\" x 16\" Body (Height 8 Ft., Breadth 2 Ft., Length 5.5 Ft.)",
    tableSize: "42\" x 42\"",
    wheelSize: "42\"",
    wheelThickness: "23mm",
    motor: "15Hp - 960RPM",
    idealFor: "All types of wood like hardwood, MDF, softwood, and plywood",
    description: "Heavy duty vertical band saw machine engineered for strength, smooth accurate cutting, and low maintenance.",
    media: [
      "assets/products/vertical16/vertical16-1.jpg",
      "assets/products/vertical16/vertical16-2.jpg",
      "assets/products/vertical16/vertical16-3.jpg",
      "assets/products/vertical16/vertical16-4.jpg",
      "assets/products/vertical16/vertical16-5.jpg",
      "assets/products/vertical16/vertical16-Detail.png"
    ]
  }
];

const DEFAULT_CONTENT = {
  about: `M/s. Laxmi Engineering is a globally recognized pioneer in manufacturing Heavy-Duty Horizontal and Vertical Band Saw Machines. Headquartered in West Bengal, India, we have spent over four decades engineering high-precision machinery, custom spare parts, and dependable maintenance services for heavy industries worldwide.`,
  contact: {
    phone1: "+91 9477090833",
    phone2: "+91 9883194050",
    whatsapp: "+91 9477090833",
    email: "office.laxmieng83@gmail.com",
    address: "Par Dankuni More, P.O: Dankuni Coal Complex, District: Hooghly, Pin: 712310, West Bengal, India",
    maps: "https://maps.app.goo.gl/e8t4b9NzBoL5r6LG6"
  },
  social: {
    facebook: "https://www.facebook.com/laxmieng83",
    instagram: "https://www.instagram.com/laxmieng.83?igsh=MThmeTllaXUzN2lmdA==",
    youtube: "https://www.youtube.com/@laxmieng83",
    maps: "https://maps.app.goo.gl/e8t4b9NzBoL5r6LG6"
  },
  profile: { name: "Laxmi Engineering", userId: "" }
};

function storeGet(key, fallback) {
  const value = localStorage.getItem(key);
  if (!value) return fallback;
  try { return JSON.parse(value); } catch { return fallback; }
}

function storeSet(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getProducts() {
  storeSet("laxmiProducts", DEFAULT_PRODUCTS);
  return DEFAULT_PRODUCTS;
}

function saveProducts(products) { storeSet("laxmiProducts", products || DEFAULT_PRODUCTS); }
function getContent() {
  const stored = storeGet("laxmiContent", DEFAULT_CONTENT);
  const content = {
    ...DEFAULT_CONTENT,
    ...stored,
    contact: { ...DEFAULT_CONTENT.contact, ...(stored.contact || {}) },
    social: { ...DEFAULT_CONTENT.social, ...(stored.social || {}) },
    profile: { ...DEFAULT_CONTENT.profile, ...(stored.profile || {}) }
  };
  if (content.contact.maps.includes("jmnPNZd")) {
    content.contact.maps = DEFAULT_CONTENT.contact.maps;
  }
  if (content.social.maps.includes("jmnPNZd")) {
    content.social.maps = DEFAULT_CONTENT.social.maps;
  }
  ["facebook", "instagram", "youtube"].forEach(key => {
    if (!content.social[key] || content.social[key] === "#") content.social[key] = DEFAULT_CONTENT.social[key];
  });
  return content;
}
function saveContent(content) { storeSet("laxmiContent", content); }
function getInquiries() { return storeGet("laxmiInquiries", []); }
function saveInquiries(inquiries) { storeSet("laxmiInquiries", inquiries); }

function phoneDigits(phone) { return String(phone || "").replace(/\D/g, ""); }
function whatsappUrl(message) {
  const content = getContent();
  return `https://wa.me/${phoneDigits(content.contact.whatsapp)}?text=${encodeURIComponent(message)}`;
}

function hasSpecValue(value) {
  const text = String(value || "").trim();
  if (!text) return false;
  return !["n/a", "na", "-", "--", "null", "undefined"].includes(text.toLowerCase());
}

function specListHtml(rows, limit, variant = "list") {
  const visibleRows = rows.filter(([, value]) => hasSpecValue(value)).slice(0, limit || rows.length);
  if (!visibleRows.length) return "";
  if (variant === "grid") {
    return `
      <section class="spec-showcase">
        <div class="spec-heading">
          <span>Technical Specification</span>
          <b>${visibleRows.length} Details</b>
        </div>
        <div class="spec-grid">
          ${visibleRows.map(([label, value]) => `
            <div class="spec-tile">
              <span>${label}</span>
              <strong>${value}</strong>
            </div>
          `).join("")}
        </div>
      </section>
    `;
  }
  return `<ul class="spec-list">${visibleRows.map(([label, value]) => `<li><span>${label}</span><b>${value}</b></li>`).join("")}</ul>`;
}

function renderHeader(active) {
  const links = [
    ["index.html", "Home"],
    ["products.html", "Our Products"],
    ["inquiry.html", "Inquiry Form"],
    ["about.html", "About Us"],
    ["contact.html", "Contact Us"]
  ];
  document.write(`
    <header class="site-header">
      <nav class="nav">
        <a class="brand" href="index.html"><img src="assets/logo.png" alt="Laxmi Engineering"></a>
        <button class="menu-toggle" type="button" aria-label="Open menu" onclick="this.closest('.nav').classList.toggle('menu-open')">${iconSvg("menu")}</button>
        <div class="menu">
          ${links.map(([href, label]) => `<a class="${active === label ? "active" : ""}" href="${href}">${label}</a>`).join("")}
        </div>
      </nav>
    </header>
  `);
}

function renderSocial() {
  const content = getContent();
  document.write(`
    <div class="social-float" aria-label="Social links">
      <a class="wa" title="WhatsApp Inquiry" href="${whatsappUrl("Hello Laxmi Engineering, I want to inquire about your products.")}" target="_blank" aria-label="WhatsApp">${iconSvg("wa")}</a>
      <a class="gm" title="Google Map" href="${content.social.maps}" target="_blank" aria-label="Google Maps">${iconSvg("map")}</a>
      <a class="fb" title="Facebook" href="${content.social.facebook}" target="_blank" aria-label="Facebook">${iconSvg("facebook")}</a>
      <a class="ig" title="Instagram" href="${content.social.instagram}" target="_blank" aria-label="Instagram">${iconSvg("instagram")}</a>
      <a class="yt" title="YouTube" href="${content.social.youtube}" target="_blank" aria-label="YouTube">${iconSvg("youtube")}</a>
    </div>
  `);
}

function renderFooter() {
  const content = getContent();
  document.write(`
    <footer>
      <div class="container footer-grid">
        <div>
          <img src="assets/logo.png" alt="Laxmi Engineering">
          <p>Manufacturing and repairing heavy-duty horizontal and vertical bandsaw machines since 1983.</p>
        </div>
        <div>
          <h3>Contact</h3>
          <a href="tel:${phoneDigits(content.contact.phone1)}">${content.contact.phone1}</a>
          <a href="mailto:${content.contact.email}">${content.contact.email}</a>
          <a href="${content.contact.maps}" target="_blank">Manufacturing Unit</a>
        </div>
        <div>
          <h3>Quick Links</h3>
          <a href="products.html">Product Catalogue</a>
          <a href="inquiry.html">Send Inquiry</a>
        </div>
      </div>
    </footer>
  `);
}

function iconSvg(name) {
  const icons = {
    wa: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2.1a9.84 9.84 0 0 0-8.52 14.75L2.4 21.9l5.17-1.08a9.78 9.78 0 0 0 4.47 1.08h.01a9.9 9.9 0 0 0 9.88-9.88 9.9 9.9 0 0 0-9.89-9.92Zm5.77 14.02c-.24.68-1.38 1.27-1.93 1.32-.5.05-1.13.07-1.82-.12-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.16-4.94-4.35-.15-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.3.59-.37.78-.37h.57c.18.01.43-.07.67.51.24.58.82 2 .9 2.14.07.15.12.32.02.52-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.75 1.24 1.62 2 .11.1 1.14 1.02 2.1 1.42.3.13.52.11.72-.08.22-.22.83-.97 1.05-1.3.22-.32.44-.27.74-.16.3.1 1.9.9 2.23 1.06.32.16.54.24.62.37.07.13.07.75-.17 1.43Z"/></svg>`,
    map: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5a7.1 7.1 0 0 0-7.1 7.1c0 5.32 7.1 11.9 7.1 11.9s7.1-6.58 7.1-11.9A7.1 7.1 0 0 0 12 2.5Zm0 9.8a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4Z"/></svg>`,
    facebook: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.2 8.45V6.78c0-.8.54-.99.92-.99h2.35V2.17L14.24 2.15c-3.58 0-4.4 2.68-4.4 4.4v1.9H7.53v3.74h2.31v9.66h4.36v-9.66h2.93l.39-3.74H14.2Z"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 2.7h9.6a4.5 4.5 0 0 1 4.5 4.5v9.6a4.5 4.5 0 0 1-4.5 4.5H7.2a4.5 4.5 0 0 1-4.5-4.5V7.2a4.5 4.5 0 0 1 4.5-4.5Zm0 2A2.5 2.5 0 0 0 4.7 7.2v9.6a2.5 2.5 0 0 0 2.5 2.5h9.6a2.5 2.5 0 0 0 2.5-2.5V7.2a2.5 2.5 0 0 0-2.5-2.5H7.2Zm4.8 3.2a4.1 4.1 0 1 1 0 8.2 4.1 4.1 0 0 1 0-8.2Zm0 2a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2Zm4.35-2.47a.95.95 0 1 1 0 1.9.95.95 0 0 1 0-1.9Z"/></svg>`,
    youtube: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.35 7.12a3 3 0 0 0-2.1-2.12C17.4 4.5 12 4.5 12 4.5s-5.4 0-7.25.5a3 3 0 0 0-2.1 2.12 31.28 31.28 0 0 0-.5 4.88c0 1.62.17 3.25.5 4.88A3 3 0 0 0 4.75 19c1.85.5 7.25.5 7.25.5s5.4 0 7.25-.5a3 3 0 0 0 2.1-2.12c.33-1.63.5-3.26.5-4.88 0-1.62-.17-3.25-.5-4.88ZM9.95 15.2V8.8L15.55 12l-5.6 3.2Z"/></svg>`
    ,
    menu: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6.5h18v2H3v-2Zm0 4.5h18v2H3v-2Zm0 4.5h18v2H3v-2Z"/></svg>`
  };
  return icons[name] || "";
}

function productCard(product) {
  const cardSpecs = specListHtml([
    ["Type", product.type],
    ["Cutting Capacity", product.cuttingCapacity],
    ["System", product.system],
    ["Wheel Size", product.wheelSize],
    ["Wheel Thickness", product.wheelThickness],
    ["Motor", product.motor],
    ["Ideal For", product.idealFor]
  ], 3);

  return `
    <article class="card product-card">
      <div class="media"><img class="auto-slide" data-media='${JSON.stringify(product.media)}' src="${product.media[0]}" alt="${product.model}"></div>
      <div class="card-body">
        <span class="tag">${product.category}</span>
        <h3>${product.model}</h3>
        <p>${product.description}</p>
        ${cardSpecs}
        <div class="actions">
          <a class="btn primary small" href="product-detail.html?id=${product.id}">View Details</a>
          <a class="btn green small" target="_blank" href="${whatsappUrl(`I want to inquire about ${product.model}`)}">WhatsApp Inquiry</a>
        </div>
      </div>
    </article>
  `;
}

function startAutoSlides() {
  document.querySelectorAll(".auto-slide").forEach((img, index) => {
    const media = JSON.parse(img.dataset.media || "[]");
    if (media.length < 2) return;
    let i = 0;
    setInterval(() => {
      i = (i + 1) % media.length;
      img.src = media[i];
    }, 2600 + index * 260);
  });
}

document.addEventListener("DOMContentLoaded", startAutoSlides);
