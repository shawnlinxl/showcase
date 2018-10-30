import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CardExampleCard = (props) => (
  <Card href={props.goto}>
    <Image src={props.src} />
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>
        <span className='date'>Updated on {props.updateDate}</span>
      </Card.Meta>
      <Card.Description>{props.description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
        <Icon name="like"></Icon>
        {props.likecount}
    </Card.Content>
  </Card>
)

export default CardExampleCard