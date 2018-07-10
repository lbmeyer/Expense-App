import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';

const EditExpensePage = props => {
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={expense => {
          // dispatch action to edit the expense
          props.dispatch(editExpense(props.expense.id, expense));
          // Redirect to the dashboard
          props.history.push('/');
        }}
      />
      <button
        onClick={e => {
          props.dispatch(removeExpense(props.expense.id));
          props.history.push('/');
          // console.log(dispatch);
        }}
      >
        Remove
      </button>
    </div>
  );
};

// ownProps is convention of naming 'props' parameter in mapStateToProps
const mapStateToProps = (state, ownProps) => {
  return {
    expense: state.expenses.find(expense => {
      return expense.id === ownProps.match.params.id;
    })
  };
};

export default connect(mapStateToProps)(EditExpensePage);
