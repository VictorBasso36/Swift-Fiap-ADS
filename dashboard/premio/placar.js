/**
 * Inicializa a funcionalidade da barra de progresso do placar.
 */
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


//inicializa os botões de resgate de prêmio.
const initPrizeButtons = () => {

    const rescueButtons = document.querySelectorAll('.modal .btn-success');

    rescueButtons.forEach(button => {
        
        if (button.dataset.rescueInitialized) {
            return;
        }


        button.addEventListener('click', () => {
            alert('Sucesso! Fale com seu gestor mais próximo para seu resgate.');
        
            const modal = button.closest('.modal');
            if (modal) {
                const modalInstance = bootstrap.Modal.getInstance(modal);
                if (modalInstance) {
                    modalInstance.hide();
                }
            }
        });

 
        button.dataset.rescueInitialized = 'true';
    });
};


const contentObserver = new MutationObserver((mutationsList) => {
    
    const hasAddedNodes = mutationsList.some(mutation => mutation.type === 'childList' && mutation.addedNodes.length > 0);

    if (hasAddedNodes) {
      
        contentObserver.disconnect();

        initPlacar();
        initPrizeButtons();

       
        contentObserver.observe(document.body, { childList: true, subtree: true });
    }
});


contentObserver.observe(document.body, { childList: true, subtree: true });

document.addEventListener('DOMContentLoaded', () => {
    initPlacar();
    initPrizeButtons();
});