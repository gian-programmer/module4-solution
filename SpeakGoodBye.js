// ¡NOTA! Los pasos de este archivo son básicamente idénticos a los que
// realizado en el archivo SpeakHello.js.

// PASO 6: Envuelva todo el contenido de SpeakGoodBye.js dentro de un IIFE
// Ver Clase 52, parte 2


// PASO 7: Cree un objeto, llamado 'byeSpeaker' al que adjuntará
// el método "speak" y que expondrá al contexto global
// Ver Clase 52, parte 1
// var byeSpeaker =

// NO adjunte la variable speakWord al objeto 'byeSpeaker'.
var speakWord = "Good Bye";

// PASO 8: Vuelva a escribir la función 'hablar' de manera que esté adjunta a la
// objeto byeSpeaker en lugar de ser una función independiente.
// Ver Clase 52, parte 2
function speak(name) {
  console.log(speakWord + " " + name);
}

// PASO 9: Exponga el objeto 'byeSpeaker' al alcance global. Nombralo
// 'byeSpeaker' también en el ámbito global.
// xxxx.xxxx = byeSpeaker;