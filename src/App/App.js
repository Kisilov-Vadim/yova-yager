import React, { useEffect } from 'react'; 
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import { SemipolarLoading } from 'react-loadingg';

import {Header} from '../components/Header/index'; 
import {Footer} from '../components/Footer/index';
import {MainPage} from '../pages/MainPage/index'; 
import {WorksPage} from '../pages/WorksPage/index'; 
import {SocialityPage} from '../pages/SocialityPage/index';
import {WorkPage} from '../components/WorkPage/index';

const App = ({isLoaded, getAllData, works, allSocialities}) => {
 
    useEffect(() => {
      getAllData()
    }, [])

    if (!isLoaded) {
      return (
        <div className="loading">
          <SemipolarLoading
            color='#000'
            sizr="large"
          /> 
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
