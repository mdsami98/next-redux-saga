import { setCookie } from 'cookies-next';
import { checkAuthApi, loginRequest } from '../../api/authApi';
import {loginSubmit, loginSuccess, loginFailed, checkAuth,checkAuthSuccess, checkAuthFailed} from './authReducer';


export function loginSubmitAction(data) {
    return async dispatch => {
      try{
        dispatch(loginSubmit())
      
        const login = await loginRequest(data)
        if(login.status){
          dispatch(loginSuccess())
          // console.log(login.data.tokens.access, 'login.data.tokens.access');
          setCookie('token', login.data.tokens.access.token);
          window.localStorage.setItem('user', JSON.stringify(login.data.data))
        }else{
          dispatch(loginFailed())

        }


        } catch (error) {
            dispatch(loginFailed());
         
        }
      }
}
export function checkAuthAction() {
    return async dispatch => {
      try{
        dispatch(checkAuth())
        const check = await checkAuthApi()
        console.log('check', check);
        if(check?.data?.status){
          dispatch(checkAuthSuccess(check.data))
        }else{
          dispatch(checkAuthFailed())

        }
        } catch (error) {
            dispatch(checkAuthFailed());
         
        }
      }
}