// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateRoutine = `subscription OnCreateRoutine {
  onCreateRoutine {
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
export const onUpdateRoutine = `subscription OnUpdateRoutine {
  onUpdateRoutine {
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
export const onDeleteRoutine = `subscription OnDeleteRoutine {
  onDeleteRoutine {
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
export const onCreateNote = `subscription OnCreateNote {
  onCreateNote {
    note
  }
}
`;
export const onUpdateNote = `subscription OnUpdateNote {
  onUpdateNote {
    note
  }
}
`;
export const onDeleteNote = `subscription OnDeleteNote {
  onDeleteNote {
    note
  }
}
`;
export const onCreateChord = `subscription OnCreateChord {
  onCreateChord {
    chord {
      items {
        note
      }
      nextToken
    }
  }
}
`;
export const onUpdateChord = `subscription OnUpdateChord {
  onUpdateChord {
    chord {
      items {
        note
      }
      nextToken
    }
  }
}
`;
export const onDeleteChord = `subscription OnDeleteChord {
  onDeleteChord {
    chord {
      items {
        note
      }
      nextToken
    }
  }
}
`;
