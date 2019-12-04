import React,
{
  Component,
  PropTypes
} from 'react';

import { Link }  from 'react-router';
const STATE = require('../../State.json');
import './CatalogItemThumb.css';

class CatalogItemThumb extends Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    let id = this.props.item._id;
    let addedItem = STATE.cart.find(item => item._id === id);

    if (addedItem) {
      addedItem.quantity = addedItem.quantity + 1;
    } else {
      STATE.cart.push({
        _id: id,
        quantity: 1
      });
    }
  }
  render() {
    let item = this.props.item;

    return (
      <div className="CatalogItemThumb">
        <div className="name">
          <Link to={'/catalog/' + item._id}>{item.name}</Link>
        </div>

          <Link to={'/catalog/' + item._id}>  <img className="picture" src={item.picture} alt={item.name} /></Link>
            <div className="description">{item.specification}<Link to={'/catalog/' + item._id}> Подробнее</Link></div>
            <div className="price">От {item.price}$</div>
            <button className="add-to-cart" onClick={this.addToCart}>
            От {item.price}
            <p>В корзину</p>
            </button>

      </div>
    );
  }
}

CatalogItemThumb.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string,
    index: PropTypes.number,
    isActive: PropTypes.bool,
    name: PropTypes.string,
    description: PropTypes.string,
    specification: PropTypes.string,
    price: PropTypes.number,
    picture: PropTypes.string
  })
};

export default CatalogItemThumb;
