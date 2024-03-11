const dropdownIcon = document.querySelector(".dropdown-icon");
const dropdownMenu = document.querySelector(".sub");
const TickAllBrands = document.querySelector(".tick-All");
const Ticks = document.querySelectorAll(".tick");
const Counter = document.querySelector(".selected");
const DeleteItems = document.querySelector(".remove-handler");
const tableRows = document.querySelectorAll("tr");
const searchBox = document.querySelector(".search");
let countSelected = 0;

dropdownIcon.addEventListener("click", function () {
  dropdownMenu.classList.toggle("active");
  dropdownIcon.classList.toggle("active");
  if (dropdownMenu.classList.contains("active")) {
    dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + 100 + "px";
  } else {
    dropdownMenu.style.maxHeight = null;
  }
});

function applyLinearColor() {
  var paragraphs = document.querySelectorAll(".tag");
  var colors = ["color-shade1", "color-shade2", "color-shade3", "color-shade4"]; // Add more colors here
  var colorIndex = 0;

  for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].classList.add(colors[colorIndex]);
    colorIndex = (colorIndex + 1) % colors.length;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  applyLinearColor();
});

TickAllBrands.addEventListener("change", (e) => {
  if (e.target.checked) {
    Ticks.forEach((checkbox) => {
      checkbox.checked = 1;
      countSelected = Ticks.length;
      Counter.innerHTML = countSelected;
    });
  } else {
    Ticks.forEach((checkbox) => {
      checkbox.checked = 0;
      countSelected = 0;
      Counter.innerHTML = countSelected;
    });
  }
});

Ticks.forEach((checkbox) => {
  checkbox.addEventListener("change", (e) => {
    if (e.target.checked) countSelected++;
    else countSelected--;
    Counter.innerHTML = countSelected;
    if (!e.target.checked && TickAllBrands.checked) TickAllBrands.checked = 0;
  });
});

DeleteItems.addEventListener("click", () => {
  Ticks.forEach((checkbox) => {
    if (checkbox.checked) {
      const currR = checkbox.parentElement.parentElement;
      currR.remove();
    }
  });
});

searchBox.addEventListener("input", () => {
  const searchText = searchBox.value.toLowerCase().trim();
  tableRows.forEach((row) => {
    const rowData = row.textContent.toLowerCase();
    if (rowData.includes(searchText)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
});
