function adicionarTarefa() {

    // Pegando o input
    let input = document.getElementById("tarefa");

    // Pegando o texto digitado
    let texto = input.value;

    // Verifica se está vazio
    if (texto == "") {
        alert("Digite uma tarefa!");
        return;
    }

    // Pegando a lista
    let lista = document.getElementById("lista");

    // Criando o item da lista
    let li = document.createElement("li");

    // Colocando o texto dentro do li
    li.innerHTML = texto;

    // Evento de concluir tarefa
    li.onclick = function() {
        li.classList.toggle("concluida");
    }

    // Criando botão remover
    let botao = document.createElement("button");

    botao.innerHTML = "Remover";

    // Evento remover
    botao.onclick = function() {
        li.remove();
        atualizarContador();
    }

    // Adicionando botão dentro do li
    li.appendChild(botao);

    // Colocando o li dentro da ul
    lista.appendChild(li);

    // Limpando input
    input.value = "";

    // Atualizando contador
    atualizarContador();
}

function atualizarContador() {

    let lista = document.getElementById("lista");

    let contador = document.getElementById("contador");

    contador.innerHTML = lista.children.length;
}

function limparTudo() {

    let lista = document.getElementById("lista");

    lista.innerHTML = "";

    atualizarContador();
}
