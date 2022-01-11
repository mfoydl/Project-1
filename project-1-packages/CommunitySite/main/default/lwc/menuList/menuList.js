import { LightningElement, api, wire } from 'lwc';
import getProductsByType from '@salesforce/apex/ProductHelper.getProductsByType';

export default class MenuList extends LightningElement {
    @api type;
    @api imagePath = 'https://static.parade.com/wp-content/uploads/2018/12/free-christmas-coffee-ftr.jpg';

    @wire(getProductsByType,{type: "$type"})
    products;

}
