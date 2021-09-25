import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';


const NewExpenses = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    const [isEditing,setIsEditing] = useState(false);

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return(
        <div className='new-expense'>
            {/* If first expression is true then second expression returns its value */}

            {!isEditing && <button onClick={startEditingHandler}>Add New Expenses</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
        </div>
    );
}

export default NewExpenses;