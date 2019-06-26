// eslint-disable
// this is an auto generated file. This will be overwritten

export const getRoutine = `query GetRoutine($id: ID!) {
  getRoutine(id: $id) {
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
export const listRoutines = `query ListRoutines(
  $filter: ModelRoutineFilterInput
  $limit: Int
  $nextToken: String
) {
  listRoutines(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      description
      notes {
        nextToken
      }
      chords {
        nextToken
      }
      startNote
      endNote
      tempo
    }
    nextToken
  }
}
`;
export const getNote = `query GetNote($id: ID!) {
  getNote(id: $id) {
    note
  }
}
`;
export const listNotes = `query ListNotes(
  $filter: ModelNoteFilterInput
  $limit: Int
  $nextToken: String
) {
  listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      note
    }
    nextToken
  }
}
`;
export const getChord = `query GetChord($id: ID!) {
  getChord(id: $id) {
    chord {
      items {
        note
      }
      nextToken
    }
  }
}
`;
export const listChords = `query ListChords(
  $filter: ModelChordFilterInput
  $limit: Int
  $nextToken: String
) {
  listChords(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      chord {
        nextToken
      }
    }
    nextToken
  }
}
`;
