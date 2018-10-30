import React from 'react';
import ShowcaseCard, {PlaceholderCard} from '../card/card';
import { Grid, Container } from 'semantic-ui-react'

const Cards = ( props ) => {
    let compileCards = props.websites
        .map(details => (
                <Grid.Column  key={details.url} mobile={16} tablet={8} computer={4}>
                    <ShowcaseCard
                        name={details.name}
                        imgsrc={details.imgsrc}
                        updateDate={details.updateDate}
                        description={details.description}
                        likecount={details.likecount}
                        viewcount={details.viewcount}
                        url={details.url}
                    />
                </Grid.Column>
        ))
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    return (
        <Container>
            <Grid>
                {compileCards}
                <Grid.Column mobile={16} tablet={8} computer={4}>
                    <PlaceholderCard />
                </Grid.Column>
            </Grid>
        </Container>
    );
};

export default Cards;