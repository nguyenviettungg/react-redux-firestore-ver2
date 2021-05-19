import { combineReducers } from "redux";
import authReducer from "../../features/auth/authReducer";
import projectReducer from "../../features/projects/redux/projectReducer";
import testReducer from "../../features/test/testReducer";
import asyncReducer from "../async/asyncReducer";
import modalReducer from "../common/modals/modalReducer";

const roorReducer = combineReducers({
  test: testReducer,
  project: projectReducer,
  modals: modalReducer,
  auth: authReducer,
  async: asyncReducer,
});

export default roorReducer;
