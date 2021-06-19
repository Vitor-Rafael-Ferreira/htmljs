let header = document.querySelector('header');
let h1 = document.createElement('h1');

let main = document.querySelector('main');
let div1 = document.createElement('div');
let div2 = document.createElement('div');
let h21 = document.createElement('h2');
let h22 = document.createElement('h2');
let p1 = document.createElement('p');
let p2 = document.createElement('p');
let texto = document.createTextNode("meu texto gigante :)");

header.appendChild(h1);
h1.appendChild(texto);
main.appendChild(div1);
main.appendChild(div2);
div1.appendChild(h21);
div2.appendChild(h22);
div1.appendChild(p1);
div2.appendChild(p2);