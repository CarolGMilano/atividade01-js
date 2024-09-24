const title = document.getElementById("titulo");
const helloBtn = document.getElementById("botao-ola");
const changeTitleBtn = document.getElementById("btn-mudar-titulo");

const mensagem = document.getElementsByClassName("mensagem2");
const changeTitle3 = document.getElementById("btn-mudar-3");

// Evento de clique para exibir uma mensagem "Olá"
helloBtn.addEventListener("click", function () {
  alert("Olá!");
});

// Evento de clique para alterar o texto do título
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "O Titulo foi mudado utilizando JS!";
});

changeTitle3.addEventListener("click", function() {
    for(let i = 0; i < mensagem.length; i++) {
        mensagem[i].textContent = `A frase ${i+1} foi modificada.`;
        mensagem[i].style.color = "blue";
    }
});
