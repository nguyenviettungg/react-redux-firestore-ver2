import { CREATE_PROJECT, DELETE_PROJECT, UPDATE_PROJECT } from "./typeActions";

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
