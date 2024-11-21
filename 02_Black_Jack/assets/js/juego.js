/**
 * 2C = Two of Clubs
 * 2D = Two of Diaminds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 * 
 * 
 * Puntos:
 * Los puntos se acumulan de acuerdo a el valor numerico inicial de las cartas, para
 * las letras J, Q, K su valor en puntos es de 10, mientras que la letra A, tiene el valor de 11.
 */


let deck = [];
const tipos_de_cartas = ["C", "D", "H", "S"];
const especiales = ["A","J","Q","K"];
let puntosJugador = 0;
let puntosComputadora = 0;

//Referencias de HTML
const btnPedir = document.querySelector("#btnPedir");
const btnDetener = document.querySelector("#btnDetener");
const puntosHTMLSMALL = document.querySelectorAll("small");
const divCartasJugador = document.querySelector("#jugador-cartas");
const  divCartasComputadora = document.querySelector("#computadora-cartas");

const crearDeck = () => {
    /** 
     * Metodo para crear el deck o baraja de cartas, 
     * tomando como referencia el tipo de carta y el numero 10.
     */
    for (i = 2; i <= 10; i++) {
        for (let tipo of tipos_de_cartas) {
            deck.push(i + tipo);

        }
    }
    for (let tipo of tipos_de_cartas) {
        for (let esp of especiales) {
            deck.push(esp + tipo);
        }
    }
    deck = _.shuffle(deck);
    return deck;
}
crearDeck();

const pedirCarta = () => {
    /**
     * Metodo encargado de sacar una carta de la baraja, y a su vez eliminarla
     * del arreglo deck, para no volverla a mostrar.
     */

    if (deck.length === 0){
        throw "No hay cartas en la baraja."
    }
    const carta = deck.pop();
    return carta;
}

const valorCarta = ( carta ) => {
    /**
     * Metodo encargado de asignar un valor numerio
     * a la carta tratada. Tomando en cuenta si es una letra o numero.
     */

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN(valor) ) ? 
            (valor === "A") ? 11 : 10 
            : valor * 1;
}

// Turno de la computadora
const turnoComputadora = ( puntosMinimos ) => {

    do {
        const carta = pedirCarta();

        puntosComputadora = puntosComputadora + valorCarta(carta); // Suma de puntos
        puntosHTMLSMALL[1].innerText = puntosComputadora; // Pinta los puntos en el HTML
        const imagCarta = document.createElement("img"); // Crea el elemento img 
        imagCarta.src = `assets/cartas/${carta}.png`; // Se le agrega el src
        imagCarta.classList.add('cartas'); // Carge de css cartas al componente img
        divCartasComputadora.append( imagCarta ); // Pinta el elemento en el HTML

        if(puntosMinimos > 21){
            break;
        }

    } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );
}
//Eventos
btnPedir.addEventListener("click", () => {
    /**
     * Evento responsable de la accion al instante de hacer click,
     * en el boton pedir carta.
     */
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta); // Suma de puntos
    puntosHTMLSMALL[0].innerText = puntosJugador; // Pinta los puntos en el HTML
    const imagCarta = document.createElement("img"); // Crea el elemento img 
    imagCarta.src = `assets/cartas/${carta}.png`; // Se le agrega el src
    imagCarta.classList.add('cartas'); // Carge de css cartas al componente img
    divCartasJugador.append( imagCarta ); // Pinta el elemento en el HTML

    // Validador para desabilitar el boton pedir carta y detener en caso que se cumpla la condicion.
    if (puntosJugador >= 21){
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    }
});

btnDetener.addEventListener("click", () => {
    /**
     * Evento responsable de la accion, al instante de hacer click,
     * en el boton detener.
     */
    btnDetener.disabled = true;
    btnPedir.disabled = true;
    turnoComputadora(puntosJugador);

});