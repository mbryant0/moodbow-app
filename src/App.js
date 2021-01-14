import React from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import ErrorPage from './pages/ErrorPage';
import Accesories from './pages/Accessories';
import Beauty from './pages/Beauty';
import Clothing from './pages/Clothing';
import NewItems from './pages/NewItems';
import HomeLiving from './pages/HomeLiving';
import NavigationBar from './components/NavigationBar';
import SignInPage from './pages/SignInPage';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavigationBar />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/signin' component={SignInPage} />
        <Route path='/accessories' component={Accesories} />
        <Route path='/beauty' component={Beauty} />
        <Route path='/clothing' component={Clothing} />
        <Route path='/new' component={NewItems} />
        <Route path='/home-and-living' component={HomeLiving} />
        <Route path='*' component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
