import React, { Component } from 'react';
import './Todo.css';

export class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.task,
      isEditing: false,
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleRemove(e) {
    this.props.removeTodo(this.props.id);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  toggleForm() {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  }

  handleUpdate(e) {
    e.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({
      isEditing: false,
    });
  }

  handleToggle(e) {
    this.props.toggleTodo(this.props.id);
  }

  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div>
          <form className='Todo-edit-form' onSubmit={this.handleUpdate}>
            <input
              type='text'
              name='task'
              value={this.state.task}
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div>
          <li
            className={this.props.completed ? 'Todo completed' : 'Todo'}
            onClick={this.handleToggle}
          >
            {this.props.task}
          </li>
          <div className='Todo-buttons'>
            <button onClick={this.toggleForm}>
              {' '}
              <i class='fas fa-pen' />
            </button>
            <button onClick={this.handleRemove}>
              <i class='fas fa-trash' />
            </button>
          </div>
        </div>
      );
    }

    return result;
  }
}

export default Todo;
