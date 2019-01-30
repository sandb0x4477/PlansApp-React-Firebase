import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createProject } from '../../store/actions/projectActions';

class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProject(this.state);
  };

  render() {
    return (
      <div className='container'>
        <form className='white' onSubmit={this.handleSubmit}>
          <h5 className='grey-text text darken-3'>Create New Project</h5>
          <br />
          <div className='input-field'>
            <label htmlFor='title'>Title</label>
            <input type='text' id='title' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <label htmlFor='content'>Content</label>
            <textarea
              className='materialize-textarea'
              id='content'
              onChange={this.handleChange}
            />
          </div>
          <div className='input-field'>
            <button className='btn pink lighten-1'>Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispachToProps = dispach => {
  return {
    createProject: project => dispach(createProject(project))
  };
};

export default connect(
  null,
  mapDispachToProps
)(CreateProject);
