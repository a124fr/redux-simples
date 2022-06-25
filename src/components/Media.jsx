import React from 'react'
import Card from './Card'

export default props => {
    const {min, max} = props;
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