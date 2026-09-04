function updateProgress() {

    const boxes = [
        ...document.querySelectorAll("#checklist input")
    ];

    const done = boxes.filter(box => box.checked).length;

    const percent = boxes.length
        ? Math.round((done / boxes.length) * 100)
        : 0;

    const progressBar = document.getElementById("progressBar");
    const progressText = document.getElementById("progressText");

    if (progressBar) {
        progressBar.style.width = percent + "%";
    }

    if (progressText) {
        progressText.textContent = percent + "%";
    }
}


function startInventory() {

    const inventory = document.getElementById("inventario");

    if (inventory) {
        inventory.scrollIntoView({
            behavior: "smooth"
        });
    }
}


function openChat() {

    const chatOverlay = document.getElementById("chatOverlay");

    if (chatOverlay) {
        chatOverlay.classList.add("open");
    }
}


function closeChat(event) {

    const chatOverlay = document.getElementById("chatOverlay");

    if (!chatOverlay) {
        return;
    }

    if (
        !event ||
        event.target === chatOverlay
    ) {
        chatOverlay.classList.remove("open");
    }
}


function ask(text) {

    const input = document.getElementById("chatInput");

    if (!input) {
        return;
    }

    input.value = text;

    sendMessage(new Event("submit"));
}


function sendMessage(event) {

    event.preventDefault();

    const input = document.getElementById("chatInput");

    if (!input) {
        return;
    }

    const text = input.value.trim();

    if (!text) {
        return;
    }

    addMessage(text, "user");

    input.value = "";

    setTimeout(() => {

        addMessage(
            botAnswer(text),
            "bot"
        );

    }, 450);
}


function addMessage(text, type) {

    const box = document.getElementById("messages");

    if (!box) {
        return;
    }

    const div = document.createElement("div");

    div.className = "message " + type;

    div.textContent = text;

    box.appendChild(div);

    box.scrollTop = box.scrollHeight;
}


function botAnswer(text) {

    const t = text.toLowerCase();


    if (
        (t.includes("o que") && t.includes("herança")) ||
        t.includes("herança digital")
    ) {

        return `Herança digital é o conjunto de contas, arquivos,
conteúdos e outros elementos da vida digital de uma pessoa que podem
ter importância após seu falecimento.

As regras podem variar conforme o serviço e a situação jurídica.`;
    }


    if (t.includes("inventário")) {

        return `O inventário é o procedimento utilizado para identificar
e organizar os bens, direitos e obrigações deixados pela pessoa falecida.

Este site possui informações gerais para ajudar na compreensão do tema,
mas elas não substituem orientação jurídica profissional.`;
    }


    if (
        t.includes("documento") ||
        t.includes("segurança") ||
        t.includes("privacidade")
    ) {

        return `O projeto foi pensado para não exigir o armazenamento de
documentos pessoais.

Evite enviar senhas ou documentos sensíveis para serviços desconhecidos
e procure orientação profissional quando necessário.`;
    }


    if (t.includes("testamento")) {

        return `O testamento é uma forma de uma pessoa manifestar sua
vontade sobre a destinação de seus bens após sua morte, respeitando os
limites estabelecidos pela legislação.

Em situações específicas, é importante consultar um advogado.`;
    }


    return `Posso explicar herança digital, inventário, privacidade,
testamento e o funcionamento deste projeto.

Para questões jurídicas específicas, procure um profissional habilitado.`;
}


function toggleMenu() {

    const nav = document.getElementById("mainNav");

    if (!nav) {
        return;
    }

    nav.classList.toggle("active");
}


/* Fecha o menu quando um link é clicado no celular */

document.querySelectorAll("#mainNav a").forEach(link => {

    link.addEventListener("click", () => {

        const nav = document.getElementById("mainNav");

        if (nav) {
            nav.classList.remove("active");
        }

    });

});