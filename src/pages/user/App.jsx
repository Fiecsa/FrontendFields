import React, {Component} from 'react';
import Header from '../../components/header/index';
import Footer from '../../components/footer/index';

class App extends Component{
  render(){
    return (
        <div>
            <Header/>
            {this.props.children}
            <Footer/>

        </div>
     )
  }
}

export default App;
