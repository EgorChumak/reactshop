import React, {
  Component,
  PropTypes
} from 'react';

import { Link }  from 'react-router';

import './Header.css';


class Header extends Component {

  render() {
    let items = this.props.items.map((item) => {
      return (
        <li key={item.url}>
          <Link to={item.url}>{item.name}</Link>
        </li>
        );
    });

    return (
      <nav className="Header">
        <ul>{items}</ul>
      </nav>
    );
  }
}

Header.propTypes = {
  items: PropTypes.array
};

export default Header;
