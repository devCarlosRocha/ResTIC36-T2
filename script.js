document.addEventListener('DOMContentLoaded', function () {
    const toggleModeBtn = document.getElementById('toggleMode');

    if (toggleModeBtn) {
        // Inicializar o estado do botão baseado no modo atual
        updateModeButton();

        // Alternar entre modos claro e escuro
        toggleModeBtn.addEventListener('click', function () {
            document.body.classList.toggle('dark-mode');
            updateModeButton();
        });
    }

    function updateModeButton() {
        if (document.body.classList.contains('dark-mode')) {
            toggleModeBtn.textContent = '☀️'; // Modo escuro ativado
        } else {
            toggleModeBtn.textContent = '🌙'; // Modo claro ativado
        }
    }
});
