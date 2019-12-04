import React,
{
  Component,
  PropTypes
} from 'react';

import { Link }  from 'react-router';

import './CatalogCategory.css';

class CatalogCategory extends Component {

  render() {
    let category = this.props.category;

    return (
      <div className="CatalogCategory">
        <div className="name"><Link to={ '/catalog/categories/' + category.url}><img src={category.picture} /></Link></div>

        <div className="description">{category.description}</div>
      </div>
    );
  }
}

CatalogCategory.propTypes = {
   category: PropTypes.shape({
     name: PropTypes.string,
     url: PropTypes.string,
     description: PropTypes.string
   })
};

export default CatalogCategory;
