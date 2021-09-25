import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';
//import styled from 'styled-components';

// Using Styled Compoents

// const FormControl = styled.div`
//   margin: 0.5rem 0;
//
//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${props => (props.inValid ? 'red' : 'black' )};
//   }
//
//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${props => (props.inValid ? 'red' : '#ccc' )};
//     background: ${props => (props.inValid ? '#ffd7d7' : '#transparent' )};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
  
// `;


const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0)
    {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    // Added Style 1 : Change the Input label and box color if trying to add empty course
    //if 'if' condition executes then statements below that does not execute
    if(enteredValue.trim().length === 0)
    {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      
      {/* Add dynamic css class through (`) backtick 
          and can write expressions into it which we can't do in 
          ('' / "") single or double inverted comma 
          <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
       */} 
       
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}  >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
