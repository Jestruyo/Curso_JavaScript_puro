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


/**
 * Modulo o Funcion anonima
 */
const moduloDeJuego = (() => {
    'use strict' // Con este uso estricto, JavaScript exige una mayor rigurosidad en el manejo de variables y prohíbe ciertas prácticas inseguras o ambiguas.

    let deck = [],
        puntosJugadores = [];

    const tipos_de_cartas = ["C", "D", "H", "S"],
          especiales = ["A","J","Q","K"];

    //Referencias de HTML
    const btnNuevoJuego = document.querySelector("#btnNuevo"),
          btnPedir = document.querySelector("#btnPedir"),
          btnDetener = document.querySelector("#btnDetener"),
          puntosHTMLSMALL = document.querySelectorAll("small"),
          divCartasJugadores = document.querySelectorAll(".divCartas");

    const inicializarJuego = (numero_jugadores = 2) => {
        /**
         * Esta es la funcion encargada de inicializar el Juego.
         */
        deck = crearDeck();
        puntosJugadores = [];
        for (let i = 0; i < numero_jugadores; i++){
            puntosJugadores.push(0);

        puntosHTMLSMALL.forEach(elem => elem.innerText = 0);
        divCartasJugadores.forEach(elem => elem.innerHTML = " ");

        btnPedir.disabled = false;
        btnDetener.disabled = false;

        btnNuevoJuego.disabled = true;

        }
    }

    const crearDeck = () => {
        /** 
         * Metodo para crear el deck o baraja de cartas, 
         * tomando como referencia el tipo de carta y el numero 10.
         */
        deck = [];
        for (let i = 2; i <= 10; i++) {
            for (let tipo of tipos_de_cartas) {
                deck.push(i + tipo);

            }
        }
        for (let tipo of tipos_de_cartas) {
            for (let esp of especiales) {
                deck.push(esp + tipo);
            }
        }
        return _.shuffle(deck);
    }

    const pedirCarta = () => {
        /**
         * Metodo encargado de sacar una carta de la baraja, y a su vez eliminarla
         * del arreglo deck, para no volverla a mostrar.
         */

        if (deck.length === 0){
            throw "No hay cartas en la baraja."
        }
        return deck.pop();
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

    const acumularPuntos = ( carta, turno ) => {
        /**
         * Metodo encargado de almacenar los puntos, teniendo en cuenta el numero de jugadores.
         */
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta); // Suma de puntos
        puntosHTMLSMALL[turno].innerText = puntosJugadores[turno]; // Pinta los puntos en el HTML
        return puntosJugadores[turno];

    }

    const crearCarta = (carta, turno) => {
        const imagCarta = document.createElement("img"); // Crea el elemento img 
        imagCarta.src = `assets/cartas/${carta}.png`; // Se le agrega el src
        imagCarta.classList.add('cartas'); // Carge de css cartas al componente img
        divCartasJugadores[turno].append(imagCarta); // Pinta el elemento en el HTML
    }

    const determinarGanador = () =>{

        const [ puntosMinimos, puntosComputadora ] = puntosJugadores;

        setTimeout(() => {
            /**
             * Luego que se termine el hilo del do while, se ejecutara este bloque de codigo,
             * para no ejecutar los alert, antes que terminen de renderizar las cartas.
             */
            if (puntosComputadora === puntosMinimos){
                alert("Nadie gana: :(");
            } else if (puntosMinimos > 21 || puntosMinimos > puntosComputadora){
                alert("Computadora Gana");
            } else if (puntosComputadora > 21 || puntosComputadora > puntosMinimos) {
                alert("Jugador Gana");
            }

        }, 20)

    }

    // Turno de la computadora
    const turnoComputadora = ( puntosMinimos ) => {

        let puntosComputadora = 0;
        do {
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
            crearCarta(carta, puntosJugadores.length - 1);

        } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) ); // Si los puntos del jugador son mayores a 21, ya no tiene sentido que la computadora sigua jugando.

        btnNuevoJuego.disabled = false; // Se habilita de nuevo el boton, para la nueva ronda.

        determinarGanador();

    }

    //Eventos
    btnPedir.addEventListener("click", () => {
        /**
         * Evento responsable de la accion al instante de hacer click,
         * en el boton pedir carta.
         */
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta, 0);
        crearCarta(carta, 0);

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
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugadores[0]);

    });

    btnNuevoJuego.addEventListener("click", () => {
        /**
         * Evento encargado de resetear las configuraciones iniciales para un nuevo juego.
         */
        inicializarJuego();

    });

    /**
     *  Este es el retorno del modulo en general. Detro de este objeto devuelto, se agregan las funciones que
     *  queremos exponer publicamente desde afuera. De este manera 
     */
    return {
        nuevoJuego: inicializarJuego
    };

})();


