export class InvalidInputError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'InvalidInputError';
  }
}

/*
 * Convert scientific pitch notation (ex. G4) to a midi pitch number.
 * This assumes that "Middle C" = C4 = 48.
 */
export function convertNote(note_name) {
  note_name = note_name.toUpperCase();
  const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

  var tone = note_name.slice(0, note_name.length - 1);
  var octave = parseInt(note_name.slice(note_name.length - 1), 10);
  var idx = notes.indexOf(tone);

  // Error checks
  if (note_name.length !== 2 && note_name.length !== 3) {
    throw new InvalidInputError(`Invalid note name: ${note_name}. Your note name should be of length 2 or 3.`);
  } else if (idx === -1) {
    throw new InvalidInputError(
      `Invalid tone name: ${tone}. Your tone name should be one of
        C, C#, D, ..., B (case insensitive). Please use sharps instead of flats.
      `
    ); // TODO: recognize flats as well.
  } else if (isNaN(octave) || octave < 1 || octave > 9) {
    throw new InvalidInputError(`Invalid octave: ${note_name.slice(note_name.length - 1)}. It should be between 1 and 9 inclusive.`);
  }

  return idx + 12 * (octave); // assuming middle C = C4 = 60
}

/*
 * Convert an array of scientific pitch notations using convertNote.
 */
export function convertNotes(note_array) {
  var note_numbers = Array(note_array.length);
  note_array.forEach((note, idx) => {
    note_numbers[idx] = convertNote(note);
  });
  return note_numbers;
}

/* 
 * Parse an input phrase string and returns a note number array. 
 *
 * Input:   Whole note scale number separated by a single space. (ex: "1 2 3 4 3 2 1"). 
 *          Each Number should be within 2 octaves of "1" (ie. -13 ~ 15).
 * Output:  Number array that maps 1 to C4, 2 to D4, ...
 */
export function parseRawStringPhrase(raw_notes) {
  const split_notes = raw_notes.split(" ");
  var converted_notes = Array(split_notes.length);
  const middle_C = 48;
  split_notes.forEach((val, idx) => {
    const note = parseInt(val);
    if (isNaN(note) || note < -13 || note > 15)
      throw new InvalidInputError(`Invalid note: ${note}. Each note should be between -14 and 15, inclusive.`)
    /*
     * Calculate the number of half steps. Specifically, E -> F and B -> C are half step interval.)
     * Because we assume that each note is within 2 octaves of "1", there can be up to 4 half steps.
     */
    var half_steps = 0;
    // TODO: Think of a clever way using + 3 + 4 and -4 -3 pattern.
    if (note < 1 || note > 3)++half_steps;
    if (note < -3 || note > 7)++half_steps;
    if (note < -6 || note > 10)++half_steps;
    if (note < -10 || note > 14)++half_steps; 

    // Now, we can compute the target note! 
    var interval = (note - 1) * 2;
    interval += (note > 0) ? -half_steps : half_steps; 
    converted_notes[idx] = middle_C + interval;
  });
  return converted_notes
}
