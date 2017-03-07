import React, {Component} from 'react';
import Header from '../../components/header/index';

class App extends Component{
  render(){
    return (
        <div>
            <Header/>
            {this.props.children}
            <footer className="footer-bottom">
                    <p>@ Young GeoS 2017</p>
            </footer>
        </div>
     )
  }
}

export default App;
