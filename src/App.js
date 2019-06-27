import React from 'react';
import Amplify, { Auth } from 'aws-amplify'
import awsmobile from './aws-exports'
import './App.css';
import RoutinePlayer from './RoutinePlayer.js'

Amplify.configure(awsmobile);
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Voice Exercise
        </header>
        <RoutinePlayer />
      </div>
    );
  }
}

export default App;
