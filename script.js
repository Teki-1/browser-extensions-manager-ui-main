const RemoveElement = (id) => {
  const element = document.getElementById(id);
  element.remove();
};

const ChangeColor = (id) => {
  const element = document.getElementById(id);
  if (element.classList.contains("unfilter"))
    element.classList.toggle("filter");
  else if (element.classList.contains("filter"))
    element.classList.toggle("unfilter");
};

const FilterState = (id) => {
  const element = document.getElementById(id);
  const classCheck = element.classList.contains("inactive");
  const checkClass = element.classList.contains("active");
  if (classCheck) {
    element.classList.toggle("active");
  } else {
    element.classList.toggle("inactive");
  }
  if (checkClass) {
    element.classList.toggle("active");
  } else element.classList.toggle("inactive");
};

const ActiveFilter = (id) => {
  const element = document.getElementById(id);
  let checkClass = document.querySelectorAll(".active");
  let noRender = document.querySelectorAll(".inactive");

  ChangeColor(id);

  for (var i = 0; i < checkClass.length; i++) {
    var a = checkClass[i];
    a.style.display = "block";
  }
  for (var k = 0; i < noRender.length; k++) {
    var b = noRender[k];
    b.style.display = "none";
  }
};

const InactiveFilter = (id) => {
  const element = document.getElementById(id);
  let checkClass = document.querySelectorAll(".inactive");
  let noRender = document.querySelectorAll(".active");

  ChangeColor(id);

  for (var i = 0; i < checkClass.length; i++) {
    var a = checkClass[i];
    a.style.display = "block";
  }
  for (var k = 0; i < noRender.length; k++) {
    var b = noRender[k];
    b.style.display = "none";
  }
};

const AllFilter = (id) => {
  const element = document.getElementById(id);
  const checkClass = document.querySelectorAll(".box");

  ChangeColor(id);

  for (var i = 0; i < checkClass.length; i++) {
    var a = checkClass[i];
    a.style.display = "block";
  }
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
