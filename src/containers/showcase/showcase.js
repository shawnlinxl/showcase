import React, { Component } from 'react';
import Cards from '../../components/cards/cards';

class Showcase extends Component {

    state = {
        websites: [
            {
                name: "Programmers' showcase",
                imgsrc: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
                updateDate: "2016-01-01",
                description: "This is a page for showcasing a programmer's work.",
                likecount: "20",
                url: "https://www.google.com"
            },
            {
                name: "Stock picker",
                imgsrc: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
                updateDate: "2018-01-01",
                description: "This is a page for showcasing a programmer's work.",
                likecount: "20",
                url: "https://www.google.com"
            }
        ]
    };

    render() {
        return (
            <Cards websites={this.state.websites}/>
        );
    }
}

export default Showcase;