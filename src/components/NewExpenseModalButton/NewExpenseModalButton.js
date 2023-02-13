import './NewExpenseModalButton.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';

function NewExpenseModalButton({ buttonRef, showModal }) {
  return (
    <button
      className="new-expense-modal-button"
      ref={buttonRef}
      onClick={showModal}
    >
      <AiOutlinePlusCircle /> Add Expense
    </button>
  );
}
export default NewExpenseModalButton;
