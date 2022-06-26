
// Action Creator
export const alterarNumeroMinimo = (novoNumero) => {
    return { // Action
        type: 'NUM_MIN_ALTERADO',
        payload: novoNumero
    }
}

export const alterarNumeroMaximo = (novoNumero) => {
    return {
        type: 'NUM_MAX_ALTERADO',
        payload: novoNumero
    }
}