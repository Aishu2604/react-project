import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expense.css';
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');
  
  const filterChangedHandler =(selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.item.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

    return (
        <Card className="expenses">
          <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangedHandler} />
          <ExpensesList item={filteredExpenses} />
        </Card>
      );
}

export default Expenses;