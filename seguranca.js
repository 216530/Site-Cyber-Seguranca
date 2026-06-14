function gerarSenha() {
    var caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";
    var senha = "";
    
    for (var i = 0; i < 16; i++) {
        var posicao = Math.floor(Math.random() * caracteres.length);
        senha = senha + caracteres[posicao];
    }
    
    document.getElementById("passwordDisplay").value = senha;
}

/*tá funcionano, não mexam rapazes... */