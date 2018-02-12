import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import DayPage from './DayPage';

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Weekly Forecast</Link></li>
        <li><Link to="/day">Day</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Weekly}/>
      <Route path="/day" component={DayPage}/>
    </div>
  </Router>
);

const Weekly = () => (
  <div>
    <h2>Weekly Forecast</h2>
    <ul>
      <li> Monday </li>
    </ul>
  </div>
);

// const Day = () => (
//   <div>
//     <h2>Daily Forecast</h2>
//     <p>It will be cloudy on Monday</p>
//   </div>
// );



export default BasicExample;