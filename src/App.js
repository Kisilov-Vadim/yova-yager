import React from 'react'
import './App.scss';
import { Route, Switch } from 'react-router-dom';

import {Header} from './components/Header/index'; 
import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage/MainPage'; 
import WorksPage from './pages/WorksPage/WorksPage'; 

class App extends React.Component {
  
  render() {
    return (
      <>
        <Header />
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/works" exact component={WorksPage} />
          </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
