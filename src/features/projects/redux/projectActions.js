import { fetchFakeData } from "../../../app/api/mockApi";
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from "../../../app/async/asyncReducer";
import {
  CREATE_PROJECT,
  DELETE_PROJECT,
  FETCH_PROJECTS,
  UPDATE_PROJECT,
} from "./typeActions";

export const loadProjects = () => {
  return async (dispatch) => {
    dispatch(asyncActionStart());
    try {
      const projects = await fetchFakeData();
      dispatch({ type: FETCH_PROJECTS, payload: projects });
      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError(error));
    }
  };
};

export const createProject = (project) => {
  return {
    type: CREATE_PROJECT,
    payload: project,
  };
};
export const updateProject = (project) => {
  return {
    type: UPDATE_PROJECT,
    payload: project,
  };
};
export const deleteProject = (projectId) => {
  return {
    type: DELETE_PROJECT,
    payload: projectId,
  };
};
