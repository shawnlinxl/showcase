import React from 'react';
import { Card, Icon, Image, Placeholder, Grid } from 'semantic-ui-react';

const ShowcaseCard = (props) => (
  <Card href={props.url}>
        <Image src={props.imgsrc} />

        <Card.Content>
            <Card.Header>{props.name}</Card.Header>

            <Card.Meta> <span className='date'>Updated on {props.updateDate}</span> </Card.Meta>
            <Card.Meta> Shawn </Card.Meta>

            <Card.Description>{props.description}</Card.Description>
        </Card.Content>

        <Card.Content extra>
            <Grid>
                <Grid.Column> <Icon name="like">{props.likecount}</Icon> </Grid.Column>
                <Grid.Column> <Icon name="eye">{props.viewcount}</Icon> </Grid.Column>
            </Grid>
        </Card.Content>
  </Card>
);

export const PlaceholderCard = (props) => (

  <Card>
    <Placeholder>
      <Placeholder.Image square />
    </Placeholder>
    <Card.Content>
      <Placeholder>
        <Placeholder.Header>
          <Placeholder.Line length='very short' />
          <Placeholder.Line length='medium' />
        </Placeholder.Header>
        <Placeholder.Paragraph>
          <Placeholder.Line length='short' />
        </Placeholder.Paragraph>
      </Placeholder>
    </Card.Content>
  </Card>
  
);

export default ShowcaseCard;