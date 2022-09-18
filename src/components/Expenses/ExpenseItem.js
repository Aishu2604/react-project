import React, { useState } from 'react';
import Card from '../UI/Card';
import './ExpenceItem.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount)
   
  const amountHandler = () => {
    setAmount('$100');
    console.log(amount);
  }

  const clickHandler = () => {
      setTitle('Updated!!!');
      console.log(title);
    }
    return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={amountHandler}>Change Expense</button>
    </Card>
  );
}

export default ExpenseItem;
