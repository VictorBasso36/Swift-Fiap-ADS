document.addEventListener('DOMContentLoaded', () => {
    const contentOutlet = document.getElementById('content-outlet');
    const navLinks = document.querySelectorAll('.sidebar nav a');

    const loadContent = async (path) => {
        try {
            const response = await fetch(path);
            if (!response.ok) {
                window.location.replace('/dashboard/#inicio');
                throw new Error(`Erro ${response.status}: Não foi possível encontrar o recurso.`);
            }
            const htmlContent = await response.text();
            contentOutlet.innerHTML = htmlContent;
        } catch (error) {
            console.error('Erro ao carregar a página:', error);
            contentOutlet.innerHTML = `<h1>Erro ao carregar conteúdo</h1><p>Não foi possível encontrar a página em <code>${path}</code>. Verifique o console para mais detalhes.</p>`;
            window.location.replace('/dashboard/#inicio');
        }
    };


    const router = () => {

        const route = window.location.hash.substring(1) || 'home';
        const path = `./${route}/index.html`;


        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${route}`) {
                link.classList.add('active');
            }
        });

        loadContent(path);
    };


    window.addEventListener('hashchange', router);

    router();
});