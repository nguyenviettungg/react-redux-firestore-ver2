export const INCREMENT_COUNTER = "NCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";

const initialState = {
  data: 42,
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, data: state.data + 1 };
    case DECREMENT_COUNTER:
      return { ...state, data: state.data - 1 };
    default:
      return state;
  }
};

export default testReducer;
