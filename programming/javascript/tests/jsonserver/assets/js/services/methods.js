import { getUsers } from "./api.js";

export const renderGridUsers = async () => {
    const userSection = document.querySelector("#userdata");
    userSection.innerHTML = '';
    try {
        const res = await getUsers();
    
        res.forEach(user => {
            userSection.innerHTML += `
                <tr>
                    <td>${user.name}</td>
                    <td>${user.idade}</td>
                    <td>
                        <button data-user-id="${user.id}" class="openModal"> Editar </button>
                        <button data-user-id="${user.id}" class="delUser">Excluir</button>
                    </td>
                <tr>
            `
        });
    } catch (err) {
        console.log('Erro ao renderizar usuários: ', err);
    }
}