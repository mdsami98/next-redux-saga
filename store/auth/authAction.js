import * as ACTION from './authActionType.js'
export const loginAction = (payload=null, callback) => ({
    type: ACTION.LOGIN_SUBMIT,
    payload,
    callback
});