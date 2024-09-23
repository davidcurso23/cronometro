//Recuperamos los elementos
const btnInicioPausa = document.getElementById("btnInicio");
console.log(btnInicioPausa);
const btnReinicio = document.getElementById("btnReinicio");
console.log(btnReinicio);

// Cronómetro
const cronometro = document.getElementById("cronometro");

//Almaceno horas, minutos y segundos
let [segundos, minutos, horas] = [0, 0, 0];
//Almacenar el estado del cronómetro
let estadoCrono = "pausado";
let intevaloDeTiempo;

//Actualizar el cronómetro
function actualizaCrono() {
  segundos++;
  if (segundos / 60 === 1) {
    segundos = 0;
    minutos++;
    if (minutos / 60 === 1) {
      minutos = 0;
      horas++;
    }
  }
  // Agragaría el cero a la izquierda
  const segundosFormateado = darFormato(segundos);
  const minutosFormateado = darFormato(minutos);
  const horasFormateado = darFormato(horas);

  cronometro.innerText = `${horasFormateado}:${minutosFormateado}:${segundosFormateado}`;
}

//Dar formato Cronómetro
function darFormato(unidadTiempo) {
  return unidadTiempo < 10 ? "0" + unidadTiempo : unidadTiempo;
}

btnInicioPausa.addEventListener("click", () => {
  if (estadoCrono === "pausado") {
    //Llamamos a la función actualizaCrono para que sea cargada cada 1000 milisegundos
    intevaloDeTiempo = window.setInterval(actualizaCrono, 1000);
    btnInicioPausa.innerHTML = `<span class="material-symbols-outlined"> pause_circle </span>`;

    btnInicioPausa.classList.remove("inicio");
    btnInicioPausa.classList.add("pausa");
    estadoCrono = "iniciado";
  } else {
    window.clearInterval(intevaloDeTiempo);
    btnInicioPausa.innerHTML = `<span class="material-symbols-outlined">arrow_forward_ios </span>`;
    btnInicioPausa.classList.remove("pausa");
    btnInicioPausa.classList.add("inicio");
    estadoCrono = "pausado";
  }
});

btnReinicio.addEventListener("click", () => {
  //Limpiamos el intevalo de tiempo
  window.clearInterval(intevaloDeTiempo);
  //Reiniciamos los valores de las variables
  segundos = 0;
  minutos = 0;
  horas = 0;

  //Reiniciamos el valor del crono
  cronometro.innerHTML = "00:00:00";

  // Cambiamos a los valores por defecto.
  btnInicioPausa.innerHTML = `<span class="material-symbols-outlined">arrow_forward_ios </span>`;
  //Eliminamos las clase pausa y creamos la clase inicio
  btnInicioPausa.classList.remove("pausa");
  btnInicioPausa.classList.add("inicio");

  //cambiamos el estado
  estadoCrono = "pausado";
});
