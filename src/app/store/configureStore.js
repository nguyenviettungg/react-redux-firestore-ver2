import { createStore } from "redux";
import rootReducer from "../../app/store/rootReducer";
import { devToolsEnhancer } from "redux-devtools-extension";

export const configureStore = () => {
  return createStore(rootReducer, devToolsEnhancer());
};
