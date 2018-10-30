import React, { Component } from 'react';
import Card from '../../components/card/card';

class Showcase extends Component {
    render() {
        return (
            <Card
                name="Programmers' showcase"
                src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                updateDate="2016"
                description="This is a page for showcasing a programmer's work."
                likecount="20"
                goto="https://www.google.com"
            />
        );
    }
}

export default Showcase;