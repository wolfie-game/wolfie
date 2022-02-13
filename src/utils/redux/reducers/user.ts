const actions = {
  CHECK_AUTH: 'CHECK_AUTH',
  CREATE_USER: 'CREATE_USER',
  LOGOUT: 'LOGOUT',
  GET_LEADERS: 'GET_LEADERS',
}

const initialState = {
  auth: false,
  value: null,
}

function userReducer(state = initialState, action) {
  switch (action.type) {
    case actions.CHECK_AUTH:
      return {
        auth: true,
        value: action.payload,
      }
    case actions.CREATE_USER:
      return {
        auth: true,
        value: action.payload,
      }
    case actions.LOGOUT:
      return {
        auth: false,
        value: null,
      }
    default:
      return state
  }
}
export function checkAuth(userData) {
  return {type: actions.CHECK_AUTH, payload: {...userData}}
}
export function createUser(userData) {
  return {type: actions.CREATE_USER, payload: {...userData}}
}
export function logout() {
  return {type: actions.LOGOUT}
}

export default userReducer
