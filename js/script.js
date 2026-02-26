/* ===============================
   PORTFOLIO STATE
================================= */
let currentCategory = "wedding";
let currentPage = 1;

/* ===============================
   IMAGE DATA
================================= */
const imageData = {
  wedding: [
    "assets/images/wedding/1.jpg",
    "assets/images/wedding/2.jpg",
    "assets/images/wedding/3.jpg",
    "assets/images/wedding/4.jpg",
    "assets/images/wedding/5.jpg",
    "assets/images/wedding/6.jpg",
    "assets/images/wedding/7.jpg",
    "assets/images/wedding/8.jpg",
    "assets/images/wedding/9.jpg",
    "assets/images/wedding/10.jpg",
    "assets/images/wedding/10.jpg",
    "assets/images/wedding/10.jpg",
    "assets/images/wedding/10.jpg",
  ],

  metatah: [
    "assets/images/metatah/1.jpg",
    "assets/images/metatah/2.jpg",
    "assets/images/metatah/3.jpg",
  ],

  otonan: ["assets/images/otonan/1.jpg", "assets/images/otonan/2.jpg"],

  ngaben: ["assets/images/ngaben/1.jpg", "assets/images/ngaben/2.jpg"],

  wisuda: ["assets/images/wisuda/1.jpg", "assets/images/wisuda/2.jpg"],
};

/* ===============================
   CALCULATE IMAGES PER PAGE (DYNAMIC)
================================= */
function getImagesPerPage() {
  const container = document.querySelector(".portfolio-right");
  if (!container) return 6;

  const containerWidth = container.offsetWidth;
  const cardWidth = 240; // sesuai minmax grid

  let columns = Math.floor(containerWidth / cardWidth);
  if (columns < 1) columns = 1;

  let rows;
  if (window.innerWidth >= 1200) rows = 2;
  else if (window.innerWidth >= 768) rows = 3;
  else rows = 4;

  return columns * rows;
}

/* ===============================
   RENDER GALLERY
================================= */
function renderGallery() {
  const activeSlide = document.querySelector(
    `.slide[data-category="${currentCategory}"]`,
  );
  if (!activeSlide) return;

  const grid = activeSlide.querySelector(".grid");
  grid.innerHTML = "";

  const imagesPerPage = getImagesPerPage();
  const start = (currentPage - 1) * imagesPerPage;
  const end = start + imagesPerPage;

  imageData[currentCategory].slice(start, end).forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.addEventListener("click", () => openModal(src));
    grid.appendChild(img);
  });

  renderPagination(imagesPerPage);
}

/* ===============================
   PAGINATION
================================= */
function renderPagination(imagesPerPage) {
  const pagination = document.querySelector(".pagination");
  if (!pagination) return;

  pagination.innerHTML = "";

  const totalPages = Math.ceil(
    imageData[currentCategory].length / imagesPerPage,
  );

  for (let i = 1; i <= totalPages; i++) {
    const span = document.createElement("span");
    span.textContent = i;

    if (i === currentPage) span.classList.add("active");

    span.addEventListener("click", () => {
      currentPage = i;
      renderGallery();
    });

    pagination.appendChild(span);
  }
}

/* ===============================
   CHANGE CATEGORY
================================= */
function changeCategory(category) {
  currentCategory = category;
  currentPage = 1;

  document.querySelectorAll(".portfolio-left li").forEach((li) => {
    li.classList.remove("active");
  });

  document
    .querySelector(`.portfolio-left li[data-category="${category}"]`)
    .classList.add("active");

  document.querySelectorAll(".slide").forEach((slide) => {
    slide.classList.remove("active");
  });

  document
    .querySelector(`.slide[data-category="${category}"]`)
    .classList.add("active");

  renderGallery();
}

/* ===============================
   CATEGORY CLICK
================================= */
document.querySelectorAll(".portfolio-left li").forEach((li) => {
  li.addEventListener("click", () => {
    changeCategory(li.dataset.category);
  });
});

/* ===============================
   IMAGE MODAL
================================= */
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close-modal");

function openModal(src) {
  modal.style.display = "flex";
  modalImg.src = src;
}

closeBtn.onclick = () => (modal.style.display = "none");

modal.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};

/* ===============================
   NAVIGATION
================================= */
const hamburger = document.getElementById("hamburger");
const fullscreenNav = document.getElementById("fullscreenNav");
const navLinks = fullscreenNav.querySelectorAll("a");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  fullscreenNav.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    fullscreenNav.classList.remove("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const priceButtons = document.querySelectorAll(".price-btn");
  const priceGroups = document.querySelectorAll(".price-group");

  priceButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // reset button active
      priceButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.dataset.category;

      // toggle content
      priceGroups.forEach((group) => {
        group.classList.remove("active");
        if (group.dataset.category === category) {
          group.classList.add("active");
        }
      });
    });
  });
});
/* ===============================
   RE-RENDER ON RESIZE
================================= */
window.addEventListener("resize", () => {
  renderGallery();
});

/* ===============================
   INIT
================================= */
renderGallery();
