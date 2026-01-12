import { enviarDados, removeUser, editUser } from './api.js';
import { renderGridUsers } from './methods.js';

export default function setupEventListeners() {
    const submit = document.querySelector('#enviar');
    const modal = document.getElementById("modalEdit");
    const span = document.getElementById("closeModal");
    var submitEdit = document.querySelector("#submitEdit");
    const bodyTable = document.querySelector("#userdata");

    // Evento de envio de novo usuário
    submit.addEventListener('click', () => {
        let name = document.querySelector('#newUserName').value;
        let idade = document.querySelector('#newUserAge').value;

        enviarDados(name, idade).then(() => {
            renderGridUsers();
        }).catch(err => {
            console.log(err);
        })
    });

    /*
        Nesse momento tive problemas para deletar pois os botões eram inseridos dinamicamente e o JS não inseria os eventos neles pois ainda não existiam.
        Nesse caso optei por utilizar a delegação de eventos
        
        event.target =  Identificar o elemento especifico que sofreu o evento
        event.target.matches = Como no bodyTable vamo ter mais de um tipo de botão precisamos identificar qual tipo foi clicado. Nesse caso realizamos uma validação
        para saber se o botão clicado foi o de deletar ou editar usuário. Esse método realiza uma verificação e caso o elemento com o seletor especificado como paramentro
        for o selecionado retorna TRUE.

        Documentação sobre o target: https://developer.mozilla.org/pt-BR/docs/Web/API/Event/target
        Documentação sobre o matches: https://developer.mozilla.org/en-US/docs/Web/API/Element/matches 

        Utilização dos atributos data-*: Melhora a semântica do código e evita o uso do valor dos botões para armazenar valor
    */
    bodyTable.addEventListener('click', (event) => {
        const target = event.target;
        if (target.matches("button.delUser")) {
            const userId = target.getAttribute('data-user-id'); 
            removeUser(userId); 
        } else if(target.matches('button.openModal')) {
            const userId = target.getAttribute('data-user-id');
            modal.classList.add('show');
            submitEdit.value = userId;
        }
    });

    submitEdit.addEventListener('click', () => {
        const userId = submitEdit.value;
        const name = document.querySelector("#editUserName").value;
        const idade = document.querySelector("#editUserAge").value;
        
        editUser(userId, name, idade).then(() => {
            renderGridUsers();
            modal.style.display = "none"; 
        }).catch(error => {
            console.error("Erro ao editar usuário:", error);
        });
    });

    span.addEventListener('click', () => {
        modal.style.display = "none";
    });

    window.addEventListener('click', event => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}