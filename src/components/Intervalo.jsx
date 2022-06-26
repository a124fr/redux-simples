import './Intervalo.css'
import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'
import { alterarNumeroMinimo, alterarNumeroMaximo } from '../store/actions/numerosAction'

const Intervalo = props => {
    const { min, max } = props;    

    return (
        <Card title='Intervalo de Números' red>
            <div className='Intervalo'>
                <span>
                    <strong>Mínimo: </strong>
                    <input type='number' value={min} onChange={e => props.alterarMinimo(+e.target.value)} />
                </span>
                <span>
                    <strong>Máximo: </strong>
                    <input type='number' value={max} onChange={e => props.alterarMaximo(+e.target.value)} />
                </span>
            </div>
        </Card>
    )
}

const mapStateToProp = (state) => ({
    min: state.numeros.min,
    max: state.numeros.max
})

const mapDispatchToProp = (dispatch) => {
    return {
        alterarMinimo(novoNumero) {
            // action creator
            const action = alterarNumeroMinimo(novoNumero)
            dispatch(action)
        },
        alterarMaximo(novoNumero) {
            const action = alterarNumeroMaximo(novoNumero)
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProp, 
    mapDispatchToProp
)(Intervalo)