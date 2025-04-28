document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem enviada! Obrigado pelo contato.');
  });
  
  const texto = "Anderson";
  const elemento = document.getElementById("nome-anderson");

  let index = 0;
  let apagando = false;

  function typeEffect() {
    if (!apagando) {
      elemento.textContent = texto.slice(0, index++);
      if (index > texto.length) {
        apagando = true;
        setTimeout(typeEffect, 1500); 
        return;
      }
    } else {
      elemento.textContent = texto.slice(0, --index);
      if (index === 0) {
        apagando = false;
      }
    }
    setTimeout(typeEffect, apagando ? 100 : 200); 
  }

  typeEffect();