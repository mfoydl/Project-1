import { LightningElement, api } from 'lwc';

export default class SignupModal extends LightningElement {
    @api openModal = false;
    @api successful = false;

    showModal(){
        this.openModal = true;
    }

    closeModal(){
        this.openModal = false;
        this.successful = false;
    }

    submit(event){
        console.log('submitted!');
        
        let signupForm = this.template.querySelector('c-signup-form');

        signupForm.submitRegistration();
    }
}