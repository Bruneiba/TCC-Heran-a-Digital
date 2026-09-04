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

t.includes('herança necessária') ||

t.includes('herdeiros necessários')

) {

return `

Os herdeiros necessários são os descendentes,

os ascendentes e o cônjuge.

O Código Civil determina que metade da herança

pertence a eles de pleno direito, formando a

chamada legítima.

Base legal: arts. 1.845 e 1.846 do Código Civil.

`;

}



if (

t.includes('o que') &&

t.includes('herança')

||

t.includes('herança digital')

) {

return `

Herança é o conjunto de bens, direitos e

obrigações transmissíveis deixados por uma

pessoa após seu falecimento.

A sucessão é aberta com a morte e a herança

é transmitida aos herdeiros legítimos e

testamentários.

Base legal: art. 1.784 do Código Civil.

`;

}



if (

t.includes('inventário')

) {

return `

O inventário é o procedimento usado para

identificar e organizar os bens, direitos,

dívidas e herdeiros da pessoa falecida.

O Código de Processo Civil disciplina o

inventário e a partilha nos arts. 610 e seguintes.

Em determinadas situações, o inventário também

pode ser realizado por escritura pública.

`;

}



if (

t.includes('prazo') &&

t.includes('inventário')

) {

return `

O Código de Processo Civil estabelece que

o processo de inventário e partilha deve ser

instaurado dentro de 2 meses a contar da

abertura da sucessão.

Base legal: art. 611 do CPC.

Podem existir consequências tributárias pelo

atraso conforme a legislação estadual ou distrital.

`;

}



if (

t.includes('dívida') ||

t.includes('divida')

) {

return `

As dívidas deixadas pelo falecido fazem parte

das obrigações relacionadas ao espólio.

O herdeiro não responde por encargos superiores

às forças da herança.

Base legal: art. 1.792 do Código Civil.

`;

}



if (

t.includes('testamento')

) {

return `

O testamento permite que uma pessoa capaz

disponha de seus bens para depois da morte,

respeitando os limites legais.

Quando existem herdeiros necessários,

a legítima deve ser preservada.

Base legal: arts. 1.789 e 1.857 do Código Civil.

`;

}



if (

t.includes('itcmd') ||

t.includes('imposto')

) {

return `

ITCMD significa Imposto sobre Transmissão

Causa Mortis e Doação.

É um imposto de competência dos estados

e do Distrito Federal, por isso as regras

podem variar conforme o local.

A regulamentação do inventário extrajudicial

teve atualização recente pela Resolução

CNJ nº 695/2026.

`;

}



if (

t.includes('documento')

) {

return `

A documentação varia conforme o caso.

A certidão de óbito é necessária para

o requerimento do inventário.

Também podem ser necessários documentos

dos herdeiros e documentos que comprovem

a existência e propriedade dos bens.

Base legal: arts. 615 e 620 do CPC.

`;

}



if (

t.includes('renunciar') ||

t.includes('renúncia') ||

t.includes('renuncia')

) {

return `

É possível renunciar à herança.

A renúncia precisa ser expressa e constar

de instrumento público ou termo judicial.

Base legal: art. 1.806 do Código Civil.

`;

}



if (

t.includes('digital') ||

t.includes('conta') ||

t.includes('rede social')

) {

return `

Contas, arquivos, conteúdos e outros elementos

digitais podem exigir uma análise específica

após o falecimento.

Nem todo conteúdo digital funciona juridicamente

da mesma forma que um bem tradicional.

O projeto ajuda a identificar esses elementos

e orienta o usuário a procurar ajuda profissional

quando houver uma questão jurídica específica.

`;

}



if (

t.includes('segurança') ||

t.includes('privacidade')

) {

return `

O projeto foi pensado para não exigir o

armazenamento de documentos pessoais.

Evite enviar senhas ou documentos sensíveis

para serviços desconhecidos.

Quando houver uma questão jurídica específica,

procure um profissional habilitado.

`;

}



return `

Posso explicar:

• herança

• inventário

• herdeiros necessários

• testamento

• dívidas

• ITCMD

• documentos

• renúncia à herança

• herança digital

Também posso explicar como o site funciona.

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
