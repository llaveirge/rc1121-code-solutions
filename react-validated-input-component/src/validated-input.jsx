import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '', error: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setIconClass() {
    let iconClass = 'hidden';
    const error = this.state.error;
    if (error === 'No error') {
      iconClass = 'fas fa-check fa-lg';
    } else if (error === 'A password is required.' ||
    error === 'Your password is too short.') {
      iconClass = 'fas fa-times fa-lg';
    }
    return iconClass;
  }

  handleChange(event) {
    this.passwordInput = event.target.value;
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    if (!this.passwordInput) {
      this.setState({ error: 'A password is required.' });
    } else if (this.passwordInput.length < 8) {
      this.setState({ error: 'Your password is too short.' });
    } else {
      this.setState({ error: 'No error' });
    }
    event.preventDefault();
  }

  render() {
    return (
      <form id="form" onSubmit={this.handleSubmit}>
        <label>
          Password
          <br />
          <input type='password' name='password' value={this.state.password}
          onChange={this.handleChange} />
        </label>
        <i className={this.setIconClass()}></i>
        <p className='error'>{this.state.error === 'No error'
          ? ''
          : this.state.error}</p>
      </form>
    );
  }
}

export default ValidatedInput;
