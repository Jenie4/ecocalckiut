const form = document.getElementById('ecoForm');
const resultado = document.getElementById('resultado');
const nivel = document.getElementById('nivel');
const consejo = document.getElementById('consejo');
const reiniciar = document.getElementById('reiniciar');
const barra = document.getElementById('barra');

form.addEventListener('submit', e => {
  e.preventDefault();

  const transporte = parseInt(document.getElementById('transporte').value);
  const carne = parseInt(document.getElementById('carne').value) || 0;
  const luz = parseInt(document.getElementById('luz').value) || 0;
  const reciclaje = parseInt(document.getElementById('reciclaje').value);

  const puntaje = transporte + reciclaje + Math.floor(carne / 3) + Math.floor(luz / 4);

  let resultadoTexto = '';
  let consejoTexto = '';
  let colorFondo = '';
  let barraColor = '';
  let ancho = 0;

  if (puntaje <= 6) {
    resultadoTexto = 'Huella baja 🌿';
    consejoTexto = 'Excelente. Mantén tus hábitos ecológicos y enseña a otros.';
    colorFondo = 'linear-gradient(135deg, #b9f6ca, #69f0ae)';
    barraColor = '#4caf50';
    ancho = 30;
  } else if (puntaje <= 10) {
    resultadoTexto = 'Huella media 🌾';
    consejoTexto = 'Reduce consumo de carne y energía para equilibrar tu impacto.';
    colorFondo = 'linear-gradient(135deg, #fff59d, #fbc02d)';
    barraColor = '#fbc02d';
    ancho = 65;
  } else {
    resultadoTexto = 'Huella alta 🔥';
    consejoTexto = 'Usa más transporte público, recicla y cuida tu consumo energético.';
    colorFondo = 'linear-gradient(135deg, #ffccbc, #ff8a65)';
    barraColor = '#f57c00';
    ancho = 100;
  }

  nivel.textContent = resultadoTexto;
  consejo.textContent = consejoTexto;
  resultado.classList.remove('oculto');
  document.body.style.background = colorFondo;

  // animar barra
  let progreso = 0;
  barra.style.background = barraColor;
  const animacion = setInterval(() => {
    if (progreso >= ancho) {
      clearInterval(animacion);
    } else {
      progreso++;
      barra.style.width = progreso + '%';
    }
  }, 15);
});

reiniciar.addEventListener('click', () => {
  form.reset();
  resultado.classList.add('oculto');
  barra.style.width = '0%';
  document.body.style.background = 'linear-gradient(135deg, #a8e6cf, #dcedc1)';
});