/*** Carousel ***/
export const carousel = (carouselElement, arrowIcons, firstImgSelector) => {
  const carousel = document.querySelector(carouselElement);
  const firstImg = carousel.querySelector(firstImgSelector);
  const items = carousel.querySelectorAll(firstImgSelector);

  let isDragStart = false;
  let isDragging = false;
  let prevPageX;
  let prevScrollLeft;
  let positionDiff;
  let autoScrollInterval;

  const showHideIcons = () => {
    arrowIcons[0].style.display = "block";
    arrowIcons[1].style.display = "block";
  };

  const scrollToNext = () => {
    const firstImgWidth = firstImg.clientWidth;
    carousel.scrollBy({ left: firstImgWidth, behavior: "smooth" });

    if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
      setTimeout(() => {
        carousel.scrollLeft = 0;
      }, 300);
    }
  };

  const startAutoScroll = () => {
    if (items.length > 1) {
      autoScrollInterval = setInterval(scrollToNext, 2000);
    }
  };

  const stopAutoScroll = () => {
    clearInterval(autoScrollInterval);
  };

  arrowIcons.forEach((icon) =>
    icon.addEventListener("click", () => {
      const firstImgWidth = firstImg.clientWidth;
      carousel.scrollBy({
        left: icon.id.includes("left") ? -firstImgWidth : firstImgWidth,
        behavior: "smooth",
      });
      setTimeout(showHideIcons, 60);
    })
  );

  const autoSlide = () => {
    if (
      carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) >
        -1 ||
      carousel.scrollLeft <= 0
    )
      return;

    positionDiff = Math.abs(positionDiff);
    const firstImgWidth = firstImg.clientWidth;
    const valDifference = firstImgWidth - positionDiff;

    if (carousel.scrollLeft > prevScrollLeft) {
      carousel.scrollLeft +=
        positionDiff > firstImgWidth ? valDifference : -positionDiff;
    } else {
      carousel.scrollLeft -=
        positionDiff > firstImgWidth ? valDifference : -positionDiff;
    }
  };

  const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
    stopAutoScroll();
  };

  const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
  };

  const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if (!isDragging) return;
    isDragging = false;
    autoSlide();
    startAutoScroll();
  };

  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("touchstart", dragStart);

  document.addEventListener("mousemove", dragging);
  carousel.addEventListener("touchmove", dragging);

  document.addEventListener("mouseup", dragStop);
  carousel.addEventListener("touchend", dragStop);

  startAutoScroll();
};
