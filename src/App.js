import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import NewExpenseModalContainer from './components/UI/NewExpenseModalContainer';
import Banner from './components/DashyBanner/Banner';
import MaterialUICard from './components/UI/MaterialUICard/MaterialUICard';

const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenseData] = useState(DUMMY_DATA);

  function addNewExpense(expense) {
    setExpenseData((previousData) => {
      return [expense, ...previousData];
    });
  }

  function onSubmit(event) {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
  }

  return (
    <div>
      <Banner />
      <div>
        <NewExpenseModalContainer />
        <MaterialUICard />
      </div>
    </div>
  );
}

export default App;
