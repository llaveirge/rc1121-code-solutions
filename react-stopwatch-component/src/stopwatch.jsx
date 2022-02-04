import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isTicking: false, time: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  startWatch() {
    this.setState({ time: this.state.time + 1 });
  }

  handleClick() {
    if (!this.state.isTicking) {
      this.setState({ isTicking: true });
      this.watchId = setInterval(() => this.startWatch(), 1000);
    } else {
      this.setState({ isTicking: false });
      clearInterval(this.watchId);
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='watch'>
          <h1 className='time'>{this.state.time}</h1>
        </div>
        <div className='button'>
          <i onClick={this.handleClick} className={this.state.isTicking ? 'fas fa-pause fa-3x' : 'fas fa-play fa-3x'}></i>
        </div>
      </div>
    );
  }

}

export default Stopwatch;
