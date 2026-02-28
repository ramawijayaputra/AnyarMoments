/* ===============================
   PORTFOLIO STATE
================================= */
let currentCategory = "wedding";
let currentPage = 1;

/* ===============================
   IMAGE DATA WITH IMGUR URLS
================================= */
const imageData = {
  wedding: [
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772293206/28-JOB04697_qfkl3d.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772293204/63-JOB04917_hkchnv.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772293205/81-JOB05033_z6bjit.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772293204/73-JOB06025_xgamo9.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772293204/8-JOB04598_vjpes1.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772293196/39-JOB04774_inujzf.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772293202/56-JOB04876_y54wnx.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772293204/70-JOB04972_hdoama.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772293200/54-JOB04874_s0aahg.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772293194/95-JOB05096_scckh3.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772290616/10-JOB05355_jwvxq5.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772292433/29-JOB05510_lkmhfz.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772292437/37-JOB05615_d6jyn6.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772292438/57-JOB05835_yh64kp.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772292440/49-JOB05759_gisvdm.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772292439/23-JOB05443_jkl0fx.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772292451/115-JOB06276_qvgmwy.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772292451/63-JOB05885_khhbgp.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772292455/179-JOB06854_w7ygz8.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772292454/159-JOB06702_waenw4.jpg",
  ],

  prewedding: [
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772292913/2-JOB08921_v6mckm.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772292913/30-JOB09833_r1cgmn.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772292914/4-JOB08953_m4zlew.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772292917/8-JOB09005_jidudi.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772292915/9-JOB09025_dgjvjm.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772292953/11-JOB09129_qp3atx.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772292973/14-JOB09192_ej3vme.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772292974/28-JOB09803_bkrode.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772292973/25-JOB09654_fxs1gp.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772292977/12-JOB09132_paisvm.jpg",
  ],

  metatah: [
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772293958/JOB03607_g4lzel.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772294182/JOB03811_jigdiw.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772294182/JOB03558_mwz86l.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772293954/JOB03623_fddkzu.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772293951/JOB03950_qgwkzn.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772293944/JOB03941_jvdc0u.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772293947/JOB03736_itb1y8.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772293933/JOB03761_kt4xfc.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772293928/JOB03450_nvpjwd.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772293918/JOB03681_zj879i.jpg",

    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772294429/49-JOB04712_p54lzb.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772294422/3-JOB04447_hlzywa.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772294422/52-JOB04729_eiv34v.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772294422/47-JOB04683_gjxzj8.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772294421/27-JOB04564_etstxp.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772294419/64-JOB04810_tw0qow.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/v1772294419/11-JOB04481_ek2zts.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/v1772294416/59-JOB04780_naz35h.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/v1772294315/58-JOB04769_qqknn1.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/v1772294300/53-JOB04744_sdtkur.jpg",

    "",
  ],

  ngaben: [
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772293629/22-JOB09314_rwfgmv.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772293629/25-JOB00432_tk50oi.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772293630/49-JOB00007_bidkuo.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772293634/62-JOB00214_u4kqjk.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772293640/15-JOB09164_xbbcoy.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772293643/72-JOB00706_qizume.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772293646/21-JOB09289_advkcv.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772293647/25-JOB09334_f1ebpx.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772293651/3-JOB00909_b6slb5.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/upload/f_auto,q_auto,w_1200/v1772293652/35-JOB09580_e8bsrh.jpg",
  ],

  wisuda: [
    "https://res.cloudinary.com/dugp1yedh/image/f_auto,q_auto,w_1200/upload/v1772294940/65-JOB09015_vkezq7.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/f_auto,q_auto,w_1200/upload/v1772294935/19-JOB08474_iivzyl.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/f_auto,q_auto,w_1200/upload/v1772294934/2-JOB08317_le32xl.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/f_auto,q_auto,w_1200/upload/v1772294934/24-JOB08538_jrvg3l.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/f_auto,q_auto,w_1200/upload/v1772294932/23-JOB08533_mesmd3.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/f_auto,q_auto,w_1200/upload/v1772294933/67-JOB09031_wzfibu.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/f_auto,q_auto,w_1200/upload/v1772294932/9-JOB08367_mploqh.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/f_auto,q_auto,w_1200/upload/v1772294931/25-JOB08543_elk0io.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/f_auto,q_auto,w_1200/upload/v1772294929/60-JOB09000_bixr7v.jpg",
    "https://res.cloudinary.com/dugp1yedh/image/f_auto,q_auto,w_1200/upload/v1772294928/26-JOB08573_drvhg0.jpg",
  ],
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

  imageData[currentCategory].slice(start, end).forEach((url) => {
    const img = document.createElement("img");
    img.src = url;
    img.loading = "lazy";
    img.addEventListener("click", () => openModal(url));
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
