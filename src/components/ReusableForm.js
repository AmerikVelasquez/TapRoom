import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit = {props.formSubmissionHandler}>
        <input 
         type = 'text'
         name = 'name'
         placeholder = 'name'/>
         <input 
         type = 'text'
         name = 'brand'
         placeholder = 'brand'/>
         <input 
         type = 'number'
         name = 'price'
         placeholder = 'price'/>
         <input 
         type = 'number'
         min = {0}
         name = 'alcoholContent'
         placeholder = 'percentage'/>
         <input
         type = 'number'
         name = 'pints'
         min = {0}
         max = {124}
         placeholder = 'pints'/>
         <button type = 'submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler : PropTypes.func,
  buttonText : PropTypes.string
}

export default ReusableForm;