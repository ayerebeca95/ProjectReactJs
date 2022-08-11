/*const flecha = nombre => 

const nombre = "aye";
const apellido = "torres"
const frase = `soy ${nombre} ${apellido} y tengo ${15+18} años `;
console.log(frase);*/

const botonElemento = document.getElementById("boton");
console.log(botonElemento);
const parrafoText = document.getElementById("parrafo");
console.log(parrafoText);
botonElemento.addEventListener("click",()=>{
    console.log("hiciste click genia vamos por mas");
    parrafo.innerHTML = "NUEVO TEXTO"
})
