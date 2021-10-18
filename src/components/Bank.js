import React from "react";

import { store } from "../state/store";

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { accountActions } from "../state/action-creators/index";

const Bank = () => {
  console.log("Bank component load");

  const account = useSelector((state) => state.account);

  // No need for this as it would rerender this component if the input is changed
  // instead we get the value of the input directly in the store when a function
  // is triggered by a button in this component
  // const inputValue = useSelector((state) => state.inputValue);

  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney } = bindActionCreators(
    accountActions,
    dispatch
  );

  return (
    <div className="buttons">
      <h1>{account}</h1>
      <button onClick={() => depositMoney(store.getState().inputValue)}>
        Deposit
      </button>
      <button onClick={() => withdrawMoney(store.getState().inputValue)}>
        Withdraw
      </button>
    </div>
  );
};

export default Bank;
