

const initialState = {
  user_name: '',
  userId: 0,
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
      return {...state, user_name: action.payload.user_name, img: action.payload.img, userId: action.payload.userId}
    case LOGOUT:
      return initialState
    default:
      return state
  }
}