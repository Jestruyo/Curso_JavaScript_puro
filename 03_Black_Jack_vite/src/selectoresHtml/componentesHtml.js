  //Referencias de HTML

  /**
   * Esta funcion selecciona los elementos a usar
   * tomados de la plantilla html
   * @param {string} componente 
   * @returns {querySelector} retorna un componente html
   */
  const usecomponentes = (componente) => {

    const resp = componente === "btnNuevoJuego" ? document.querySelector("#btnNuevo") :
                 componente === "btnPedir"      ? document.querySelector("#btnPedir") :
                 componente === "btnDetener"    ? document.querySelector("#btnDetener") :
                 componente === "puntosHTMLSMALL" ? document.querySelectorAll("small") :
                 componente === "divCartasJugadores" ? document.querySelectorAll(".divCartas") : console.log("Ingrese un componente valido");
    
    return resp;
  }

  export default usecomponentes;