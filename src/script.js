const totalCells = 256; // 16x16 grid
const container = document.getElementById("gridContainer");

for (let i = 1; i <= totalCells; i++) {
  const cell = document.createElement("div");
  cell.classList.add("gridItem");
  cell.textContent = "";
  container.appendChild(cell);
}
