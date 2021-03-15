import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userContext from '../../context/userContext';
import Login from '../Login/Login';
import './Rules.css';

class Rules extends Component {

  static contextType = userContext;

  constructor(props) {
    super(props)
    setTimeout(() => { window.history.forward() }, 0);
  }

  render() {
    return (
      <> 
      {this.context.userData.user ? (
      <div className="container">
        <div className='rule'>
          <div className="info-title"><span className="rules_heading">Rules</span></div>
          <div className="info-list">
            <div className="info">1. You will have only <span className="ruleTime">60 seconds</span> total.</div>
            <div className="info">2. Once you select your answer, it can't be undone.</div>
            <div className="info">3. You can't exit from the Quiz while you're playing.</div>
            <div className="info">4. You'll get 10 points on each of your correct answers.</div>
          </div>
          <div className="buttons">
            <Link to='/' className="quit">Exit Quiz</Link>
            <Link to='/game' className="continue">Continue</Link>
          </div>
        </div>
      </div>
      ):(
        <Login/>
      )}
      </>
    );
  }

}

export default Rules;
