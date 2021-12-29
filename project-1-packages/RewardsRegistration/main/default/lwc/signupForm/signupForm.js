import { LightningElement, api } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import ADDRESS_FIELD from '@salesforce/schema/Account.BillingAddress';
import BIRTHDATE_FIELD from '@salesforce/schema/Contact.Birthdate';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';


export default class SignupForm extends LightningElement {

    nameField = NAME_FIELD;
    addressField = ADDRESS_FIELD;
    birthdateField = BIRTHDATE_FIELD;
    emailField = EMAIL_FIELD;

    stateOptions = [
        {label: "IL", value: 'IL'},
        {label: "IN", value: 'IN'},
        {label: "IA", value: 'IA'},
        {label: "WI", value: 'WI'}
    ];

    contactId;

    @api startSubmit(){
        let submitter = this.template.querySelector('.AccountForm lightning-button');
        //this.validateFormData();
        //submitter.click();
    }

    @api handleSubmit(event){
        event.preventDefault();

        //let accountForm = this.template.querySelector('.AccountForm');
        //console.log(accountForm);
        console.log(event.detail);
        //accountForm.submit(accountForm.fields);

    }

    handleAccountSuccess(event){
        console.log('success: ', JSON.stringify(event.detail));
        //submit
    }

    get getStateOptions(){
        return this.stateOptions;
    }

    validateFormData(){
        let AccountForm = this.template.querySelector('.AccountForm');
        let contactForm = this.template.querySelector('.ContactForm');

        let namePattern = /[a-z,A-Z]*\s[a-z,A-Z]*/;
        let emailPattern = /./;
        let birthdatePattern = /\d{1,2}\/\d{1,2}\/(\d{2}|\d{4})/;
        let zipPattern = /\n{5}/;

        let nameField = this.template.querySelector('.AccountForm .name-field');
        let billingField = this.template.querySelector('.AccountForm .billing-field');

        let nameValue = this.template.querySelector('.AccountForm .name-field input[name=Name]');
        let streetValue = this.template.querySelector('.AccountForm .billing-field textarea[name=street]');

        console.log(nameField);
        console.log(billingField);
        console.log(nameValue);
        console.log(streetValue);
    }
}