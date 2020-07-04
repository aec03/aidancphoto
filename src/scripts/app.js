// selectors
const logoElement = document.querySelector(".logo");

const menuBarItems = document.querySelectorAll(".menu-item");
const navIndicator = document.querySelector(".animation");

const main = document.getElementsByTagName("main");
const sections = document.querySelectorAll(".section");

// event listeners
function activate(element) {
  if (element == logoElement) {
    navIndicatorClose();
  } else {
    const height = element.dataset.height;
    navIndicatorMove(height);
  }

  logoElement.classList.remove("active");
  menuBarItems.forEach((item) => {
    item.classList.remove("active");
  });
  element.classList.add("active");
}

// animejs
function navIndicatorMove(height) {
  if (logoElement.classList.value == "logo active") {
    anime({
      targets: navIndicator,
      keyframes: [
        { top: height, duration: 250 },
        { right: 0, easing: "easeInOutCubic" },
      ],
      duration: 750,
    });
  } else {
    anime({
      targets: navIndicator,
      top: height,
      easing: "easeInOutCubic",
      duration: 750,
    });
  }
}

function navIndicatorClose() {
  anime({
    targets: navIndicator,
    right: -32,
    easing: "easeInOutQuad",
    duration: 1000,
  });
}

// add event listeners
menuBarItems.forEach((item) => {
  item.addEventListener("click", () => {
    activate(item);
  });
});

logoElement.addEventListener("click", () => {
  activate(logoElement);
});
