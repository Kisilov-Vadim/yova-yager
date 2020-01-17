import React from 'react'
import './App.scss';

import MainPage from './pages/MainPage'; 
import Header from './components/Header/Header'; 
import Footer from './components/Footer/Footer';

class App extends React.Component {
  
  render() {
    return (
      <>
        <Header />
        <MainPage />
        <Footer />
      </>
    );
  }
}

export default App;
