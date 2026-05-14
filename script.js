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

// NOVA FUNÇÃO: Limpar todas as tarefas
function limparTudo() {
    const lista = document.getElementById('lista');
    const totalTarefas = lista.children.length;
    
    if (totalTarefas === 0) {
        alert('✨ Não há tarefas para limpar! ✨');
        return;
    }
    
    // Criar modal de confirmação
    const modal = document.createElement('div');
    modal.className = 'modal-confirmar';
    modal.innerHTML = `
        <div class="modal-conteudo">
            <p>🐝 Tem certeza que deseja limpar todas as ${totalTarefas} tarefa${totalTarefas > 1 ? 's' : ''}? 🧹</p>
            <div class="modal-botoes">
                <button onclick="this.closest('.modal-confirmar').remove()">Cancelar</button>
                <button id="confirmarLimpar">Sim, limpar tudo</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Adicionar evento ao botão confirmar
    document.getElementById('confirmarLimpar').onclick = function() {
        // Animação de saída das tarefas
        const tarefas = document.querySelectorAll('#lista li');
        tarefas.forEach((tarefa, index) => {
            setTimeout(() => {
                tarefa.style.transform = 'translateX(100%)';
                tarefa.style.opacity = '0';
                setTimeout(() => {
                    if (tarefa.parentNode) {
                        tarefa.remove();
                    }
                }, 200);
            }, index * 50);
        });
        
        // Atualizar contador após limpar
        setTimeout(() => {
            atualizarContador();
            // Mostrar mensagem temporária
            const msgTemp = document.createElement('div');
            msgTemp.textContent = '🌸 Todas as tarefas foram limpas! 🌸';
            msgTemp.style.position = 'fixed';
            msgTemp.style.bottom = '20px';
            msgTemp.style.left = '50%';
            msgTemp.style.transform = 'translateX(-50%)';
            msgTemp.style.background = '#f0d86e';
            msgTemp.style.color = '#8b6914';
            msgTemp.style.padding = '10px 20px';
            msgTemp.style.borderRadius = '25px';
            msgTemp.style.fontWeight = 'bold';
            msgTemp.style.zIndex = '1000';
            msgTemp.style.animation = 'fadeIn 0.3s ease';
            document.body.appendChild(msgTemp);
            
            setTimeout(() => {
                msgTemp.style.opacity = '0';
                setTimeout(() => msgTemp.remove(), 300);
            }, 2000);
        }, tarefas.length * 50 + 100);
        
        // Fechar modal
        modal.remove();
    };
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
