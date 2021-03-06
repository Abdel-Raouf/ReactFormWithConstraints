// @ts-check

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { FormWithConstraints, FieldFeedbacks, FieldFeedback } from 'react-form-with-constraints';

import 'file-loader?name=[path][name].[ext]!./index.html';

class Form extends FormWithConstraints {
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} noValidate>
        <input type="email" name="username" defaultValue="John Doe" required />
        <FieldFeedbacks for="username">
          <FieldFeedback when="*" />
        </FieldFeedbacks>

        <button>Submit</button>
      </form>
    );
  }
}

ReactDOM.render(<Form />, document.getElementById('app'));
