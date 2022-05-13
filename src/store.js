import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import userReducer from "./reducers";

//import the watcher saga
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  userReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    typeof window === "object" && typeof window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

sagaMiddleware.run(rootSaga);
export default store;
