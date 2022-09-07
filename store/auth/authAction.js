import { setCookie } from 'cookies-next';
import { loginRequest } from '../../api/authApi';
import {loginSubmit, loginSuccess, loginFailed} from './authReducer';


export function loginSubmitAction(data) {
    return async dispatch => {
      try{
        dispatch(loginSubmit())
      
        const login = await loginRequest(data)
        if(login.status){
          
          dispatch(loginSuccess(login.data.data))
          setCookie('token', login.data.tokens.access);
          window.localStorage.setItem('user', JSON.stringify(login.data.data))
        }else{
          dispatch(loginFailed())

        }


        } catch (error) {
            dispatch(loginFailed());
         
        }
      }
}