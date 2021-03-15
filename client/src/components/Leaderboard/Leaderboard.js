import React, { Component } from 'react';
import './Leaderboard.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
const urls = require('../url');

class Leaderboard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      students: []
    };
  }

componentDidMount(){
    axios.get(`${urls.serverURL}/highscore`)
    .then(res => {
        this.setState({ students: res.data})
    })
    .catch((error) => {
        console.log(error);
    })
}

DataTable(){
    return this.state.students.map((res, i) => {
        return <tr key={res._id}>
          <th className='column'>{res.name}</th>
          <th className='column'>{res.score}</th>
        </tr>
    });
}
render(){
  return (
    <div className="container">
    <div id="highScores" className="flex-center flex-column">
        <h1 id="finalScore">Leaderboard</h1>
        <ul id="highScoresList">
        <table >
        <thead id='tableHead'>
          <tr>
            <th className='column'>Name</th>
            <th className='column'>Score</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </table>
        </ul>
        <Link to="/" className="btn">Go Home</Link>
        <p className='disclaimer'>Only top 10 performers are shown on Leaderboard</p>
    </div>
</div>
  );
}
  
}

export default Leaderboard;
