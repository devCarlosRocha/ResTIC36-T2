// Espera que o DOM esteja completamente carregado antes de executar o código
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('userForm');
    var toggleModeBtn = document.getElementById('toggleMode');
    // Inicializar o estado do botão baseado no modo atual
    updateModeButton();
    // Manipulação do formulário
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var firstName = document.getElementById('firstName').value.trim();
        var lastName = document.getElementById('lastName').value.trim();
        // Validação dos campos obrigatórios
        if (firstName === '' || lastName === '') {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        // Redireciona para a página de sucesso
        window.location.href = 'index2.html';
    });
    // Alternar entre modos claro e escuro
    toggleModeBtn.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        updateModeButton();
    });
    function updateModeButton() {
        if (document.body.classList.contains('dark-mode')) {
            toggleModeBtn.textContent = '☀️'; // Modo escuro ativado
        }
        else {
            toggleModeBtn.textContent = '🌙'; // Modo claro ativado
        }
    }
});
