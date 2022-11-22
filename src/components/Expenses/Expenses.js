import './Expenses.css'
import {ExpenseItem} from "./ExpenseItem";
import {Card} from "../UI/Card";
import {useState} from "react";
import {ExpenseFilter} from "./ExpenseFilter";
import {ExpenseList} from "./ExpenseList";

export const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2022");
    const FilterChangeHandler = year => {
        setFilteredYear(year);
    }
    const filteredExpenses = props.items.filter(expense =>
        expense.date.getFullYear().toString() === filteredYear
    );

    return (
        <Card className="expenses">
            <ExpenseFilter selectedYear = {filteredYear} onChangeFilter = {FilterChangeHandler}/>
            <ExpenseList items={filteredExpenses}/>
        </Card>
    )
}