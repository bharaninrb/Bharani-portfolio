let currentIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("projects-container");
  const items = container.querySelectorAll(".linka");
  const itemsToShow = 3;

  // Clone the first and last items
  for (let i = 0; i < itemsToShow; i++) {
    container.appendChild(items[i].cloneNode(true));
    container.insertBefore(
      items[items.length - 1 - i].cloneNode(true),
      container.firstChild
    );
  }

  // Adjust the initial position
  currentIndex = itemsToShow;
  container.style.transform = `translateX(-${
    currentIndex * (100 / itemsToShow)
  }%)`;
});

function showSlides(index) {
  const container = document.getElementById("projects-container");
  const items = container.querySelectorAll(".linka");
  const itemsToShow = 3;
  const totalItems = items.length;

  currentIndex = index;

  const newTransform = -currentIndex * (100 / itemsToShow);
  container.style.transition = "transform 0.5s ease-in-out";
  container.style.transform = `translateX(${newTransform}%)`;

  if (index >= totalItems - itemsToShow) {
    setTimeout(() => {
      container.style.transition = "none";
      currentIndex = itemsToShow;
      container.style.transform = `translateX(-${
        currentIndex * (100 / itemsToShow)
      }%)`;
    }, 500);
  } else if (index < 0) {
    setTimeout(() => {
      container.style.transition = "none";
      currentIndex = totalItems - itemsToShow - 1;
      container.style.transform = `translateX(-${
        currentIndex * (100 / itemsToShow)
      }%)`;
    }, 500);
  }
}

function nextSlide() {
  showSlides(currentIndex + 1);
}

function prevSlide() {
  showSlides(currentIndex - 1);
}
