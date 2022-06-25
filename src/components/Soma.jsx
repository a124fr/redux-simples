import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'

const Soma = props => {
    const { min, max } = props;
    return (
        <Card title='Soma dos Números' blue>
            <div>
                <span>
                    <strong>Resultado: </strong>
                    <strong>{min + max}</strong>
                </span>                
            </div>
        </Card>
    )
}

const mapStateToProp = (state) => ({
    min: state.numeros.min,
    max: state.numeros.max   
})

export default connect(mapStateToProp)(Soma)