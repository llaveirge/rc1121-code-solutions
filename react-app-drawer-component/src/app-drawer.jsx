import React from 'react';

const menu = [
  { item: 1, title: 'Characters' },
  { item: 2, title: 'Locations' },
  { item: 3, title: 'Creatures' },
  { item: 4, title: 'Armory' },
  { item: 5, title: 'Skills and Abilities' },
  { item: 6, title: 'Expansions' }
];

const menuElement = (
  <ul className='menu'>
    {menu.map(menuItem => {
      return (
      <li className = 'option' key={menuItem.item}>
        <a href='#'>{menuItem.title}</a>
      </li>
      );
    })
    }
  </ul>
);

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modal: false };
    this.handleIconClick = this.handleIconClick.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this);
  }

  handleIconClick() {
    this.modalContClass = 'on-screen';
    this.setState({ modal: true });

  }

  handleModalClick(event) {
    this.modalContClass = null;
    this.setState({ modal: false });

  }

  render() {
    return (
      <div>
        <div>
          <a href='#'>
            <i className='fas fa-bars fa-2x' onClick={this.handleIconClick}></i>
          </a>
        </div>
        <div id='modal' className= {`modal ${!this.state.modal ? 'closed' : 'open'}`} onClick={this.handleModalClick}>
          <div id='box' className={`modal-content-container ${this.modalContClass}`}>
            <h2>Explore Skyrim</h2>
            {menuElement}
          </div>
        </div>
      </div>
    );
  }

}

export default AppDrawer;
