const initPlacar = () => {
    const progressBar = document.getElementById('progress-bar');
    const percentText = document.getElementById('percent-text');
    const medalsContainer = document.getElementById('medals');

    if (!progressBar || !percentText || !medalsContainer) return;

    const totalMedals = 4;
    const allMedalItems = medalsContainer.querySelectorAll(".medals-item");
    const clientMedalsCount = allMedalItems.length;
    const percentage = (clientMedalsCount / totalMedals) * 100;

    progressBar.style.width = percentage + '%';
    percentText.textContent = Math.round(percentage) + '%';

    // Adiciona/remove a classe 'active' com base na contagem de medalhas
    if (clientMedalsCount > 0) {
        allMedalItems.forEach(medal => medal.classList.add('active'));
    } else {
        allMedalItems.forEach(medal => medal.classList.remove('active'));
    }
};

const observer = new MutationObserver((mutationsList, obs) => {
    if (document.querySelector('.placar')) {
        initPlacar();
        obs.disconnect(); // Otimização: para de observar após encontrar
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

// Fallback para carregamento padrão
document.addEventListener('DOMContentLoaded', initPlacar);