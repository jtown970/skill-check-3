

const initialState = {
  email: '',
  id: 0,
  img: ''
}

const UPDATE_USER = 'UPDATE_USER';
const LOGIN_USER = 'LOGIN_USER'
const LOGOUT = 'LOGOUT';

export function loginUser(user){
  return {
      type: LOGIN_USER,
      payload: user
  }
}

export function logout (user){
  return {
    type: LOGOUT,
    payload: user
  }
}

export function updateUser(user) {
  return {
    type: UPDATE_USER,
    payload: user
  }
}



export default function reducer (state = initialState, action){
  
  switch (action.type){
    case LOGIN_USER:
            return {...state, user: action.payload, isLoggedIn: true}
    case UPDATE_USER:
      return {...state, email: action.payload.email, img: action.payload.img, id: action.payload.id}
    case LOGOUT:
      return initialState
    default:
      return state
  }
}