const countCartReducer = (state = 0, action) => {
  if (action.type === 'COUNT_PLUS') return state + 1;
  if (action.type === 'COUNT_MINUS') return state > 0 ? state - 1 : state;
  if (action.type === '1') return 0;
  return state;
};

export default countCartReducer;
