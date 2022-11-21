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
    return (
        <Card className="expenses">
            <ExpenseFilter selectedYear = {filteredYear} onChangeFilter = {FilterChangeHandler}/>
            {props.items.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)}
        </Card>
    )
}