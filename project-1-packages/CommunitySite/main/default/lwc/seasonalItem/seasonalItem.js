import { LightningElement, wire, api } from 'lwc';
import { getRecord } from "lightning/uiRecordApi";

import PRODUCT_NAME_FIELD from "@salesforce/schema/Product2.Name";
import PRODUCT_DESCRIPTION_FIELD from "@salesforce/schema/Product2.Description";


export default class SeasonalItem extends LightningElement {

    @api recordId;

    @api image = 'https://static.parade.com/wp-content/uploads/2018/12/free-christmas-coffee-ftr.jpg';

    @wire(getRecord, {recordId: "$recordId", fields: [PRODUCT_NAME_FIELD, PRODUCT_DESCRIPTION_FIELD]})
    product;

    get description(){
        return this.product.data.fields.Description.value;
    }

    get name(){
        return this.product.data.fields.Name.value;
    }
}