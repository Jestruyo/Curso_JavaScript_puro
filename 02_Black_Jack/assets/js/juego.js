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
const tipos_de_cartas = ["C", "D", "H", "S"]
const especiales = ["A","J","Q","K"]


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
    console.log(deck);
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
    console.log(carta);
    return carta;
}

const valorCarta = ( carta ) => {
    /**
     * 
     */

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN(valor) ) ? 
            (valor === "A") ? 11 : 10 
            : valor * 1;
    
}
const valor = valorCarta( pedirCarta() );
console.log({valor});