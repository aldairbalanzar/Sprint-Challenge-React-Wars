import React from 'react';
import Card from './Card'
import styled from 'styled-components';

function CardList({data}) {

    const CardList = styled.div `
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;

    `;

    return(
        <CardList>
            {data.map(character => {
            console.log(character);
            return(
            <Card character={character}/>
            )
        })}
        </CardList>
    )
}

export default CardList;