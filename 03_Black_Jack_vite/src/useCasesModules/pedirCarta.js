/**
 * Esta funcion recibe un array de cartas y selecciona la ultima de este, eliminandola del deck.
 * @param {Array} deck 
 * @returns {string} retorna el valor de la carta aleatoria.
 */
export const pedirCarta = (deck) => {
    /**
     * Metodo encargado de sacar una carta de la baraja, y a su vez eliminarla
     * del arreglo deck, para no volverla a mostrar.
     */

    if (deck.length === 0){
        throw "No hay cartas en la baraja."
    }
    return deck.pop();
}