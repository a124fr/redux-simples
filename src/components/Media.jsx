import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'

const Media = props => {
    console.log(props.numeros);
    
    const {min, max} = props.numeros;    
    return (
        <Card title='Médio dos Números' green>
            <div>
                <span>
                    <strong>Resultado: </strong>
                    <strong>{(max + min) / 2}</strong>
                </span>                
            </div>
        </Card>
    )
}

const mapStateToProps = state => ({
    numeros: state.numeros
})


export default connect(mapStateToProps)(Media)