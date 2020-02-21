import React from 'react';
import Card from './Card'
import styled from 'styled-components';

function CardList({data}) {
    return(
        <div>
            {data.map(character => {
            console.log(character);
            return(
            <Card character={character}/>
            )
        })}
        </div>
    )
}

export default CardList;