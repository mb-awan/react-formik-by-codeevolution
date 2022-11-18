import './ExpenseForm.css';
import { useState } from "react";

export const ExpenseForm = () => {
    // const [enteredTitle, setEnteredTitle] = useState("");
    // const [enteredAmount, setEnteredAmount] = useState("");
    // const [selectedDate, setSelectedDate] = useState("");

    const [userInputs, setUserInputs] = useState({
        enteredTitle: '',
        enteredAmount: '',
        selectedDate: ''
    });

    const titleChangeHandler = event => {
        // setEnteredTitle(event.target.value);

        // setUserInputs({
        //     ...userInputs,
        //     enteredTitle: event.target.value
        // });

        // Whenever our state is set on the base of previous value then it is recommended
        // to use below approach because react schedules the states updates and therefore
        // in some case the above approach may be failed.

        setUserInputs(prevState => {
            return {
                ...prevState,
                enteredTitle: event.target.value
            };
        });
    }

    const amountChangeHandler = event => {
        // setEnteredAmount(event.target.value);

        // setUserInputs({
        //     ...userInputs,
        //     enteredAmount: event.target.value
        // });

        setUserInputs(prevState => {
            return {
                ...prevState,
                enteredAmount: event.target.value
            }
        });
    }
    const dateChangeHandler = (event) => {
        // setSelectedDate(event.target.value);

        // setUserInputs({
        //     ...userInputs,
        //     selectedDate: event.target.value
        // });

        setUserInputs(prevState => {
            return {
                ...prevState,
                selectedDate: event.target.value
            }
        });
    }
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    {/*<input type="text" onChange={titleChangeHandler} value={enteredTitle}/>*/}
                    <input type="text" onChange={titleChangeHandler} value={userInputs.enteredTitle}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    {/*<input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={enteredAmount}/>*/}
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={userInputs.enteredAmount}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    {/*<input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} value={selectedDate}/>*/}
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} value={userInputs.selectedDate}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button>Add new Expense</button>
            </div>
        </form>
    )
}