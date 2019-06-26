import React from 'react';
import './App.css';
import RoutinePlayer from './RoutinePlayer.js'
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
