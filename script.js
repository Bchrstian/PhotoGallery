document.addEventListener("DOMContentLoaded", function () {
  const galleryItems = document.querySelectorAll(".gallery-item");
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const closeBtn = document.querySelector(".close");

  galleryItems.forEach((item) => {
    // Handle hover effects
    item.addEventListener("mouseenter", function () {
      item.querySelector(".info").classList.add("move-up");
    });

    item.addEventListener("mouseleave", function () {
      item.querySelector(".info").classList.remove("move-up");
    });

    // Handle click to open modal
    item.addEventListener("click", function () {
      const fullImgSrc = item.getAttribute("data-full");
      modal.style.display = "block";
      modalImg.src = fullImgSrc;
    });
  });

  // Close modal when clicking on the close button
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close modal when clicking outside the image
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
