import './ExpenseForm.css';
import React, { useState } from 'react';

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
  }

  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
  }

  function submitHandler(event) {
    // By defautl submit buttons send HTTP request to server and page refreshes
    // This javascript code prevent that behaviour
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
    };

    props.onFormSubmit(expenseData);

    // This is to clear the input of the form after hitting submit
    setEnteredTitle('');
    setEnteredAmount('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.00"
            step="1"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
