const URL = 'http://localhost:3000/';

// POST
export const enviarDados = async (name, idade) => {
    try {
        const dados = {
            name: name,
            idade: idade
        }
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        }
        const response = await fetch(`${URL}users`, config);
        if (!response.ok) {
            throw new Error(`Erro: ${response.statusText}`);
        }
        const data = await response.json();

        // Exibir um sweet alert

    } catch (error) {
        console.log('Erro ao criar usuario: ', error);
    }
}

// DELETE
export const removeUser = async (id) => {
    try {
        // Exibir alert de confirmação

        const response = await fetch(`${URL}users/${id}`, { method: 'DELETE'});

        if (!response.ok) throw new Error(`Error: ${response.statusText}`);

        // Exibir alert final

    } catch (error) {
        console.log(`Erro ao deletar usuário: ${error}`);
    }
}

// GET
// Por padrão as requisiçõe HTTP com fetch já são GET, por isso não é necessário especificar
export const getUsers = async () => {
    try {
        const response = await fetch(`${URL}users`);

        if (!response.ok) throw new Error(`Erro: ${response.statusText}`);

        const data = await response.json();

        return data;
    } catch (error) {
        console.log("Error: ", error);
    }
}

// PUT
export const editUser = async (id, name, age) => {
    try {
        const sendData = {
            name: name,
            idade: age
        };
        const config = {
            method: 'PUT',
            body: JSON.stringify(sendData),
            headers: {
                'Content-Type': 'application/json'
            },
        }
        const response = await fetch(`${URL}users/${id}`, config);
        
        if (!response.ok) throw new Error(`Erro: ${response.statusText}`);

        // Exibir sweet alert

    } catch (error) {
        console.log("Error: ", error);
    }
}