import { LightningElement, wire, api } from 'lwc';
import TEMP_IMAGE from '@salesforce/resourceUrl/placeHolderImage';
import getFeaturedProducts from '@salesforce/apex/ProductHelper.getFeaturedProducts';

export default class FeaturedItems extends LightningElement {

    @wire (getFeaturedProducts)
    products;

    @api imageURL = TEMP_IMAGE;
}