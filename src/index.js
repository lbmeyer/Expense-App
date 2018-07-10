import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import AppRouter from "./routers/AppRouter"
import registerServiceWorker from "./registerServiceWorker";
import store from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import "normalize.css";
import "./styles/styles.css";

// track changes
// store.subscribe(() => {
//   const state = store.getState();
//   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//   console.log(visibleExpenses);
// });

store.dispatch(addExpense({ description: 'Water bill', amount: 10000 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 2000, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 8000, createdAt: 10900 }));
// store.dispatch(setTextFilter('gas'));

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


const jsx = (
  // reference our store variable from createStore
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById("root"));
registerServiceWorker();
