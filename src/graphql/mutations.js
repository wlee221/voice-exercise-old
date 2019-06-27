// eslint-disable
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
export const createRoutine = `mutation CreateRoutine($input: CreateRoutineInput!) {
  createRoutine(input: $input) {
    username
    name
    phrase
  }
}
`;
export const updateRoutine = `mutation UpdateRoutine($input: UpdateRoutineInput!) {
  updateRoutine(input: $input) {
    username
    name
    phrase
  }
}
`;
export const deleteRoutine = `mutation DeleteRoutine($input: DeleteRoutineInput!) {
  deleteRoutine(input: $input) {
    username
    name
    phrase
  }
}
`;
