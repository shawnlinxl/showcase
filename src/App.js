import React, { Component } from 'react';
import Layout from './components/layout/layout';
import Showcase from './containers/showcase/showcase';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  render() {
    return (
      <>
        <Layout>
          <Showcase />
        </Layout>
      </>
    );
  }
}

export default App;
