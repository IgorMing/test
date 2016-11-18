import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { submit } from '../actions/trades';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const renderTrades = ({ fields, meta: { touched, error } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>Add trade</button>
      {touched && error && <span>{error}</span>}
    </li>
    {fields.map((trade, index) =>
      <li key={index}>
        <button
          type="button"
          title="Remove trade"
          onClick={() => fields.remove(index)}/>
        <h4>Trade #{index + 1}</h4>
        <Field
          name={`${trade}.fund_id`}
          type="text"
          component={renderField}
          label="Fund"
        />
        <Field
          name={`${trade}.date`}
          type="date"
          component={renderField}
          label="Date"
        />
        <Field
          name={`${trade}.shares`}
          type="text"
          component={renderField}
          label="Shares"
        />
        <Field
          name={`${trade}.kind`}
          type="number"
          component={renderField}
          label="Kind"
        />
      </li>
    )}
  </ul>
)

const FieldArraysForm = (props) => {

  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <form onSubmit={handleSubmit(submit)}>
      <FieldArray name="trades" component={renderTrades} />
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'fieldArrays'
})(FieldArraysForm);
