import React from "react";
import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  let expenseContent = <p>No Expenses Found !!!</p>

  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback"> Found No Expenses!!! </h2>
  }
  if (props.item.length === 1) {
    return <h2 className="expenses-list__fallback"> Add More Expenses!!! </h2>
  }
  return (
    <ul className="expenses-list">
        {props.item.map((expense) =>(
      <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
      />
    ))};
    </ul>
  )
}

export default ExpensesList;