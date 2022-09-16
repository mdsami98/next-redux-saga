/* eslint-disable no-unused-vars */
import axios from "axios";
import { getCookie } from 'cookies-next';

export const sendRequest = (method, url, payload = [], config = []) => {
    try{
        const request = axios({
            url,
            headers: {
                "Content-Type": "application/json",
            },
            method,
            data: payload,
            responseType: "json"
        });

        return request
        .then((res) => {
            return res;
        })
        .catch((error) => {
            return error.response.data;
        });


    }catch(e){
        console.log(e.message);
        return e;
    }  
};

export const sendRequestWithTokenAndError = (method, url, payload = [], config = []) => {
    const bearerToken = getCookie('token');
    console.log(bearerToken);
    const request = axios({
        url,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${bearerToken}`
        },
        method,
        data: payload,
        responseType: "json"
    });

    return request
        .then((res) => {
            return res;
        })
        .catch((error) => {
            return error.response.data;

        });
};