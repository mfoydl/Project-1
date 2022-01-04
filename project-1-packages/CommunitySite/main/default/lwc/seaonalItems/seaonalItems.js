import { LightningElement, track, wire } from 'lwc';
import getSeasonalProducts from '@salesforce/apex/ProductHelper.getSeasonalProductIds';

export default class SeaonalItems extends LightningElement {

    @wire(getSeasonalProducts) 
    products;

    rendered(){
        console.log(products.data);
    }
}