import {shuffle} from 'underscore';

const tipos_de_cartas = ["C", "D", "H", "S"],
           especiales = ["A","J","Q","K"];

export const crearDeck = () => {
    /** 
     * Metodo para crear el deck o baraja de cartas, 
     * tomando como referencia el tipo de carta y el numero 10.
     */
    let deck = [];
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
    return shuffle(deck);
}