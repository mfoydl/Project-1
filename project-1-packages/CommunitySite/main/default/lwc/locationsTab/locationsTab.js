import { LightningElement, wire, api } from 'lwc';
import { getRecord } from "lightning/uiRecordApi";

import LOCATION_ADDRESS_ID_FIELD from "@salesforce/schema/Location.VisitorAddressId";
import ADDRESS_ADDRESS_FIELD from "@salesforce/schema/Address.Address"


export default class LocationsTab extends LightningElement {

    @api linkURL;
    @api imageURL;

    @api locationId;
    @api addressId;

    @wire(getRecord, { recordId: "$locationId", fields: [LOCATION_ADDRESS_ID_FIELD] })
    getLocationId({ error, data }) {
        if (data) {
          this.addressId = data.fields.addressId.value;
        } else if (error) {
          console.log(error);
        }
      }

    @wire(getRecord, {recordId: "$addressId", fields: [ADDRESS_ADDRESS_FIELD]})
    setLocationData(){
        this.linkURL = `https://www.google.com/maps/dir//Albany,+NY/`;

        this.imageURL = "https://maps.googleapis.com/maps/api/staticmap?center=Albany,+NY&zoom=13&scale=1&size=600x300&maptype=roadmap&format=png&visual_refresh=true"
    }

}