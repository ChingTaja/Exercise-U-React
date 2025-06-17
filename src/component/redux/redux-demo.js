import { createStore } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
  return {
    counter: state.counter + 1, // current state
  };
};

const store = createStore(counterReducer);
console.log(store.getState());
const counterSubscriber = () => {
  const latestState = store.getState(); // 取得目前最新的狀態
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({
    type:'increment'
})
