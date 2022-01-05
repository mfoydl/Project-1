import { LightningElement, api, wire } from 'lwc';
import getProductsByType from '@salesforce/apex/ProductHelper.getProductsByType';

export default class MenuList extends LightningElement {
    @api type;

    @wire(getProductsByType,{type: "$type"})
    products;

    constructor(){
        super();
        //this.getProducts();
    }
    /*
    getProducts(){
        getProductsByType({type: this.type})
            .then((result) => {
                console.log(result.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }
    */
}
