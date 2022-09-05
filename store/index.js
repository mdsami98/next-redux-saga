// import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'

// import { applyMiddleware } from 'redux'
// import saga from './rootSaga'
// import rootReducer from "./rootReducer";

// import createSagaMiddleware from 'redux-saga';
// // create the saga middleware
// const sagaMiddleware = createSagaMiddleware();



// const store = configureStore({
//   reducer: {}, 
//   middleware: [sagaMiddleware]
// });

// // sagaMiddleware.run(saga);

// export default store;


// import {createStore, applyMiddleware} from 'redux'
// import createSagaMiddleware from 'redux-saga'
// import rootReducer from './rootReducer'
// import rootSaga from './rootSaga'

// const sagaMiddleware = createSagaMiddleware()

// function configureStore(initialState) {
//   const store = createStore(
//     rootReducer,
//     initialState,
//     applyMiddleware(sagaMiddleware)
//   )

//   /**
//    * next-redux-saga depends on `runSagaTask` and `sagaTask` being attached to the store.
//    *
//    *   `runSagaTask` is used to rerun the rootSaga on the client when in sync mode (default)
//    *   `sagaTask` is used to await the rootSaga task before sending results to the client
//    *
//    */

//   store.runSagaTask = () => {
//     store.sagaTask = sagaMiddleware.run(rootSaga)
//   }

//   // run the rootSaga initially
//   store.runSagaTask()
//   return store
// }

// export default configureStore



// import { createWrapper } from 'next-redux-wrapper'
// import {createStore, applyMiddleware} from 'redux'
// import createSagaMiddleware from 'redux-saga'
// import rootReducer from './rootReducer'
// import rootSaga from './rootSaga'

// function configureStore(preloadedState) {

//   /**
//    * Recreate the stdChannel (saga middleware) with every context.
//    */

//   const sagaMiddleware = createSagaMiddleware()

//   /**
//    * Since Next.js does server-side rendering, you are REQUIRED to pass
//    * `preloadedState` when creating the store.
//    */

//   const store = createStore(
//     rootReducer,
//     preloadedState,
//     applyMiddleware(sagaMiddleware)
//   )

//   /**
//    * next-redux-saga depends on `sagaTask` being attached to the store.
//    * It is used to await the rootSaga task before sending results to the client.
//    */

//   store.sagaTask = sagaMiddleware.run(rootSaga)

//   return store
// }

// export default createWrapper(configureStore);

import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

// eslint-disable-next-line no-unused-vars
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const bindMiddleware = middleware => {
  // if (process.env.NODE_ENV !== 'production') {
  //   // eslint-disable-next-line global-require
  //   const { composeWithDevTools } = require('redux-devtools-extension');
  //   return composeWithDevTools(applyMiddleware(...middleware));
  // }
  return applyMiddleware(...middleware);
};

// eslint-disable-next-line no-shadow,no-use-before-define
const configureStore = ()=> {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    bindMiddleware([sagaMiddleware])
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}


export const wrapper = createWrapper(configureStore)
// export default configureStore;

