import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
  renderInput({ input, label }) {
    return (
      //<input onChange={formProps.input.onChange} value={formProps.input.value} />
      <div>
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }

  onFormSubmit = (formProps) => {
    console.log(formProps);
  };

  render() {
    return (
      <form
        className="ui form"
        onSubmit={this.props.handleSubmit(this.onFormSubmit)}
      >
        <Field name="title" component={this.renderInput} label="enter title" />
        <Field
          name="description"
          component={this.renderInput}
          label="enter description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {};

export default reduxForm({
  form: "streamCreate",
})(StreamCreate);
