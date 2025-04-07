let salvarDados = function (event) {
    event.preventDefault(); // Evita o envio do formulário

    let dadosBancarios = { 
        numeroCartao: document.getElementById('numerocartao').value,
        validade: document.getElementById('validade').value,
        codSeguranca: document.getElementById('codsegurança').value
    };

    sessionStorage.setItem('dadosBancarios', JSON.stringify(dadosBancarios));

    alert("Dados bancários salvos com sucesso!");
};

// Adiciona o event listener ao formulário
document.getElementById('form-dados').addEventListener('submit', salvarDados);
