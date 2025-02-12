//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    
    console.log(nome);

    amigos.push(nome);
    atualizarLista();

    input.value = "";

}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
    
}

function sortearAmigo() {
    if ( amigos.length === 0){
        document.getElementById("resultado").innerHTML = "A lista está vazia. Adione alguns nomes para continuar";
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = `Amigo sorteado foi: 🎉${amigoSorteado}🎉`;

    console.log(indiceAleatorio);
    
}
