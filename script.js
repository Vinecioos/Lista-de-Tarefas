const criarItem = document.querySelector('#criarItem');
const btn = document.querySelector('#btn')
const lista = document.querySelector('#lista');



let adcionarLista = []

criarItem.addEventListener('input', (event) => {

       event.preventDefault()

    if (!criarItem.value) {
        criarItem.classList.add('erro')
        criarItem.classList.remove('valido')
        btn.disabled = true
    } else {
        criarItem.classList.remove('erro')
        criarItem.classList.add('valido')
        btn.disabled = false
    }


 

});


btn.addEventListener('click', () => {

    const valorOriginal = criarItem.value
    const valorMinusculo = criarItem.value.toLowerCase();


    if (adcionarLista.includes(valorMinusculo)) {
      alert(`${valorOriginal} já existe um item com esse nome`)

    } else {
        adcionarLista.push(valorMinusculo)


        const node = document.createElement("li")
        node.textContent = valorOriginal

        const concluido = document.createElement("button")
        concluido.type = 'button'
        concluido.classList.add('concluir')


        const deletar = document.createElement("button")
        deletar.type = 'button'
        deletar.classList.add('apagar')

        lista.appendChild(node)
        
        node.appendChild(concluido);
        node.appendChild(deletar);
        
        concluido.addEventListener('click', () => {
            node.classList.add("tarefaConcluida")
            adcionarLista.pop(valorMinusculo)
        });

          deletar.addEventListener('click', () => {
            node.textContent = ''
            adcionarLista.pop(valorMinusculo)
            
        });

        console.log(adcionarLista)
    }

    

});


//VERSÃO CORRIGIDA PELO ChatGPT

/* 
const criarItem = document.querySelector('#criarItem');
const btn = document.querySelector('#btn');
const lista = document.querySelector('#lista');

let itens = [];  // <-- nome melhor

// =========================
// VALIDAÇÃO DO INPUT
// =========================

criarItem.addEventListener('input', () => {

    const texto = criarItem.value.trim(); // <-- remove espaços

    if (!texto) {
        criarItem.classList.add('erro');
        criarItem.classList.remove('valido');
        btn.disabled = true;
    } else {
        criarItem.classList.remove('erro');
        criarItem.classList.add('valido');
        btn.disabled = false;
    }
});

// =========================
// BOTÃO DE ADICIONAR
// =========================

btn.addEventListener('click', () => {

    const original = criarItem.value.trim();
    const normalizado = original.toLowerCase();

    // impedir duplicados
    if (itens.includes(normalizado)) {
        alert(`${original} já foi adicionado.`);
        return;
    }

    // adiciona no array
    itens.push(normalizado);

    // cria o elemento li
    const li = document.createElement("li");
    li.textContent = original;

    // botão concluir
    const concluir = document.createElement("button");
    concluir.type = "button";
    concluir.classList.add("concluir");

    // botão deletar
    const apagar = document.createElement("button");
    apagar.type = "button";
    apagar.classList.add("apagar");

    // adiciona elementos à lista
    lista.appendChild(li);
    li.appendChild(concluir);
    li.appendChild(apagar);

    // =========================
    // CONCLUIR
    // =========================
    concluir.addEventListener('click', () => {
        li.classList.toggle("tarefaConcluida");
    });

    // =========================
    // APAGAR
    // =========================
    apagar.addEventListener('click', () => {

        // remove da lista
        itens = itens.filter(item => item !== normalizado);  // <-- correção do seu pop

        // remove item da tela
        li.remove();  // <-- ao invés de apagar texto
    });

    // limpa input e reseta validação
    criarItem.value = "";
    criarItem.classList.remove('valido');
    btn.disabled = true;

    console.log(itens);
});


*/