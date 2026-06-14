// Comportamento: ao clicar em "Enviar", dispara um alerta com a mensagem: "Página em construção".
document.getElementById("submitButton").addEventListener("click", function(event) {
    event.preventDefault(); // parar o submit do form
    alert("Página em construção");
});