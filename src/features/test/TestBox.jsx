import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { openModal } from "../../app/common/modals/modalReducer";
import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "./testReducer";

const TestBox = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.test.data);
  return (
    <>
      <h1>Testing </h1>
      <h3>The data : {data}</h3>
      <Button
        onClick={() => dispatch({ type: INCREMENT_COUNTER })}
        content="+"
        color="green"
      />
      <Button
        onClick={() => dispatch({ type: DECREMENT_COUNTER })}
        content="-"
        color="red"
      />
      <Button
        onClick={() =>
          dispatch(openModal({ modalType: "TestModal", modalProps: { data } }))
        }
        content="Open modal"
        color="teal"
      />
    </>
  );
};

export default TestBox;
