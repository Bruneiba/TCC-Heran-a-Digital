function updateProgress() {

const boxes = [
...document.querySelectorAll(
'#checklist input'
)
];

const done =
boxes.filter(
box => box.checked
).length;

const percent =
Math.round(
done / boxes.length * 100
);

document.getElementById(
'progressBar'
).style.width = percent + '%';

document.getElementById(
'progressText'
).textContent = percent + '%';
}


function startInventory() {

document
.getElementById('inventario')
.scrollIntoView({
behavior: 'smooth'
});

}


function openChat() {

document
.getElementById('chatOverlay')
.classList.add('open');

}


function closeChat(event) {

if (
!event ||
event.target ===
document.getElementById('chatOverlay')
) {

document
.getElementById('chatOverlay')
.classList.remove('open');

}

}


function ask(text) {

document.getElementById(
'chatInput'
).value = text;

sendMessage(
new Event('submit')
);

}


function sendMessage(event) {

event.preventDefault();

const input =
document.getElementById(
'chatInput'
);

const text =
input.value.trim();

if (!text) return;

addMessage(
text,
'user'
);

input.value = '';

setTimeout(
() => {

addMessage(
botAnswer(text),
'bot'
);

},
450
);

}


function addMessage(
text,
type
) {

const box =
document.getElementById(
'messages'
);

const div =
document.createElement(
'div'
);

div.className =
'message ' + type;

div.textContent =
text;

box.appendChild(div);

box.scrollTop =
box.scrollHeight;

}


function botAnswer(text) {

const t =
text.toLowerCase();


if (
(
t.includes('o que') &&
t.includes('herança')
)
||
t.includes('herança digital')
) {

return `
Herança digital é o conjunto de contas,
arquivos, conteúdos e outros elementos da
vida digital de uma pessoa que podem ter
importância após seu falecimento.

As regras podem variar conforme o serviço
e a situação jurídica.
`;

}


if (
t.includes('inventário')
) {

return `
O inventário digital é uma forma de
identificar e organizar os seus ativos
digitais.

O checklist deste site ajuda a lembrar
categorias importantes.

Ele não substitui um inventário jurídico.
`;

}


if (
t.includes('documento') ||
t.includes('segurança') ||
t.includes('privacidade')
) {

return `
O projeto foi pensado para não exigir
o armazenamento de documentos pessoais.

Evite enviar senhas ou documentos sensíveis
para serviços desconhecidos e procure
orientação profissional quando necessário.
`;

}


return `
Posso explicar herança digital,
inventário, privacidade e o funcionamento
deste projeto.

Para questões jurídicas específicas,
procure um profissional habilitado.
`;

}


function toggleMenu() {

const nav =
document.querySelector('nav');

nav.style.display =
nav.style.display === 'flex'
? 'none'
: 'flex';

if (
nav.style.display === 'flex'
) {

nav.style.position =
'absolute';

nav.style.top =
'78px';

nav.style.left =
'0';

nav.style.right =
'0';

nav.style.background =
'white';

nav.style.padding =
'20px';

nav.style.flexDirection =
'column';

}

}