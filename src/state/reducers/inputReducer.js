const initialState = "";

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET":
      return payload;
    default:
      return state;
  }
};
