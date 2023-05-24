import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import HomePage from "./HomePage";
import LandingPage from './parent/LandinPage';
import SetUp from './parent/SetUp';
import StoryBoard from './child/Storyboard';
import StorySetting from './child/StorySetting';
import Congrats from './child/Congrats';

/*import { Provider } from 'react-redux';
import store from '../store';*/


// Alert Options
const alertOptions = {
  timeout: 3000,
  position: 'top center',
};

class App extends Component {

  render() {

    return (
      
      /*<Provider store={store}>*/
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <div>
                <Switch>
                  
                  <Route exact path="/" component={HomePage}/>
                  <Route exact path="/landingpage" component={LandingPage}/>
                  <Route exact path="/setup" component={SetUp}/>
                  <Route exact path="/storyboard" component={StoryBoard}/>
                  <Route exact path="/storysettings" component={StorySetting}/>
                  <Route exact path="/congratulations" component={Congrats}/>
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      /*</Provider>*/
    );
  };
};

ReactDOM.render(<App />, document.getElementById('app'));
