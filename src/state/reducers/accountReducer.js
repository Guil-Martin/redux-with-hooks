const initialState = 0;

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "DEPOSIT":
      return state + parseInt(payload);
    case "WITHDRAW":
      return state - parseInt(payload);
    default:
      return state;
  }
};

export default reducer;
