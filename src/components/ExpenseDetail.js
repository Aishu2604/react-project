import ExpenseDate from './ExpenseDate';
import './ExpenceItem.css';

const ExpenseDetail = (props) => {
    
    return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
        <div className='expense-item__price'>${props.amount}</div>
      </div>
  );
}
export default ExpenseDetail;