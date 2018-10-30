import React from 'react';
import Card from '../card/card';

const Cards = ( props ) => {
    let compileCards = props.websites
        .map(details => 
            <Card
                name={details.name}
                imgsrc={details.imgsrc}
                updateDate={details.updateDate}
                description={details.description}
                likecount={details.likecount}
                url={details.url}
            />
        )
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    return (
        <>
            {compileCards}
        </>
    );
};

export default Cards;