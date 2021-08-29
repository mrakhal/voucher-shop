import React from 'react';
import HeaderComp from '../../components/HeaderComp';
import FooterComp from '../../components/FooterComp';
import LandingPage from '../LandingPage';
import {Switch,Route} from 'react-router-dom';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div>
        <HeaderComp />
        <Switch>
          <Route path="/" component={LandingPage} exact/>
        </Switch>
        <FooterComp />
      </div>
    );
  }
}
 
export default App;
