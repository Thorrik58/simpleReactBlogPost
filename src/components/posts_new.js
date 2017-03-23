import React, { Component, PropTypes } from 'react';
import { reduxForm} from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';
import _ from 'lodash';

const FIELDS = {
  title: {
    type: 'input',
    label: 'Title for post'
   },
  categories: {
    type: 'input',
    label: 'Enter some categories for this post'
  },
  content: {
    type: 'textarea',
    label: 'Post contents'
  }
};

class PostsNew extends Component {
  // used when you need a property from a parent component
  // like here we need the router property for pushing in onSubmit
  static contextTypes = {
    router: PropTypes.object
  };

  renderField(fieldConfig, field) {
    const fieldHelper = this.props.fields[field];

    return (
      <div className = {`form-group ${fieldHelper.touched && fieldHelper.invalid ? 'has-danger' : ''}`}>
        <label>{fieldConfig.label}</label>
        <fieldConfig.type type="text" className="form-control" {...fieldHelper}/>
        <div className="text-help">
          {fieldHelper.touched ? fieldHelper.error : ''}
        </div>
      </div>
    );
  }

  onSubmit(props) {
    this.props.createPost(props)
      .then(() => {
        // BlogPost has been created, navigate user to index
        // we navigate by calling this.router.pusth with the new path to
        // navigate to.
        this.context.router.push('/');
      })
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create a new post</h3>
        {_.map(FIELDS, this.renderField.bind(this))}
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(FIELDS, (type, field) => {
    if (!values[field]) {
      errors[field] = `Enter a ${field}`;
    }
  })

  return errors;
}

// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxform : first argument is form config, 2nd is mapStateToProps 3rd is
// mapDispatchToProps

export default reduxForm({
  form: 'PostsNewForm',
  fields: _.keys(FIELDS),
  validate
}, null, { createPost })(PostsNew);
