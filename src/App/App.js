import React, { useEffect, useState } from 'react'; 
import './App.scss';
import { Route, Switch } from 'react-router-dom';
// import TextLoop from "react-text-loop";
import {useTrail, animated, config} from 'react-spring'; 

import {Header} from '../components/Header/index'; 
import {Footer} from '../components/Footer/index';
import {MainPage} from '../pages/MainPage/index'; 
import {WorksPage} from '../pages/WorksPage/index'; 
import {SocialityPage} from '../pages/SocialityPage/index';
import {WorkPage} from '../components/WorkPage/index';

const App = ({isLoaded, getAllData, works, allSocialities}) => {
  const leftWord = ['Y', 'O', 'V', 'A'];  
  const rightWord = ['Y', 'A', 'G', 'E', 'R'];  
  const [firstLetter, setFirstLetter] = useState('Y')
  const [secondLetter, setSecondLetter] = useState('Y')
  let firstCount = 0, secondCount = 0, interval;  

  const letterChangeAnim = () => {
    
    if (firstCount === leftWord.length - 1) {
      firstCount = 0; 
    } else {
      firstCount++
    }

    if (secondCount === rightWord.length - 1) {
      secondCount = 0; 
    } else {
      secondCount++
    }

    setFirstLetter(leftWord[firstCount])
    setSecondLetter(rightWord[secondCount])

    if (!isLoaded) {
      setTimeout(() => {
        interval = requestAnimationFrame(letterChangeAnim)
        setTimeout(() => {
          cancelAnimationFrame(interval)
        }, 1000)
      }, 1000 / 5)
    } 
  }

  useEffect(() => {
    letterChangeAnim()
    getAllData()
  }, [])


    if (!isLoaded) {
    
      return (
        <div className="loading">
          <div className="loading__main">
            <div className='loading__main-left'>
              <span>{firstLetter}</span>
            </div>
            <div className="loading__main-right">
              <span>{secondLetter}</span>
            </div>
          </div>
        </div>
      )
    } else {
     
      return (
        <>
          <Header />
            <Switch>
              {works.map(work => 
                <Route exact path={`/works/${work.title}`} key={work.id} component={
                  () => <WorkPage data={work} area='works' />} /> 
              )}
              {allSocialities.map(sociality => 
                <Route exact path={`/socialities/${sociality.title}`}  key={sociality.id} component={
                  () => <WorkPage data={sociality} area='socialities' />} />
              )}
              <Route exact path="/" component={MainPage} />
              <Route exact path="/works" component={WorksPage} />
              <Route exact path="/sociality" component={SocialityPage} />
            </Switch>
          <Footer />
        </>
      );
    }
}

export default App;
