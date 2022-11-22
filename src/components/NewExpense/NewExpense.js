import './NewExpense.css';
import { ExpenseForm} from "./ExpenseForm";
import {useState} from "react";

export const NewExpense = (props) => {
    const [addExpense, setAddExpense] = useState(true);

    const cancelExpenseHandler = () => setAddExpense(prevState => !prevState);

    const saveExpenseHandler = enteredExpense => {
        const newExpense = {
            id: Math.random().toString(),
            ...enteredExpense
        }
        props.onAddExpense(newExpense);
    }

    return (
        <div className="new-expense">
            {addExpense ?
            <ExpenseForm onSaveExpense={saveExpenseHandler} onCancel ={cancelExpenseHandler}/>
                : <button onClick={cancelExpenseHandler}> Add Expense</button>}
        </div>
    )
}