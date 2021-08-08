// Import stylesheets
import './style.css';
import { Greeter } from './greeter';

// Write TypeScript code!

// Template String

let title: String = 'Meu App!';

let paragraph: String = 'Descrição do app';

let paragraph2: string = 'Outra descrição';

let title2: string = 'Meu app 2';

const appTitle: HTMLElement = document.getElementById('app.title');
appTitle.innerHTML = title2;

const appParagraph: HTMLElement = document.getElementById('app.paragraph');
appParagraph.innerHTML = paragraph2;

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>${title}</h1> <p>${paragraph}</p>`;

console.log('Boa Noite!!!');

// laço for

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// counter

let counter = 0;

let intervalId = setInterval(() => {
  counter = counter + 1;
  const appParagraph: HTMLElement = document.getElementById('app.counter');
  appParagraph.innerHTML = counter + '';
}, 1000);

// eventos
const btn = document.getElementById('app.button');
btn.addEventListener('click', alertMethod);
function alertMethod(this: HTMLElement, ev: Event) {
  alert('ALERTA FUNCIONANDO!!');
}

//classe greeter

let greeter = new Greeter('Greeter!');
const appParagraphG: HTMLElement = document.getElementById('app.g');
appParagraphG.innerHTML = greeter.getGreeting();
