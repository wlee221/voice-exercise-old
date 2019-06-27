// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
    username
    routines {
      items {
        username
        name
        phrase
      }
      nextToken
    }
  }
}
`;
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
    username
    routines {
      items {
        username
        name
        phrase
      }
      nextToken
    }
  }
}
`;
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
    username
    routines {
      items {
        username
        name
        phrase
      }
      nextToken
    }
  }
}
`;
export const onCreateRoutine = `subscription OnCreateRoutine {
  onCreateRoutine {
    username
    name
    phrase
  }
}
`;
export const onUpdateRoutine = `subscription OnUpdateRoutine {
  onUpdateRoutine {
    username
    name
    phrase
  }
}
`;
export const onDeleteRoutine = `subscription OnDeleteRoutine {
  onDeleteRoutine {
    username
    name
    phrase
  }
}
`;
