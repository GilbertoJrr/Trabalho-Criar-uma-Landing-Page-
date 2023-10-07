function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;
    var tipo = document.querySelector('input[name="tipo"]:checked');
    var horarioContato = document.getElementById("horario_contato").value;
    var tipoServico = document.getElementById("tipo_servico").value;
    var descricaoServico = document.getElementById("descricao_servico").value;

    // Validação simples
    if (nome === "" || telefone === "" || email === "" || tipo === null || horarioContato === "" || tipoServico === "" || descricaoServico === "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false;
    }

    // Validação de e-mail
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailRegex)) {
        alert("Por favor, insira um endereço de e-mail válido.");
        return false;
    }

    return true;
}