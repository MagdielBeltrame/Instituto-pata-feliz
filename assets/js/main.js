
document.addEventListener('DOMContentLoaded', () => {
    // ====================================
    // 1. LÓGICA DO DARK MODE (Com Local Storage)
    // ====================================

    const body = document.body;
    const darkModeToggle = document.getElementById('dark-mode-toggle'); 
    const localStorageKey = 'theme-preference';

    /**
     * Aplica o tema salvo ou o tema padrão ao carregar.
     * @param {string} theme - O tema a ser aplicado ('dark' ou 'light').
     */
    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            if (darkModeToggle) {
                // Atualiza o texto do botão para refletir o estado
                darkModeToggle.textContent = '☀️ Modo Claro';
            }
        } else {
            body.classList.remove('dark-mode');
            if (darkModeToggle) {
                darkModeToggle.textContent = '🌓 Modo Escuro';
            }
        }
    }

    /**
     * Alterna o Dark Mode e salva a preferência no Local Storage.
     */
    function toggleDarkMode() {
        const isCurrentlyDark = body.classList.contains('dark-mode');
        const newTheme = isCurrentlyDark ? 'light' : 'dark';
        
        applyTheme(newTheme);
        localStorage.setItem(localStorageKey, newTheme);
    }

    // --- Inicialização do Dark Mode ---
    let savedTheme = localStorage.getItem(localStorageKey);
    
    if (!savedTheme) {
        // Verifica a preferência do sistema se não houver salvamento
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            savedTheme = 'dark';
        } else {
            savedTheme = 'light';
        }
    }
    
    applyTheme(savedTheme);

    // Adiciona o listener de evento ao botão
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }
    
    // ====================================
    // 2. LÓGICA DO MENU HAMBÚRGUER (MOBILE)
    // ====================================

    const menuToggler = document.querySelector('.menu-toggler');
    const navMenu = document.querySelector('.main-header nav');
    
    if (menuToggler && navMenu) {
        menuToggler.addEventListener('click', () => {
            menuToggler.classList.toggle('is-open'); 
            navMenu.classList.toggle('is-visible'); 
        });
        
        // Fecha o menu ao clicar em um link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                setTimeout(() => {
                    menuToggler.classList.remove('is-open');
                    navMenu.classList.remove('is-visible');
                }, 200); 
            });
        });
    }

    // ====================================
    // 3. LÓGICA DE FILTRO DA SIDEBAR (COMPLETA)
    // ====================================

    const asideListItems = document.querySelectorAll('.aside li');
    const petCards = document.querySelectorAll('.pet-card');

    /**
     * Filtra os cartões da galeria com base na categoria.
     * @param {string} category - A categoria a ser exibida ('all', 'dog', 'cat', etc.).
     */
    function filterCards(category) {
        petCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            
            if (category === 'all' || cardCategory === category) {
                // Mostra o cartão (usando display block/flex ou simplesmente removendo a classe 'hidden')
                card.style.display = 'block'; 
            } else {
                // Esconde o cartão
                card.style.display = 'none'; 
            }
        });
    }

    if (asideListItems.length > 0) {
        asideListItems.forEach(item => {
            item.addEventListener('click', function() {
                // 1. Alterna a classe 'ativo' no filtro
                asideListItems.forEach(i => i.classList.remove('ativo'));
                this.classList.add('ativo');

                // 2. Obtém a categoria do data-attribute
                const filterCategory = this.getAttribute('data-filter');
                
                // 3. Executa a função de filtro
                filterCards(filterCategory);
            });
        });
        
        // Inicializa o filtro para garantir que 'Todos' esteja selecionado ao carregar
        filterCards('all');
    }
});