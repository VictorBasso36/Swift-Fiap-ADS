const initEquipePlacar = () => {
  const totalMedals = 4; 

  document.querySelectorAll("tr[data-medals]").forEach(row => {
    let medalsWon = parseInt(row.getAttribute("data-medals"));

    const progressBar = row.querySelector(".progress-bar");
    const percentText = row.querySelector(".percent-text");
    // ABAIXO, a linha foi alterada de ".medals span" para ".equipe-medals span"
    const medals = row.querySelectorAll(".equipe-medals span");

    if (!progressBar || !percentText || !medals) {
      return;
    }
    
    let percent = Math.round((medalsWon / totalMedals) * 100);

    progressBar.style.width = percent + "%";
    percentText.textContent = percent + "%";

    medals.forEach((medal, index) => {
      if (index < medalsWon) {
        medal.classList.add("active");
      } else {
        medal.classList.remove("active");
      }
    });
  });
};

const observer = new MutationObserver((mutationsList, obs) => {
  if (document.querySelector('tr[data-medals]')) {
    initEquipePlacar();
    obs.disconnect(); 
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

document.addEventListener('DOMContentLoaded', initEquipePlacar);

