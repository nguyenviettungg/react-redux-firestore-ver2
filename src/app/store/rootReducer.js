import { combineReducers } from "redux";
import projectReducer from "../../features/projects/redux/projectReducer";
import testReducer from "../../features/test/testReducer";

const roorReducer = combineReducers({
  test: testReducer,
  project: projectReducer,
});

export default roorReducer;
