document.addEventListener("DOMContentLoaded", function () {
  const galleryItems = document.querySelectorAll(".gallery-item");

  galleryItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      item.querySelector(".info").classList.add("move-up");
    });

    item.addEventListener("mouseleave", function () {
      item.querySelector(".info").classList.remove("move-up");
    });
  });
});
