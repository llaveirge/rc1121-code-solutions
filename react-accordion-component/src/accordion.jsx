import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contentId: '' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(topic) {
    const clickedId = topic.id;
    this.state.contentId !== clickedId
      ? this.setState({ contentId: clickedId })
      : this.setState({ contentId: '' });
  }

  render() {
    const menuTopics = this.props.menu.map(curTopic =>
      <li key={curTopic.id}>
        <h2 className={curTopic.id} id={curTopic.content} onClick={() => this.handleClick(curTopic)}>{curTopic.topic}</h2>
        { this.state.contentId === curTopic.id ? <p>{curTopic.content}</p> : '' }
      </li>
    );

    return (
    <div className="container">
      <ul>
        {menuTopics}
      </ul>
    </div>
    );
  }
}

export default Accordion;
