import './ExpenseDate.css';

// Convention is to repeat file name
function ExpenseDate(props) {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div>
        {month} {day}, {year}{' '}
      </div>
    </div>
  );
}

export default ExpenseDate;
