document.addEventListener("DOMContentLoaded", function() {
  let puntUsuario = 0;
  let puntPc = 0;
  let pc = document.getElementById("pcEleccion");
  let piedraBot = document.getElementById("piedra");
  let papelBot = document.getElementById("papel");
  let tijeraBot = document.getElementById("tijeras");
  let resultText = document.getElementById("textInicio");
  const usuarioDiv = document.getElementById("usuario");
  const inputUsuario = usuarioDiv.querySelector("input");
  const textInicio = document.getElementById("textInicio");
  const seleccionDiv = document.getElementById("seleccion");
  const puntaje1 = document.getElementById("punto1");
  const puntaje2 = document.getElementById("punto2");
  
  //  limito el juego para que se inicie solamente cuando se presione enter
  inputUsuario.addEventListener("keydown", function(event) {
    const nombreUsuario = inputUsuario.value;

    if (event.key === "Enter") {
       const botones = document.querySelectorAll("#seleccion button");

      //  muestro los botones solamente cuando se ingresa el nombre
        for (let boton of botones) {
            boton.style.display = "block";
        }
      // si la pc o el usuario llegan a tres se deshabilitan los botones
      function detener(){if (puntPc === 3) {
        resultText.innerHTML = "Mala suerte, gana la maquina.";} 
        else if (puntUsuario === 3) {
        resultText.innerHTML = "Felicitaciones " + nombreUsuario + ", Tu ganas!!";}}

        // se verifica que el nombre no esté vacío y se procede con el juego
      if (nombreUsuario === "") {
        alert("Ingrese su nombre");
         }
       else {
         usuarioDiv.style.display = "none";
        textInicio.innerHTML = `¡Hola ${nombreUsuario}! Selecciona una opción.`;
      
        piedraBot.addEventListener("click", () => {
          calcularResult("piedra",obtenerJugadaComputadora());
        
   
        });

        papelBot.addEventListener("click", () => {
          calcularResult("papel",obtenerJugadaComputadora());
         
     
        });

        tijeraBot.addEventListener("click", () => {
          calcularResult("tijeras",obtenerJugadaComputadora());
        
        
          
        });
        // se muestran los botones y textos
         seleccionDiv.style.display = "block";
         textInicio.style.display = "block";
      

        //  generamos la elección aleatoria de la computadora
        function obtenerJugadaComputadora() {
    let numeroAleatorio = Math.floor(Math.random() * 3);
    
    // devolvemos las imagenes de la eleccion de la pc
    if (numeroAleatorio === 0) {
      pc.innerHTML = '<img src="piedra.png">';
      return "piedra";
    } else if (numeroAleatorio === 1) {
      pc.innerHTML = '<img src="papel.png">';
      return "papel";
    } else {
      pc.innerHTML = '<img src="tijera.png">';
      return "tijeras";
    }
  }

  // determinamos el ganador 
       function calcularResult(eleccionUsuario, jug2) {

  if (eleccionUsuario === jug2) {
    resultText.innerHTML = "Empate";
  } else if (
    (eleccionUsuario == "piedra" && jug2 == "papel") ||
    (eleccionUsuario == "tijeras" && jug2 == "piedra") ||
    (eleccionUsuario == "papel" && jug2 == "tijeras")
  ) {
    puntPc++;
    puntaje2.innerHTML = puntPc;
    resultText.innerHTML = "Punto para la máquina";
    detener();
    if (puntPc === 3) {
      piedraBot.disabled = true;
      papelBot.disabled = true;
      tijeraBot.disabled = true;
    }
  } else if (
    (eleccionUsuario == "papel" && jug2 == "piedra") ||
    (eleccionUsuario == "piedra" && jug2 == "tijeras") ||
    (eleccionUsuario == "tijeras" && jug2 == "papel")
  ) {
    puntUsuario++;
    puntaje1.innerHTML = puntUsuario;
    resultText.innerHTML = "Punto para " + nombreUsuario;
    detener();
    
    if (puntUsuario === 3) {
      piedraBot.disabled = true;
      papelBot.disabled = true;
      tijeraBot.disabled = true;
    }
  }
}
       }
    }
});
});

