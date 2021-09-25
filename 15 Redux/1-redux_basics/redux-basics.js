// import
const redux = require('redux');     

// Reducer Function
const counterReducer = (state = {counter: 0}, action) => {

    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
        };
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
        };
    }

    return state;
};

// Store
const store = redux.createStore(counterReducer);

// Subscription
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

store.subscribe(counterSubscriber);

// Dispatch
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });
