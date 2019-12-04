import React,
{
  Component
} from 'react';

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

const STATE = require('./State.json');

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header items={STATE.sitemap} />

        <div className="content">
          {this.props.children}
        </div>
        <Footer />
      </div>

    );
  }
}

export default App;
