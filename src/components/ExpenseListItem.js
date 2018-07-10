import React from 'react';
import { Link } from 'react-router-dom';


const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <h3><Link to={`/edit/${id}`}>{description}</Link></h3>
    <p>{amount} - {createdAt}</p>
  </div>
);

// we don't need to pass in mapStateToProps since we don't need
// to access state and only need the dispatch function
export default ExpenseListItem;