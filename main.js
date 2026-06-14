var tam = 16;
function aumentarFonte() {
    tam = tam + 1; 
    document.body.style.fontSize = tam + "px";
}

function diminuirFonte() {
    if (tam > 10) { 
        tam = tam - 1; 
        document.body.style.fontSize = tam+ "px";
    }
}

function alternarTema() {
    var corpoPagina = document.body;
    var btnTema = document.querySelector(".btnTema");
    corpoPagina.classList.toggle("modoNoturnoFull");
    
    if (btnTema) {
        if (corpoPagina.classList.contains("modoNoturnoFull")) {
            btnTema.innerText = "Modo Claro";
        } else {
            btnTema.innerText = "Modo Dark";
        }
    }
}


/* tive que mudar essa parte de JS pq tava quebrando o resto kkkkk*/
window.onload = function() {
    var botaoSubmit = document.getElementById("submitButton");
    if (botaoSubmit) {
        botaoSubmit.addEventListener("click", function(event) {
            event.preventDefault(); 
            alert("Página em construção");
        });
    }
};