import { loadPortfolio } from "./pages/portfolio.js";
import { initSlideShow } from "./pages/sobre.js";
import { sendForm } from "./pages/contato.js";
import { loadFormacao } from "./pages/formacao.js";



function main() {
    initSlideShow();

    loadPortfolio();
    loadFormacao();

    const form = document.querySelector("#form-contato");

    form.addEventListener('submit', (event) => {
        sendForm(event)
        form.reset();
    });
}

document.addEventListener('DOMContentLoaded', main);