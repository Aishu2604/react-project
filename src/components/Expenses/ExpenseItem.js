import React from 'react';
import Card from '../UI/Card';
import './ExpenceItem.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
    const clickHandler = () => {
      console.log('Clicked!!!')
    }
    return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button>Delete Expense</button>
    </Card>
  );
}

export default ExpenseItem;