/**
 * Metodo encargado de asignar un valor numerio
 * a la carta tratada. Tomando en cuenta si es una letra o numero. * 
 * @param {string} carta 
 * @returns {number} retorna el valor numerico de la carta.
 */
 export const valorCarta = ( carta ) => {
    /**
     * Metodo encargado de asignar un valor numerio
     * a la carta tratada. Tomando en cuenta si es una letra o numero.
     */

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN(valor) ) ?
            (valor === "A") ? 11 : 10
            : valor * 1;
}