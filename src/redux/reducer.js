

const initialState = {
  user_name: '',
  user_id: 0,
  img: ''
}

const UPDATE_USER = 'UPDATE_USER';
const LOGIN_USER = 'LOGIN_USER'
const LOGOUT = 'LOGOUT';

export function loginUser(users){
  return {
      type: LOGIN_USER,
      payload: users
  }
}

export function logout (users){
  return {
    type: LOGOUT,
    payload: users
  }
}

export function updateUser(users) {
  return {
    type: UPDATE_USER,
    payload: users
  }
}



export default function reducer (state = initialState, action){
  
  switch (action.type){
    case LOGIN_USER:
            return {...state, users: action.payload, isLoggedIn: true}
    case UPDATE_USER:
      return {...state, user_name: action.payload.user_name, img: action.payload.img, user_id: action.payload.user_id}
    case LOGOUT:
      return initialState
    default:
      return state
  }
}