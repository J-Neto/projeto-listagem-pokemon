const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imgBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
    
    body.classList.toggle("modo-escuro");

    if (body.classList.contains("modo-escuro")) {
        imgBotaoTrocaDeTema.setAttribute("src", "./src/assets/moon.png");
    } else {
        imgBotaoTrocaDeTema.setAttribute("src", "./src/assets/sun.png");
    }
});