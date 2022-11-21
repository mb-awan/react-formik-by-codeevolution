import './Expenses.css'
import {ExpenseItem} from "./ExpenseItem";
import {Card} from "../UI/Card";
import {useState} from "react";
import {ExpenseFilter} from "./ExpenseFilter";

export const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2022");
    const FilterChangeHandler = year => {
        setFilteredYear(year);
    }
    const filteredExpenses = props.items.filter(expense =>
        expense.date.getFullYear().toString() === filteredYear
    );

    let expensesContent = <p style={{color:"white", textAlign: "center"}}>No Expenses in year {filteredYear}</p>;
    filteredExpenses.length && (expensesContent = filteredExpenses.map(expense =>
        <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />));

    return (
        <Card className="expenses">
            <ExpenseFilter selectedYear = {filteredYear} onChangeFilter = {FilterChangeHandler}/>
            { expensesContent }
        </Card>
    )
}