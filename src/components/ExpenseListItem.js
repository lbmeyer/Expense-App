import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';


const ExpenseListItem = ({replaceReducer, dispatch, getState, id, description, amount, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
    <button onClick={(e) => {
      dispatch(removeExpense({id}));
      // console.log(dispatch);
    }} >Remove</button>
  </div>
);

// we don't need to pass in mapStateToProps since we don't need
// to access state and only need the dispatch function
export default connect()(ExpenseListItem);