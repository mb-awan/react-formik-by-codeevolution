import './NewExpense.css';
import { ExpenseForm} from "./ExpenseForm";

export const NewExpense = (props) => {
    const saveExpenseHandler = enteredExpense => {
        const newExpense = {
            id: Math.random().toString(),
            ...enteredExpense
        }
        props.onAddExpense(newExpense);
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpense={saveExpenseHandler}/>
        </div>
    )
}