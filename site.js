function renderFeatured(limit = 3) {
  const target = document.querySelector("[data-featured-products]");
  if (!target) return;
  const products = getProducts();
  target.innerHTML = products.length
    ? products.slice(0, limit).map(productCard).join("")
    : `<div class="empty-state">No products are currently listed.</div>`;
}

function renderProductsPage() {
  const target = document.querySelector("[data-products-grid]");
  if (!target) return;
  const products = getProducts();
  target.innerHTML = products.length
    ? products.map(productCard).join("")
    : `<div class="empty-state">No products are currently listed.</div>`;
  startAutoSlides();
}

function renderProductDetail() {
  const root = document.querySelector("[data-product-detail]");
  if (!root) return;
  const products = getProducts();
  if (!products.length) {
    root.innerHTML = `<div class="empty-state">No product details are currently available.</div>`;
    return;
  }
  const id = new URLSearchParams(location.search).get("id") || products[0].id;
  const product = products.find(item => item.id === id) || products[0];
  const specificationImage = product.media.find(src => /detail\.png$/i.test(src)) || product.media[product.media.length - 1];
  const specRows = [
    ["Type", product.type],
    ["Piller Height", product.pillerHeight],
    ["Cutting Capacity", product.cuttingCapacity],
    ["System", product.system],
    ["Body Size", product.bodySize],
    ["Table Size", product.tableSize],
    ["Wheel Size", product.wheelSize],
    ["Wheel Thickness", product.wheelThickness],
    ["Trolley Size", product.trolleySize],
    ["Trolley Rail", product.trolleyRail],
    ["Lift System", product.liftSystem],
    ["Lift Motor", product.liftMotor],
    ["Motor", product.motor],
    ["Ideal For Cutting", product.idealFor]
  ];

  root.innerHTML = `
    <div class="gallery">
      <div class="zoom-stage" data-zoom-stage>
        <img data-main-image src="${product.media[0]}" alt="${product.model}">
        <div class="zoom-lens" data-zoom-lens></div>
      </div>
      <div class="thumbs">
        ${product.media.map((src, index) => `<button class="${index === 0 ? "active" : ""}" data-thumb="${src}"><img src="${src}" alt=""></button>`).join("")}
      </div>
    </div>
    <aside class="detail-panel">
      <span class="tag">${product.category}</span>
      <h1>${product.model}</h1>
      <p>${product.description}</p>
      <div class="actions">
        <a class="btn green" target="_blank" href="${whatsappUrl(`I want to inquire about ${product.model}`)}">WhatsApp Inquiry</a>
        <button class="btn red" data-share>Share Product</button>
      </div>
      <section class="detail-specs">
        <div class="detail-specs-head">
          <span>Product Specification</span>
          <button class="btn ghost small" type="button" data-open-spec-image>View Product Catalogue Image</button>
        </div>
        ${specListHtml(specRows, null, "grid")}
      </section>
    </aside>
  `;

  const main = root.querySelector("[data-main-image]");
  const stage = root.querySelector("[data-zoom-stage]");
  const lens = root.querySelector("[data-zoom-lens]");
  root.querySelectorAll("[data-thumb]").forEach(button => {
    button.addEventListener("click", () => {
      root.querySelectorAll("[data-thumb]").forEach(item => item.classList.remove("active"));
      button.classList.add("active");
      main.src = button.dataset.thumb;
    });
  });
  root.querySelector("[data-open-spec-image]").addEventListener("click", () => {
    const specButton = [...root.querySelectorAll("[data-thumb]")].find(button => button.dataset.thumb === specificationImage);
    if (specButton) specButton.click();
  });

  stage.addEventListener("mousemove", event => {
    const rect = stage.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    lens.style.display = "block";
    lens.style.left = `${x - 90}px`;
    lens.style.top = `${y - 90}px`;
    lens.style.backgroundImage = `url("${main.src}")`;
    lens.style.backgroundSize = `${rect.width * 2.2}px ${rect.height * 2.2}px`;
    lens.style.backgroundPosition = `${-(x * 2.2 - 90)}px ${-(y * 2.2 - 90)}px`;
  });
  stage.addEventListener("mouseleave", () => { lens.style.display = "none"; });

  root.querySelector("[data-share]").addEventListener("click", async () => {
    const shareData = { title: product.model, text: product.description, url: location.href };
    if (navigator.share) await navigator.share(shareData);
    else {
      await navigator.clipboard.writeText(location.href);
      alert("Product link copied.");
    }
  });
}

function renderInquiryForm() {
  const form = document.querySelector("[data-inquiry-form]");
  const productBox = document.querySelector("[data-product-options]");
  if (!form || !productBox) return;
  const products = getProducts();
  productBox.innerHTML = products.length ? products.map(product => `
    <label><input type="checkbox" name="products" value="${product.model}"> ${product.model}</label>
  `).join("") : `<div class="empty-state small">No products are currently listed. You can still send a general inquiry.</div>`;
  form.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(form);
    const selected = data.getAll("products");
    const inquiry = {
      id: Date.now(),
      createdAt: new Date().toLocaleString(),
      name: data.get("name"),
      place: data.get("place"),
      phone: data.get("phone"),
      email: data.get("email"),
      products: selected,
      message: data.get("message")
    };
    const inquiries = getInquiries();
    inquiries.unshift(inquiry);
    saveInquiries(inquiries);
    const message = `New Inquiry
Name: ${inquiry.name}
Place: ${inquiry.place}
Phone: ${inquiry.phone}
Email: ${inquiry.email || "-"}
Products: ${selected.join(", ") || "General inquiry"}
Message: ${inquiry.message || "-"}`;
    document.querySelector("[data-inquiry-status]").innerHTML = `<div class="notice">Inquiry saved to backend dashboard. Opening WhatsApp now.</div>`;
    window.open(whatsappUrl(message), "_blank");
    form.reset();
  });
}

function fillContact() {
  const content = getContent();
  document.querySelectorAll("[data-contact-phone1]").forEach(el => el.textContent = content.contact.phone1);
  document.querySelectorAll("[data-contact-phone2]").forEach(el => el.textContent = content.contact.phone2);
  document.querySelectorAll("[data-contact-email]").forEach(el => el.textContent = content.contact.email);
  document.querySelectorAll("[data-contact-address]").forEach(el => el.textContent = content.contact.address);
  document.querySelectorAll("[data-map-link]").forEach(el => el.href = content.contact.maps);
}

document.addEventListener("DOMContentLoaded", () => {
  renderFeatured();
  renderProductsPage();
  renderProductDetail();
  renderInquiryForm();
  fillContact();
});
