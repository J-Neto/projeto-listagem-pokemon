const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imgBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
    
    if (body.classList.contains("modo-escuro")) {
        body.classList.remove("modo-escuro");
        imgBotaoTrocaDeTema.setAttribute("src", "./src/assets/moon.png");
    } else {
        body.classList.add("modo-escuro");
        imgBotaoTrocaDeTema.setAttribute("src", "./src/assets/sun.png");
    }
});