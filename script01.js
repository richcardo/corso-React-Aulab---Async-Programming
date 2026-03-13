const container = document.getElementById("row");
const spinner = document.getElementById("spinner");

export async function fetchData() {
  const response = await fetch("./file.json");
  const data = await response.json();
  return data;
}

export const populatediv = async function () {
  spinner.classList.remove("d-none");
  const data = await fetchData();
  setTimeout(() => {
    spinner.classList.add("d-none");
  }, 2000);
  data.forEach((card) => {
    const cards = document.createElement("div");
    cards.classList.add("col-4", "my-4");
    cards.innerHTML = `
    <div class="card col-4" style="width: 18rem;">
      <div class="card-body">
      <h5 class="card-title">${card.nome}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">${card.prezzo}</h6>
      <p class="card-text">${card.categoria}</p>
      </div>
      </div>
      `;
    container.appendChild(cards);
  });
};
