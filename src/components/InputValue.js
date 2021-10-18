import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { inputActions } from "../state/action-creators";

const InputValue = () => {
  console.log("InputValue component load");

  const inputValue = useSelector((state) => state.inputValue);
  const dispatch = useDispatch();

  const { setValue } = bindActionCreators(inputActions, dispatch);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};

export default InputValue;
