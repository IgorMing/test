import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { insertTrade } from '../actions/trades';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

const submit = (v) => {
  console.log(v);
};

const ManageTrades = (props) => {
  const { error, handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit(submit)}>
      <Field name="fund" type="text" component={renderField} label="Fund" />
      <Field name="date" type="date" component={renderField} />
      <Field name="shares" type="text" component={renderField} label="Shares" />
      <Field name="kind" type="number" component={renderField} label="Kind" />
      {error && <strong>{error}</strong>}
      <div>
        <button type="submit" disabled={submitting}>Log In</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}

export default connect()(reduxForm({
  form: 'submitValidation'  // a unique identifier for this form
})(ManageTrades))
