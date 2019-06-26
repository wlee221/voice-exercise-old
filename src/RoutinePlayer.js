import React from 'react';
import { convertNotes } from './note-conversion.js'
import MIDISounds from 'midi-sounds-react';

class RoutinePlayer extends React.Component {
  constructor(props) {
    const phrase1 = {
      phrase: ["C4", "D4", "E4", "F4", "G4", "F4", "E4", "D4", "C4"],
      description: "Major Scale 5 notes"
    };
    const phrase2 = {
      phrase: ["C4", "D4", "D#4", "F4", "G4", "F4", "D#4", "D4", "C4"],
      description: "Minor Scale 5 notes"
    };
    super(props);
    this.state = {
      playing: false,
      phrases: [phrase1, phrase2],
      phraseChosen: phrase1,
      errorMessage: null,
      tempo: 60,
      startNote: "C4",
      endNote: "G5"
    }
  }

  playPhrase(notes) {
    if (this.state.playing)
      return; 
    notes = convertNotes(notes)
    const note_length = 30 / this.state.tempo; // eighth note length
    notes.forEach((note, idx) => {
      const time = this.midiSounds.contextTime();
      this.midiSounds.playChordAt(time + note_length * idx, 3, [note], note_length); // TODO: come up with a new play design; reset this.state.playing on finish
    });
  }

  render() {
    console.log(this.state) // TODO: REMOVE THIS
    var routineOptions = this.state.phrases.map((val, idx) => {
      return (
        <option key={`routine${idx}`} value={idx}>
          {val.description}
        </option>
      )
    });
    return (
      <div className="player">
        <br />Choose your routine:&nbsp;&nbsp;
        <select className="routines" onChange={evt =>
          this.setState({
            phraseChosen: this.state.phrases[evt.target.value]
          })
        }>
          {routineOptions}
        </select>
        <br />
        <br /> Set your practice settings. If you are unsure of your range, try
          C4~G5 for men and G4~C6 for women then adjust accordingly. <br />
        <form>
          <label>
            <br /> Start Note (ex. E#4):
            <input
              type="text"
              name="startNote"
              defaultValue={this.state.startNote}
              maxLength="3"
              onChange={
                evt => this.setState({
                  [evt.target.name]: evt.target.value,
                })
              }
            />
          </label>
          <label>
            <br />End Note (ex. C6):
            <input
              type="text"
              name="endNote"
              maxLength="3"
              defaultValue={this.state.endNote}
              onChange={
                evt => this.setState({
                  [evt.target.name]: evt.target.value,
                })
              }
            />
          </label>
          <label>
            <br />Tempo (BPM):
            <input
              type="number"
              name="tempo"
              defaultValue={this.state.tempo}
              onChange={
                evt => this.setState({
                  [evt.target.name]: evt.target.value,
                })
              }
            />
          </label>
          <br />
          <input
            type="button"
            value="Start Practicing!"
            onClick={() => {
              this.setState({
                playing: true,
              })
              this.playPhrase(this.state.phraseChosen.phrase)
            }}
          />
        </form>
        <MIDISounds
          ref={(ref) => this.midiSounds = ref}
          appElementName="root" instruments={[3]}
        />
      </div>
    )
  }
}

export default RoutinePlayer;