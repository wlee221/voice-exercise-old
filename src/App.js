import React from 'react';
import './App.css';
import MIDISounds from 'midi-sounds-react';

class App extends React.Component {
  noteNameToNumber(note_name) {
    note_name = note_name.toUpperCase();
    const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

    var tone = note_name.slice(0, note_name.length - 1);
    var octave = parseInt(note_name.slice(note_name.length - 1), 10);
    var idx = notes.indexOf(tone);

    // Error checks
    if (note_name.length !== 2 && note_name.length !== 3) {
      throw new Error(`Invalid note name: ${note_name}. Your note name should be of length 2 or 3.`);
    } else if (idx === -1) {
      throw new Error(
        ```
        Invalid tone name: ${tone}. Your tone name should be one of 
        C, C#, D, ..., B (case insensitive). Please use sharp instead of flats.
        ```
      ); // TODO: recognize flats as well.
    } else if (isNaN(octave) || octave < 1 || octave > 9) {
      throw new Error(`Invalid octave: ${note_name.slice(note_name.length - 1)}. It should be between 1 and 9 inclusive.`);
    }

    return idx + 12 * (octave + 1); // assuming middle C = C4 = 60
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Voice Exercise
        </header>
        <div className="App">
          <button
            onClick={() => {
              this.midiSounds.playChordNow(3, [60, 64, 67], 0.5);
            }}
          >
            Play C maj
          </button>
        </div>
        <MIDISounds
          ref={(ref) => this.midiSounds = ref}
          appElementName="root" instruments={[3]}
        />
        {this.noteNameToNumber("F9")}
      </div>
    );
  }
}

export default App;
