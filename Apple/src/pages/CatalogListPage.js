import React,
{
    Component
} from 'react';

import CatalogItemThumb from '../components/CatalogItemThumb/CatalogItemThumb';

import './CatalogListPage.css';

const STATE = require('../State.json');

class CatalogListPage extends Component {
    render() {
        let items = STATE.products.map((item) => {
            return <CatalogItemThumb item={item} key={item._id} />;
        });

        return (
            <div className="CatalogListPage">
               {items}
            </div>
        );
    }
}

CatalogListPage.propTypes = {

};

export default CatalogListPage;
