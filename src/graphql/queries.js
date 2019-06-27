// eslint-disable
// this is an auto generated file. This will be overwritten

export const getRoutine = `query GetRoutine($id: ID!) {
  getRoutine(id: $id) {
    name
    author
    routine
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
      name
      author
      routine
    }
    nextToken
  }
}
`;
