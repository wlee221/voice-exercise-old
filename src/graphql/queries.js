// eslint-disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
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
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      username
      routines {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getRoutine = `query GetRoutine($id: ID!) {
  getRoutine(id: $id) {
    username
    name
    phrase
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
      username
      name
      phrase
    }
    nextToken
  }
}
`;
