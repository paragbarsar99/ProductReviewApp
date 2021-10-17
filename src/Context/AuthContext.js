import React, {useEffect} from 'react';
import Auth from '@react-native-firebase/auth';
import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'sign_in':
      return {...state, token: action.payload};
    case 'sign_up':
      return {...state, token: action.payload};
    case 'sign_out':
      return {...state, token: null};
    case 'errorMessage':
      return {...state, errormessage: action.payload};
    case 'auto_login':
      return {...state, token: action.payload};
      case 'clearError_Message':
        return {...state,errormessage:""}
    default:
      return state;
  }
};
//action function's
const clearErrorMessage = (dispatch) => () =>{
   dispatch({type:'clearError_Message'})  
}
//auto login
const AutoLogin = dispatch => async () => {
  try {
    const {currentUser} = await Auth()
    console.log(`currentUser is ${currentUser}`);
    dispatch({type: 'auto_login', payload: currentUser});
  } catch (err) {
    console.log(err);
  }
};
const SignIn = dispatch => async (email, password) => {
  try {
    if (!email || !password) {
      return dispatch({
        type: 'errorMessage',
        payload: 'Please fill the Email or Password',
      });
    }
    const response = await Auth().signInWithEmailAndPassword(email, password);
    dispatch({type: 'sign_in', payload: response});

    console.log(`response of signin is:${response}`);
  } catch (err) {
    dispatch({type:'errorMessage',payload:err.message})

    console.log(`error is ${err.message}`);
  }
};
const SignUp = dispatch => async (email, password) => {
  try {
    if (!email || !password) {
      return dispatch({
        type: 'errorMessage',
        payload: 'Please fill the Email or Password',
      });
    }
    const response = await Auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    dispatch({type: 'sign_up', payload: response});
    //console.log(`response of signup is:${response}`);
  } catch (err) {
     dispatch({type:'errorMessage',payload:err.message})
     
    console.log(err.message);
  }
};
const SignOut = dispatch => async () => {
  try {
    const response = await Auth().signOut();
    dispatch({type: 'sign_out'});
    console.log(`response of signout is:${response[0]}`);
  } catch (error) {
    console.log(error);
  }
};

export const {Context, Provider} = createDataContext(
  authReducer,
  {SignIn, SignUp, SignOut,  AutoLogin,clearErrorMessage},
  {token: null, errormessage: null},
);
