import {sendRequest} from './index';

export const loginRequest = async (loginCredential) => {
    // return sendRequest("post", `${process.env.REACT_APP_API_BASE_URL}/auth/login`, loginCredential);
    const response = await sendRequest("post", `http://localhost:7001/api/auth/login`, loginCredential);
    console.log(response);
    return response
};