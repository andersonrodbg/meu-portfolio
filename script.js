const texto = "Meu nome é Anderson";
let index = 0;
let escrevendo = true;
const nomeAnderson = document.getElementById('nome-anderson');

function typeEffect() {
  if (escrevendo) {
    if (index < texto.length) {
      nomeAnderson.innerHTML += texto.charAt(index);
      index++;
      setTimeout(typeEffect, 100);
    } else {
      escrevendo = false;
      setTimeout(typeEffect, 2000); 
    }
  } else {
    if (index > 0) {
      nomeAnderson.innerHTML = texto.substring(0, index - 1);
      index--;
      setTimeout(typeEffect, 50);
    } else {
      escrevendo = true;
      setTimeout(typeEffect, 500); 
    }
  }
}

typeEffect();
