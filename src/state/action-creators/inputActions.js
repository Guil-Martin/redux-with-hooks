export const setValue = (value) => {
  return (dispatch) => {
    dispatch({ type: "SET", payload: value });
  };
};
