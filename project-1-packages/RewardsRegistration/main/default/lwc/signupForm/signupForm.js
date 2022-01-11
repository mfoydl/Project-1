import { LightningElement, api } from 'lwc';
import createAccountFromForm from '@salesforce/apex/AccountHandler.createAccountFromForm';

export default class SignupForm extends LightningElement {

    @api errorText;

    stateOptions = [
        {label: "IL", value: 'IL'},
        {label: "IN", value: 'IN'},
        {label: "IA", value: 'IA'},
        {label: "WI", value: 'WI'}
    ];

    contactId;

    @api submitRegistration(){

        let formIsValid = this.validateFormData();

        if(!formIsValid) return;

        let firstName = this.template.querySelector('.firstName');
        let lastName = this.template.querySelector('.lastName');
        let name = `${firstName} ${lastName}`;
        let email = this.template.querySelector('.email');
        let phone = this.template.querySelector('.phoneNumber');
        let birthday = this.template.querySelector('.birthday');

        createAccountFromForm(email, name, birthday, phone)
        .then(()=>{
            console.log('success');
        })
        .catch((error)=>{
            this.errorText = error;
        })

    }

    validateFormData(){

        let fields = this.template.querySelectorAll('lightning-input');
        let allValid = true;

        fields.forEach(field => {
            field.reportValidity();
            if(!field.checkValidity()) allValid = false;
        });

        return allValid;
    }



    get getStateOptions(){
        return this.stateOptions;
    }
}