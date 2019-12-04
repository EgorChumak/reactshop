import React,
{
    Component
} from 'react';

import CatalogCategory from '../components/CatalogCategory/CatalogCategory';

const STATE = require('../State.json');
const productsCategories = STATE.productsCategories;

class CatalogListIndexPage extends Component {

   componentWillMount() {
       this.productsCategories = productsCategories.map((category) => {
           return <CatalogCategory category={category} key={category.url} />;
       });
   }

    render() {
        return (
            <div className="CatalogListIndexPage">
                <h3>Категории товаров</h3>
                {this.productsCategories}
            </div>
        );
    }
}

CatalogListIndexPage.propTypes = {

};

export default CatalogListIndexPage;
