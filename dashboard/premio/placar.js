    // Quantidade de medalhas conquistadas pela equipe
    let medalsWon = 2; // Exemplo: 3 medalhas conquistadas
    let totalMedals = 4;

    const progressBar = document.getElementById("progress-bar");
    const percentText = document.getElementById("percent-text");
    const medals = document.querySelectorAll("#medals span");

    function updateProgress(medalsWon) {
      // Calcula a porcentagem
        let percent = (medalsWon / totalMedals) * 100;

      // Atualiza a barra
        progressBar.style.width = percent + "%";
        percentText.textContent = percent + "%";

      // Marca as medalhas conquistadas
        medals.forEach((medal, index) => {
            if (index < medalsWon) {
        medal.classList.add("active");
            } else {
        medal.classList.remove("active");
        }
        });
    }

    // Atualiza de acordo com as medalhas conquistadas
    updateProgress(medalsWon);