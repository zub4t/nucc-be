import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Divulgacao from './js/Divulgacao';
import MainPage from './js/MainPage';
import EventPage from './js/EventPage';
import Historia from './js/Historia';
import { NavigationBar } from './components/NavBar';
import Footer from './components/Footer';
import PageContainer from './styled-components/PageContainer';

function App() {
  return (
    <React.Fragment>
      <PageContainer>
            <Router>
              <NavigationBar />
              <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route path="/divulgacao" component={Divulgacao}/>
                  <Route path="/evento/:id" component={EventPage} />
                  {/*<Route path="/historia" component={Historia}/>*/}
              </Switch>
          </Router>
        <Footer/>
      </PageContainer>

    </React.Fragment>
  );
}

export default App;
