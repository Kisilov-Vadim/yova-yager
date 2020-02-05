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

const App = ({isLoaded, getAllData, works}) => {
 
    useEffect(() => {
      getAllData()
    }, [])

    if (!isLoaded) {
      return (
        <div className="loading">
          <SemipolarLoading
            color='#fff'
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
                <Route path={`/works/${work.title}`} exact key={work.id} component={() => <WorkPage data={work} />} /> 
              )}
              <Route path="/" exact component={MainPage} />
              <Route path="/works" exact component={WorksPage} />
              <Route path="/sociality" exact component={SocialityPage} />
            </Switch>
          <Footer />
        </>
      );
    }
}

export default App;
