import React, { useEffect, useState } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Game from './components/Game/Game';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Leaderboard from './components/Leaderboard/Leaderboard';
import Login from './components/Login/Login';
import Result from './components/Result/Result';
import Rules from './components/Rules/Rules';
import axios from 'axios';
import url from './components/url';
import UserContext from './context/userContext';

function App() {

  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
    email:  undefined,
    userId: undefined
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null){
        localStorage.setItem("auth-token", "");
        token="";
      }
      const tokenResponse = await axios.post(
        `${url.serverURL}/user/tokenIsValid`, null,
        {headers: {"x-auth-token": token}}
      )

      if (tokenResponse.data.username){
        setUserData({
          token,
          user: tokenResponse.data.username,
          email: tokenResponse.data.email,
          userId: tokenResponse.data._id
        })
      }
    }
    checkLoggedIn();
  });

  return (
    <div className="App">
      <BrowserRouter>
      <UserContext.Provider value={{ userData, setUserData }}>
      <Header />
        <Switch>
        <Route path='/rules' exact component = {Rules}/>
        <Route path='/game' exact component = {Game}/>
        <Route path='/result' exact component = {Result}/>
        <Route path='/highscore' exact component = {Leaderboard}/>
        <Route path='/auth/login' exact component = {Login}/>
        <Route path='/' exact component = {Home}/>
        </Switch>
        <Footer />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
