import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';

class Navbar extends Component {
    state = { activeItem: 'home' };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state

        return (
        <Segment>
            <Menu secondary>
                <Menu.Item>
                    <img src="data:image/png;base64,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" alt="ICON"/>
                </Menu.Item>
                <Menu.Item 
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick} />
                <Menu.Item
                    name='featured'
                    active={activeItem === 'featured'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='users'
                    active={activeItem === 'users'}
                    onClick={this.handleItemClick}
                />

                <Menu.Menu position='right'>
                    <Menu.Item
                        name='logout'
                        active={activeItem === 'logout'}
                        onClick={this.handleItemClick}
                    />
                </Menu.Menu>

            </Menu>
        </Segment>
        );
    }
}

export default Navbar;