import React, { Component } from 'react';
import Cards from '../../components/cards/Cards';
import axios from 'axios';

class Showcase extends Component {

    state = {fetchingWebsite: true};

    componentDidMount() {
       this.fetchWebsites(); 
    }

    fetchWebsites = () => {
        setTimeout(() => {
        this.setState({...this.state, fetchingWebsite: true});
        axios.get(`api/hello`)
            .then(res => { this.setState({ websites: res.data.websites, fetchingWebsite: false }); });   
        }, 1000);
        
    }
    
    render() {
        return (
            <Cards websites={this.state.websites} fetching={this.state.fetchingWebsite}/>
        );
    }
}

export default Showcase;