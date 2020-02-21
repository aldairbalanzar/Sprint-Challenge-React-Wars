import React from 'react';

function Card({data}) {
    for(let key in data) {
        console.log(data[key]);
    }
    return(
        <div>
            {data.map(character => {
            console.log(character);
            return(
            <h1>{character.name}</h1>
            )
        })}
        </div>
    )
}

export default Card;