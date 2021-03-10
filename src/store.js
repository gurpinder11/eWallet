import {createStore} from "redux";
import walletsReducer from "./redux/reducer";

const configureStore = (preloadedState) => createStore(walletsReducer, preloadedState);

export default configureStore;
