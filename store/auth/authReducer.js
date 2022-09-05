/* eslint-disable default-param-last */


const initialState = {
    user: "Submit",
    isLoading: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
           return {
            ...state,user:"Sami"
           }
        default:
            return state;
    }
};

export const authData = (state) => state.authReducer; 

export default authReducer;
