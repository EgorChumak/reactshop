
import React, {  Component,  PropTypes} from 'react';
import { Link }  from 'react-router';


const STATE = require('../../State.json');

import './CatalogItem.css';


class CatalogItem extends Component {

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
    let picture = 'http://placehold.it/650x450';

    return (
      <div className="CatalogItem">



        <img className="picture" src={item.picture} alt={item.name}/>



        <div className="description">{item.description}</div>


        <button className="add-to-cart" onClick={this.addToCart}>
        От {item.price}
        <p>В корзину</p>
        </button>

      </div>
    );
  }
}

CatalogItem.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string,
    index: PropTypes.number,
    isActive: PropTypes.bool,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    picture: PropTypes.string
  })
};

export default CatalogItem;
