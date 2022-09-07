

// import { createWrapper } from 'next-redux-wrapper';
// import { applyMiddleware, createStore } from 'redux';
// import createSagaMiddleware from 'redux-saga';

// // eslint-disable-next-line no-unused-vars
// import rootReducer from './rootReducer';
// import rootSaga from './rootSaga';

// const bindMiddleware = middleware => {

//   return applyMiddleware(...middleware);
// };

// // eslint-disable-next-line no-shadow,no-use-before-define
// const configureStore = ()=> {
//   const sagaMiddleware = createSagaMiddleware();
//   const store = createStore(
//     rootReducer,
//     bindMiddleware([sagaMiddleware])
//   );

//   store.sagaTask = sagaMiddleware.run(rootSaga);

//   return store;
// }


// export const wrapper = createWrapper(configureStore)


//Toolkit

import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer';

const store= configureStore({
    reducer: rootReducer
})

export default store