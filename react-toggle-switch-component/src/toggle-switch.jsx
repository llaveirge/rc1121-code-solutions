import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isOn: !this.state.isOn });
  }

  render() {
    return (
      <div className='container'>
        <div className={`toggle-container ${this.state.isOn ? 'on' : 'off'}`} onClick={this.handleClick} >
          <div className='switch'></div>
        </div>
        <p>{this.state.isOn ? 'ON' : 'OFF'}</p>
      </div>
    );
  }
}

export default ToggleSwitch;
