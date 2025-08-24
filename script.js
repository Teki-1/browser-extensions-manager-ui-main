const RemoveElement = (id) => {
  const element = document.getElementById(id);
  element.remove();
};

function toggleTheme() {
  var element = document.querySelector("#theme");
  var item = document.querySelector("#dark");
  var entity = document.querySelector("#sparkle");

  if (element.getAttribute("href") === "dark.css") {
    element.setAttribute("href", "light.css");
  } else if (element.getAttribute("href") === "light.css") {
    element.setAttribute("href", "dark.css");
  }

  if (item.getAttribute("src") === "../assets/images/icon-sun.svg") {
    item.setAttribute("src", "../assets/images/icon-moon.svg");
  } else if (item.getAttribute("src") === "../assets/images/icon-moon.svg") {
    item.setAttribute("src", "../assets/images/icon-sun.svg");
  }

  if (entity.getAttribute("src") === "../assets/images/logo.svg") {
    entity.setAttribute("src", "../assets/images/logo-light.svg");
  } else if (entity.getAttribute("src") === "../assets/images/logo-light.svg") {
    entity.setAttribute("src", "../assets/images/logo.svg");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setActiveFilter("all");
});

let CURRENT_FILTER = "all";

const setActiveFilter = (id) => {
  CURRENT_FILTER = id;

  document.querySelectorAll("#inactive, #active, #all").forEach((btn) => {
    btn.classList.remove("filter");
    btn.classList.add("unfilter");
  });
  const btn = document.getElementById(id);
  if (btn) {
    btn.classList.remove("unfilter");
    btn.classList.add("filter");
  }

  document.querySelectorAll(".box").forEach((item) => {
    const isActive = item.classList.contains("active");
    const isInactive = item.classList.contains("inactive");

    if (isActive && isInactive) item.classList.remove("inactive");

    item.style.display =
      id === "all"
        ? "block"
        : id === "active"
        ? isActive
          ? "block"
          : "none"
        : isInactive
        ? "block"
        : "none";
  });
};

const FilterState = (id) => {
  const el = document.getElementById(id);
  const checkbox = el.querySelector('input[type="checkbox"]');

  el.classList.toggle("active", checkbox.checked);
  el.classList.toggle("inactive", !checkbox.checked);

  setActiveFilter(CURRENT_FILTER);
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".box").forEach((el) => {
    const cb = el.querySelector('input[type="checkbox"]');
    if (!cb) return;
    el.classList.toggle("active", cb.checked);
    el.classList.toggle("inactive", !cb.checked);
  });
  setActiveFilter("all");
});
