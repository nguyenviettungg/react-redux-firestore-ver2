import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { openModal } from "../../app/common/modals/modalReducer";
import { decrement, increment } from "./testReducer";

const TestBox = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.test.data);
  const { loading } = useSelector((state) => state.async);
  return (
    <>
      <h1>Testing </h1>
      <h3>The data : {data}</h3>
      <Button
        loading={loading}
        onClick={() => dispatch(increment(10))}
        content="+"
        color="green"
      />
      <Button
        loading={loading}
        onClick={() => dispatch(decrement(5))}
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
