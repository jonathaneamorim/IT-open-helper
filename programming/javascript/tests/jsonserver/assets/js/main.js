import { getUsers  } from "./services/api.js";
import { renderGridUsers } from "./services/methods.js";
import setupEventListeners from "./services/events.js";

async function init() {
    try {
        const users = await getUsers();
        renderGridUsers(users);
        setupEventListeners();
    } catch(error) {
        console.log("Erro ao inicializar a aplicação: ", error);
    }
}

document.addEventListener('DOMContentLoaded', init);
