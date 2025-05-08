let botao = document.querySelector("#botao");
let mensagem = document.getElementById("mensagem");

botao.addEventListener("click", quandoClicado);

function quandoClicado(){
    mensagem.textContent = '"São as pequenas coisas, as ações cotidianas das pessoas comuns que mantêm a escuridão afastada." - Gandalf the White';
}
