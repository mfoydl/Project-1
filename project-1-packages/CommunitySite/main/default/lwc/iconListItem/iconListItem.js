import { LightningElement,api } from 'lwc';

export default class IconListItem extends LightningElement {
    @api icon;
    @api text;
}