export default store => next => action => {
  console.log('state before ', store.getState());
  console.log('dispaching ', action);
  next(action);
  console.log('state after ', store.getState());
}