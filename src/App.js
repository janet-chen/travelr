import React from 'react';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import MainCalendar from './components/Calendar/MainCalendar';
import MyTrips from './components/Trips/TripsList';
import SampleTrip from './components/Trips/TripPageNew';
import Display from './components/Display';
import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage';
import Profile from './components/Profile';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import UserProvider from './contexts/UserProvider';
import history from './history';
import SavedDisplay from './components/SavedDisplay';
import AddFavouriteModal from './components/Trips/AddFavouriteModal';


function App() {
  return (
    <Router history={history}>
      <UserProvider>
        <NavBar />
        <Route path="/profile" component={Profile} />
        <Route path="/saved" component={SavedDisplay} />
        <Route path="/calendar" component={MainCalendar} />
        <Route path="/trips" component={MyTrips} />
        <Route path="/logout" component={Logout} />
        <Route path="/login" component={Login} />
      </UserProvider>
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/results" component={Display} />
        <Route path="/sampleTrip" component={SampleTrip} />
        <Route path="/addfave" component={AddFavouriteModal} />
      </Switch>
    </Router>


  );
}

export default App;
