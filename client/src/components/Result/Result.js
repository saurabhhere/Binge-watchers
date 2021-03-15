import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Result.css';
import axios from 'axios';
import userContext from '../../context/userContext';
import Login from '../Login/Login';
const urls = require('../url');

class Result extends Component {

    static contextType = userContext;

    constructor(props) {
        super(props);
        this.state = {
            score: localStorage.getItem('mostRecentScore'),
            name: '',
            errorMsg: '',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const studentObject = {
            name: this.context.userData.user,
            score: this.state.score,
            email: this.context.userData.email
        };
        axios.post(`${urls.serverURL}/result`, studentObject)
            .then(res => {
                if (res.status === 200){
                    this.setState({
                       errorMsg: 'Data Added Successfully'
                        })
                }
                window.location.href =`${urls.clientURL}/`
            })
            .catch(error => {
                console.log(error)
            this.setState({
                errorMsg: 'Please Enter a valid name'
            })
        });
    }

    render() {
        return (
            <>
            {this.context.userData.user ? (
            <div className="container">
                <div id="end" className="flex-center flex-column">
                    <h1 id="finalScore">{this.state.score}</h1>
                    <form method="post" className="end-form-container" onSubmit={this.handleSubmit}>
                        <h2 id="end-text">Click save to add your score to leaderboard</h2>
                        <p className='errorText'>{this.state.errorMsg}</p>
                        <input type='text' name="name" id="username" placeholder="Enter your name" placeholder={this.context.userData.user} disabled/>
                        <button id="saveScoreBtn" className="result_btn"  type="submit" >Save</button>
                    </form>
                    <Link to="/game" id="playAgainBtn" className="result_btn">Play Again</Link>
                    <Link to="/" id="goHomeBtn" className="result_btn">Go Home</Link>
                </div>
            </div>
            ):(
                <Login/>
            )}
            </>
        );
    }
}

export default Result;
