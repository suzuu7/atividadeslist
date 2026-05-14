//vai funcionar sim
let tarefas = [];

let tarefasSalvas = localStorage.getItem("tarefas");

if (tarefasSalvas) {
    tarefas = JSON.parse(tarefasSalvas);

    mostrarTarefas();
}

JSON.stringify()
JSON.parse()

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

    // Adiciona no array
    tarefas.push({
        texto: texto,
        concluida: false
    });

    salvarTarefas();

    mostrarTarefas();

    input.value = "";
}

function salvarTarefas() {

    localStorage.setItem(
        "tarefas",
        JSON.stringify(tarefas)
    );
}

function mostrarTarefas() {

    let lista = document.getElementById("lista");

    lista.innerHTML = "";

    tarefas.forEach(function(tarefa, indice) {

        let li = document.createElement("li");

        li.innerHTML = tarefa.texto;

        // Se concluída
        if (tarefa.concluida) {
            li.classList.add("concluida");
        }

        // Clique para concluir
        li.onclick = function() {

            tarefas[indice].concluida =
                !tarefas[indice].concluida;

            salvarTarefas();

            mostrarTarefas();
        }

        // Botão remover
        let botao = document.createElement("button");

        botao.innerHTML = "Remover";

        botao.onclick = function(event) {

            // Impede conflito com clique do li
            event.stopPropagation();

            tarefas.splice(indice, 1);

            salvarTarefas();

            mostrarTarefas();
        }

        li.appendChild(botao);

        lista.appendChild(li);
    });

    atualizarContador();
}

function atualizarContador() {

    let contador =
        document.getElementById("contador");

    contador.innerHTML = tarefas.length;
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
