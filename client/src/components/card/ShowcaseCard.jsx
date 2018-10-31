import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';

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
                <Button basic size="mini" color="red" icon="like" content={props.likecount}/>
                <Button as="div" basic size="mini" color="blue" icon="eye" content={props.viewcount}/>
        </Card.Content>
  </Card>
);

export default ShowcaseCard;