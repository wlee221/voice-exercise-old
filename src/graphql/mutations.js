// eslint-disable
// this is an auto generated file. This will be overwritten

export const createRoutine = `mutation CreateRoutine($input: CreateRoutineInput!) {
  createRoutine(input: $input) {
    description
    notes {
      items {
        note
      }
      nextToken
    }
    chords {
      nextToken
    }
    startNote
    endNote
    tempo
  }
}
`;
export const updateRoutine = `mutation UpdateRoutine($input: UpdateRoutineInput!) {
  updateRoutine(input: $input) {
    description
    notes {
      items {
        note
      }
      nextToken
    }
    chords {
      nextToken
    }
    startNote
    endNote
    tempo
  }
}
`;
export const deleteRoutine = `mutation DeleteRoutine($input: DeleteRoutineInput!) {
  deleteRoutine(input: $input) {
    description
    notes {
      items {
        note
      }
      nextToken
    }
    chords {
      nextToken
    }
    startNote
    endNote
    tempo
  }
}
`;
export const createNote = `mutation CreateNote($input: CreateNoteInput!) {
  createNote(input: $input) {
    note
  }
}
`;
export const updateNote = `mutation UpdateNote($input: UpdateNoteInput!) {
  updateNote(input: $input) {
    note
  }
}
`;
export const deleteNote = `mutation DeleteNote($input: DeleteNoteInput!) {
  deleteNote(input: $input) {
    note
  }
}
`;
export const createChord = `mutation CreateChord($input: CreateChordInput!) {
  createChord(input: $input) {
    chord {
      items {
        note
      }
      nextToken
    }
  }
}
`;
export const updateChord = `mutation UpdateChord($input: UpdateChordInput!) {
  updateChord(input: $input) {
    chord {
      items {
        note
      }
      nextToken
    }
  }
}
`;
export const deleteChord = `mutation DeleteChord($input: DeleteChordInput!) {
  deleteChord(input: $input) {
    chord {
      items {
        note
      }
      nextToken
    }
  }
}
`;
