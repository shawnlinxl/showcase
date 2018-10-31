import React from 'react';
import ShowcaseCard from '../card/ShowcaseCard';
import PlaceholderCard from '../card/PlaceholderCard';
import AddNewCard from '../card/AddNewCard';
import { Grid, Container } from 'semantic-ui-react';

const Cards = ( props ) => {
    
    let compileCards = null;
    let addNewCard = null;

    if (props.fetching) {
        compileCards = (
            <>
            <Grid.Column mobile={16} tablet={8} computer={4}>
                <PlaceholderCard />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
                <PlaceholderCard />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
                <PlaceholderCard />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
                <PlaceholderCard />
            </Grid.Column>
            </>
        );
    } else {
        compileCards = props.websites
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
            
        addNewCard = (
            <Grid.Column mobile={16} tablet={8} computer={4}>
                <AddNewCard />
            </Grid.Column>
        )
    }


    return (
        <Container>
            <Grid>
                {compileCards}
                {addNewCard}
            </Grid>
        </Container>
    );
};

export default Cards;