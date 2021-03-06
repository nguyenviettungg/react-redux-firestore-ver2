// import { fakeData } from "../../../app/api/fakeData";
import {
  CREATE_PROJECT,
  DELETE_PROJECT,
  FETCH_PROJECTS,
  UPDATE_PROJECT,
} from "./typeActions";

const initialState = {
  projects: [],
};

const projectReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_PROJECT:
      return { ...state, projects: [...state.projects, payload] };
    case UPDATE_PROJECT:
      return {
        ...state,
        projects: [
          ...state.projects.filter((prj) => prj.id !== payload.id),
          payload,
        ],
      };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: [...state.projects.filter((prj) => prj.id !== payload)],
      };
    case FETCH_PROJECTS:
      return {
        ...state,
        projects: payload,
      };
    default:
      return state;
  }
};

export default projectReducer;
