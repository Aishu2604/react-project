import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expense.css';
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');
  
  const filterChangedHandler =(selectedYear) => {
    setFilteredYear(selectedYear);
  }
    return (
        <Card className="expenses">
          <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangedHandler} />
          {props.item.map((expense) =>(
            <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            />
          ))}
          {/* <ExpenseItem 
            title={props.item[0].title}
            amount={props.item[0].amount}
            date={props.item[0].date}
            ></ExpenseItem>
          <ExpenseItem
            title={props.item[1].title}
            amount={props.item[1].amount}
            date={props.item[1].date}
            ></ExpenseItem>
          <ExpenseItem
            title={props.item[2].title}
            amount={props.item[2].amount}
            date={props.item[2].date}
          /><ExpenseItem
            title={props.item[3].title}
            amount={props.item[3].amount}
            date={props.item[3].date}
            ></ExpenseItem> */}
        </Card>
      );
}

export default Expenses;