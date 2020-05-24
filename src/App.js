import React from 'react';
import LoginPage from './Components/LoginPage';
import LessonPage from './Components/LessonPage';
import DashBar from './Components/Utilities/DashBar';
import Navbar from './Components/Utilities/NavBar';
import SubmitAssignment from './Components/Utilities/SubmitAssignment';
import QuizPage from './Components/QuizPage';
import VideoLecturePage from './Components/VideoLecturePage';
import LiveSchedule from './Components/LiveSchedule';
import AssignmentPage from './Components/AssignmentPage';
import LiveStream from './Components/LiveStream';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import APIFetcher from './Components/Utilities/APIFetcher'
import Link from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>

        <Route path='/' component={Navbar} />
        <Route path='/' component={DashBar} />
        <Route path='/' exact component={LoginPage} />
        <Route path='/schedule' exact component={LiveSchedule} />
        <Route path='/quiz' exact component={QuizPage} />
        <Route path='/assignment' exact component={AssignmentPage} />
        <Route path='/video' exact component={VideoLecturePage} />
        <Route path='/lesson' exact component={LessonPage} />
        <Route path='/submit' exact component={SubmitAssignment} />
        {/* <LiveStream /> */}
        <APIFetcher></APIFetcher>
      </Router>
    </div>
  );
}

export default App;
