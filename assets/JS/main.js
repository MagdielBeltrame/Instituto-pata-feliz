// Aguarda o documento estar pronto
document.addEventListener('DOMContentLoaded', function() {
    
    console.log("Instituto Pata Feliz - JS Carregado.");

    // NOTA PARA O ALUNO:
    // Este é o local ideal para implementar as MÁSCARAS de entrada
    // para os campos CPF, Telefone e CEP na página cadastro.html.
    //
    // Você pode usar bibliotecas como "IMask.js" ou "jQuery Mask Plugin",
    // ou criar sua própria função de máscara em JavaScript puro.
    
    // Exemplo de como selecionar os campos:
    const inputCPF = document.getElementById('cpf');
    const inputTelefone = document.getElementById('telefone');
    const inputCEP = document.getElementById('cep');

    if (inputCPF) {
        // Lógica da máscara de CPF aqui
        // inputCPF.addEventListener('input', mascaraCPF);
    }
    
    if (inputTelefone) {
        // Lógica da máscara de Telefone aqui
        // inputTelefone.addEventListener('input', mascaraTelefone);
    }

    if (inputCEP) {
        // Lógica da máscara de CEP aqui
        // inputCEP.addEventListener('input', mascaraCEP);
    }

});