const title = document.getElementById("titulo");
const mensagem = document.querySelectorAll(".mensagem2");
const helloBtn = document.getElementById("botao-ola");
const changeTitleBtn = document.getElementById("btn-mudar-titulo");
const changeTitle3 = document.getElementById("btn-mudar-3");

// Evento de clique para exibir uma mensagem "Olá"
helloBtn.addEventListener("click", function () {
  alert("Olá!");
});

// Evento de clique para alterar o texto do título
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "O Titulo foi mudado utilizando JS!";
});

changeTitle3.addEventListener("click", function () {
    mensagem.forEach((mensagem, index) => {
        mensagem.textContent = `A frase ${index+1} foi modificada`;
        mensagem.style.color = "blue";
    })
});