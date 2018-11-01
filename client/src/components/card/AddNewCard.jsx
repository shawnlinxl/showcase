import React from 'react';
import { Card, Image, Placeholder } from 'semantic-ui-react';

import AddNew from "../../assets/images/addnew.png"

export const AddNewCard = (props) => (
  <Card href="/card/new">
    <Image src={AddNew} />
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

export default AddNewCard;