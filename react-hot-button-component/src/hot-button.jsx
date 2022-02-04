import React from 'react';
class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numberOfClicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  countClicks() {
    const clickCount = this.state.numberOfClicks;
    let buttonClass = 'click-0';

    if (clickCount <= 2) {
      buttonClass = 'click-0';
    } else if (clickCount < 6) {
      buttonClass = 'click-3';
    } else if (clickCount < 9) {
      buttonClass = 'click-6';
    } else if (clickCount < 12) {
      buttonClass = 'click-9';
    } else if (clickCount < 15) {
      buttonClass = 'click-12';
    } else if (clickCount < 18) {
      buttonClass = 'click-15';
    } else {
      buttonClass = 'click-18';
    }
    return buttonClass;
  }

  handleClick() {
    this.setState({ numberOfClicks: this.state.numberOfClicks + 1 });
  }

  render() {
    return <button className={`button ${this.countClicks()}`} onClick={this.handleClick}>Hot Button</button>;
  }
}

export default HotButton;
