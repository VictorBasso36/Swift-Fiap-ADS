document.addEventListener("DOMContentLoaded", () => {
  const totalMedals = 4; // total de medalhas possíveis

  document.querySelectorAll("tr[data-medals]").forEach(row => {
    let medalsWon = parseInt(row.getAttribute("data-medals"));

    const progressBar = row.querySelector(".progress-bar");
    const percentText = row.querySelector(".percent-text");
    const medals = row.querySelectorAll(".medals span");

    // Calcula %
    let percent = Math.round((medalsWon / totalMedals) * 100);

    // Atualiza barra
    progressBar.style.width = percent + "%";
    percentText.textContent = percent + "%";

    // Atualiza medalhas
    medals.forEach((medal, index) => {
      if (index < medalsWon) {
        medal.classList.add("active");
      } else {
        medal.classList.remove("active");
      }
    });
  });
});

