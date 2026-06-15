let tam = 16;
function aumentarFonte() {
    tam = tam + 1; 
    document.body.style.fontSize = tam + "px";
}

function diminuirFonte() {
        tam = tam - 1; 
        document.body.style.fontSize = tam+ "px";
}

function alternarTema() {
    var corpoPagina = document.body;
    var btnTema = document.querySelector(".btnTema");
    corpoPagina.classList.toggle("modoNoturnoFull");
}

/* tive que mudar essa parte de JS pq tava quebrando o resto kkkkk*/
window.onload = function() {
    var botaoSubmit = document.getElementById("submitButton");
    botaoSubmit.addEventListener("click", function(event) {
        event.preventDefault(); 
        alert("Página em construção");
    });
};

function toggleAcessibilidade() {
    document.getElementById("controlesFonte").classList.toggle("ativo");
}
