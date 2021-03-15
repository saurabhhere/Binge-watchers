import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import {FaCrown} from 'react-icons/fa'
import userContext from '../../context/userContext';

class Home extends Component {
  static contextType = userContext;

  render() {
    return (
      <div className="container">
        <div id="home" className="flex-column flex-center">
          <h1>Are you Ready?</h1> 
          <Link to='/rules' className="btn">Play</Link>
          <Link to='/highscore' id="highscore-btn" className="btn">Leaderboard<span className='icon'><FaCrown/></span></Link>
        </div>
      </div>
    );
  }

}

export default Home;
