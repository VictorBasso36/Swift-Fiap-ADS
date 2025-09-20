   const initPlacar = () => {
        const placarElement = document.querySelector('.placar');
        if (!placarElement) return;

        const progressBar = document.getElementById('progress-bar');
        const percentText = document.getElementById('percent-text');
        const medalsContainer = document.getElementById('medals');

        if (!progressBar || !percentText || !medalsContainer) return;

        const totalMedals = 4;
        const allMedalItems = medalsContainer.querySelectorAll(".medals-item");
        const clientMedalsCount = allMedalItems.length;
        const percentage = totalMedals > 0 ? (clientMedalsCount / totalMedals) * 100 : 0;

        progressBar.style.width = percentage + '%';
        progressBar.setAttribute('aria-valuenow', percentage);
        percentText.textContent = Math.round(percentage) + '%';


        if (clientMedalsCount > 0) {
            allMedalItems.forEach(medal => medal.classList.add('active'));
        } else {
            allMedalItems.forEach(medal => medal.classList.remove('active'));
        }
    };

    const placarObserver = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            mutation.addedNodes.forEach(node => {

                if (node.nodeType === 1 && (node.classList.contains('placar') || node.querySelector('.placar'))) {
                    initPlacar();
                }
            });
          
        }
    });
    
    placarObserver.observe(document.body, { childList: true, subtree: true });
    document.addEventListener('DOMContentLoaded', initPlacar);