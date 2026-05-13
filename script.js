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

// Função original de adicionar tarefa
function adicionarTarefa() {
    const input = document.getElementById('tarefa');
    const tarefaTexto = input.value.trim();
    
    if (tarefaTexto === '') {
        alert('Por favor, digite uma tarefa!');
        return;
    }
    
    const lista = document.getElementById('lista');
    const li = document.createElement('li');
    
    const span = document.createElement('span');
    span.textContent = tarefaTexto;
    span.className = 'tarefa-texto';
    
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.className = 'botao-remover';
    botaoRemover.onclick = function() {
        li.remove();
        atualizarContador();
    };
    
    li.appendChild(span);
    li.appendChild(botaoRemover);
    lista.appendChild(li);
    
    input.value = '';
    atualizarContador();
}

function atualizarContador() {
    const lista = document.getElementById('lista');
    const contador = document.getElementById('contador');
    contador.textContent = lista.children.length;
}

// Criar abelhinhas voadoras
function criarAbelha() {
    const abelha = document.createElement('div');
    abelha.textContent = '🐝';
    abelha.className = 'abelha';
    
    // Posição aleatória
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    abelha.style.left = x + 'px';
    abelha.style.top = y + 'px';
    
    // Velocidade e direção aleatória
    const duracao = 10 + Math.random() * 15;
    abelha.style.animation = `voar ${duracao}s infinite ease-in-out`;
    
    document.body.appendChild(abelha);
    
    // Remover abelha depois de um tempo para não acumular muitas
    setTimeout(() => {
        if (abelha && abelha.parentNode) {
            abelha.remove();
        }
    }, duracao * 1000);
}

// Criar girassóis decorativos
function criarGirassol() {
    const girassol = document.createElement('div');
    girassol.textContent = '🌻';
    girassol.className = 'girassol-decor';
    girassol.style.position = 'fixed';
    girassol.style.fontSize = (30 + Math.random() * 50) + 'px';
    girassol.style.left = Math.random() * window.innerWidth + 'px';
    girassol.style.top = Math.random() * window.innerHeight + 'px';
    girassol.style.opacity = 0.1 + Math.random() * 0.2;
    girassol.style.pointerEvents = 'none';
    girassol.style.zIndex = '0';
    girassol.style.animation = `girar ${15 + Math.random() * 20}s infinite linear`;
    
    document.body.appendChild(girassol);
}

// Inicializar elementos decorativos
for (let i = 0; i < 8; i++) {
    criarGirassol();
}

// Criar abelhas periodicamente
setInterval(() => {
    if (document.body.children.length < 50) { // Limite para não sobrecarregar
        criarAbelha();
    }
}, 3000);

// Criar algumas abelhas iniciais
for (let i = 0; i < 5; i++) {
    setTimeout(() => criarAbelha(), i * 1000);
}

// Atualizar contador ao carregar a página
document.addEventListener('DOMContentLoaded', atualizarContador);