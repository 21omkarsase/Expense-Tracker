import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyExpenses = [
  {
    id: "e1",
    title: "Books",
    amount: 10,
    date: new Date(2020, 7, 14),
  },

  { id: "e2", title: "New TV", amount: 500, date: new Date(2021, 4, 12) },
  {
    id: "e3",
    title: "Health Insurance",
    amount: 300,
    date: new Date(2021, 11, 28),
  },
  {
    id: "e4",
    title: "New Desk",
    amount: 50,
    date: new Date(2021, 9, 12),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
