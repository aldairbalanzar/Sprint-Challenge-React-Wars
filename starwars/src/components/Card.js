import React from 'react';
import styled from 'styled-components';

function Card({character}) {

    const Card = styled.div `
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 30%;
        height: auto;
        margin: 8% 0;
    `;    

    const CardName = styled.h1 `
        width: 100%;
        background-color: rgba(220, 110, 30, .6);
        border-radius: 6px;
        padding: 2% 0;
    `;

    const CardImg = styled.img `
        border-radius: 20px;
        width: 80%;
        height: auto;
    `;
    return(
        <Card>
            <CardName>{character.name}</CardName>
            <CardImg src={`https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png`} />
        </Card>
    )
}

export default Card;