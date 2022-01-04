import { LightningElement, wire } from 'lwc';
import getFeaturedProducts from '@salesforce/apex/ProductHelper.getFeaturedProducts';

export default class FeaturedItems extends LightningElement {

    @wire (getFeaturedProducts)
    products;

}