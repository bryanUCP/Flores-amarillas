// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

var titulo2 = document.querySelector(".titulo2");
titulo2.style.display = "none";

var titulo3 = document.querySelector(".titulo3");
titulo3.style.display = "none";

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
/*var lyricsData = [
  { text: "A pesar de mis defectos", time: 16 },
  { text: "y de todos mis errores", time: 18 },
  { text: "me aceptas como soy", time: 20 },
  { text: "un amor sin condiciones", time: 23 },
  { text: "pasarán mil años y yo seguiré", time: 25 },
  { text: "contigo", time: 27 },
  { text: "confía en mi palabra", time: 29 },
  { text: "tú dime dónde firmo", time: 31 },
  { text: "Eres una en un millón", time: 33 },
  { text: "Y es un honor que me elegiste a mí", time: 36 },
  { text: "mi mayor motivación", time: 38 },
  { text: "es verte despertar y sonreír", time: 40 },
  { text: "tú le diste otro destino a toda mi vida", time: 42 },
  { text: "pero para bien", time: 44 },
  { text: "El significado de lo que es amar", time: 46 },
  { text: "en ti ya lo encontré", time: 49 },
  { text: "POR TI VOLVÍ A CREER", time: 51 },
  { text: "todo me sale bien", time: 53 },
  { text: "tú me sostienes y levantas si vuelvo a caer", time: 56 },
  { text: "yo siempre tuve fe", time: 59 },
  { text: "que tú ibas a llegar", time: 61 },
  { text: "cariño como el tuyo vale la pena esperar", time: 63 },
  { text: "amor te va a sobrar", time: 66 },
  { text: "no te voy a fallar", time: 68 },
  { text: "mi corazón dejó apartado para ti un lugar", time: 71 },
  { text: "no hay nada que buscar, lo encuentro todo en ti", time: 73 },
  { text: "contigo ahora realmente sé lo que se siente", time: 75 },
  { text: "SER FELIZ", time: 78 },
  { text: "Eres una en un millón", time: 88 },
  { text: "y es un honor que me elegiste a mí", time: 90 },
  { text: "mi mayor motivación", time: 92 },
  { text: "es verte despertar y sonreír", time: 94 },
  { text: "tú le diste a otro destino toda mi vida", time: 89 },
  { text: "pero para bien", time: 91 },
  { text: "el significado de lo que es amar", time: 93 },
  { text: "en ti ya lo encontré", time: 96 },
  { text: "POR TI VOLVÍ A CREER", time: 99 },
  { text: "todo me sale bien", time: 101 },
  { text: "tú me sostienes y levantas si vuelvo a caer", time: 104 },
  { text: "yo siempre tuve fe", time: 106 },
  { text: "que tú ibas a llegar", time: 108 },
  { text: "cariño como el tuyo vale la pena esperar", time: 110 },
  { text: "amor te va a sobrar", time: 113 },
  { text: "no te voy a fallar", time: 116 },
  { text: "mi corazón dejó apartado para ti un lugar", time: 119 },
  { text: "no hay nada que buscar, lo encuentro todo en ti", time: 122 },
  { text: "contigo ahora realmente sé lo que se siente", time: 125 },
  { text: "SER FELIZ", time: 128 },
  { text: "a pesar de mis defectos", time: 138 },
  { text: "y de todos mis errores", time: 141 },
  { text: "me aceptas como soy", time: 143 },
  { text: "un amor sin condiciones", time: 145 },
  { text: "pasarán mil años y yo seguiré", time: 147 },
  { text: "CONTIGO", time: 150 },
  { text: "confía en mi palabra", time: 152 },
  { text: "tú dime dónde firmo.", time: 154 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 3 // ajustado para coincidir mejor con la canción
  );

  if (currentLine) {
    var fadeInDuration = 0.5; // Efecto de aparición más suave
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 400); // Actualización más frecuente para suavizar el cambio de letras
*/

// Función para ocultar el título después de 70 segundos (aproximadamente la duración del primer verso)
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultarlo completamente
}

function mostrarTitulo2() {
  var titulo2 = document.querySelector(".titulo2");
  setTimeout(function () {
    titulo2.style.display = "block";
  }, 3000); // Espera 3 segundos antes de ocultarlo completamente
}

function ocultarTitulo2() {
  var titulo2 = document.querySelector(".titulo2");
  titulo2.style.animation = "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo2.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultarlo completamente
}

function mostrarTitulo3() {
  var titulo3 = document.querySelector(".titulo3");
  setTimeout(function () {
    titulo3.style.display = "block";
  }, 3000); // Espera 3 segundos antes de ocultarlo completamente
}


// Llama a la función después de 30 segundos (70,000 milisegundos)
setTimeout(ocultarTitulo, 30000);
setTimeout(mostrarTitulo2, 32000);
setTimeout(ocultarTitulo2, 55000);
setTimeout(mostrarTitulo3, 56000);
