

export function sendForm(event) {
        event.preventDefault(); 


        const data = new FormData(event.target);

        const name = data.get('name');
        const email = data.get('email');
        const message = data.get('message');

        if (!name || !email || !message) {
            alert("Por favor, preencha todos os campos");
            return;
        }


        console.log("Nome: ", name);
        console.log("Email: ", email);
        console.log("Message: ", message);

        alert("Formulário enviado");
}