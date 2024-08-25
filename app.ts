// Espera que o DOM esteja completamente carregado antes de executar o código
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm') as HTMLFormElement;
    const toggleModeBtn = document.getElementById('toggleMode') as HTMLButtonElement;

    // Inicializar o estado do botão baseado no modo atual
    updateModeButton();

    // Manipulação do formulário
    form.addEventListener('submit', (event: Event) => {
        event.preventDefault();

        const firstName = (document.getElementById('firstName') as HTMLInputElement).value.trim();
        const lastName = (document.getElementById('lastName') as HTMLInputElement).value.trim();

        // Validação dos campos obrigatórios
        if (firstName === '' || lastName === '') {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        // Redireciona para a página de sucesso
        window.location.href = 'index2.html';
    });

    // Alternar entre modos claro e escuro
    toggleModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        updateModeButton();
    });

    function updateModeButton() {
        if (document.body.classList.contains('dark-mode')) {
            toggleModeBtn.textContent = '☀️'; // Modo escuro ativado
        } else {
            toggleModeBtn.textContent = '🌙'; // Modo claro ativado
        }
    }
});
