import { applyMiddleware, createStore, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk"

import { rootReducer } from "../Reducers"


const middleware = [thunk]



const store= createStore(rootReducer, process.env.NODE_ENV !== 'production' ?
   composeWithDevTools(applyMiddleware(...middleware)) : applyMiddleware(compose(...middleware)));

export default store