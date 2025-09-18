document.addEventListener("DOMContentLoaded", () => {
  const totalMedals = 4; // quantidade máxima de medalhas possíveis

  document.querySelectorAll("tbody tr").forEach(row => {
    const medalsWon = parseInt(row.getAttribute("data-medals")) || 0;

    const progressBar = row.querySelector(".progress-bar");
    const percentText = row.querySelector(".percent-text");
    const medals = row.querySelectorAll(".medals span");

    let percent = (medalsWon / totalMedals) * 100;

    // Atualiza barra
    progressBar.style.width = percent + "%";
    percentText.textContent = percent + "%";

    // Marca medalhas
    medals.forEach((medal, index) => {
      if (index < medalsWon) {
        medal.classList.add("active");
      } else {
        medal.classList.remove("active");
      }
    });
  });
});
