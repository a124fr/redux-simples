import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'

const Sorteio = props => {
    const { min, max } = props;
    const aleatorio = parseInt(Math.random() * (max - min)) + min;

    return (
        <Card title='Sorteio de um número' purple>
            <div>
                <span>
                    <strong>Resultado: </strong>
                    <strong>{aleatorio}</strong>
                </span>                
            </div>
        </Card>
    )
}

const mapStateToProp = (state) => ({
    min: state.numeros.min,
    max: state.numeros.max
})

export default connect(mapStateToProp)(Sorteio)