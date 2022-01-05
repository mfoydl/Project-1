import { LightningElement} from 'lwc';

export default class MenuPage extends LightningElement {
    
    selectedItem;

    handleSelect(event){
        this.selectedItem = event.detail.name;
    }

    get isCoffeeTab(){
        return this.selectedItem == "coffee";
    }

    get isSandwichTab(){
        return this.selectedItem == "sandwiches";
    }

    get isSnackTab(){
        return this.selectedItem == "snacks";
    }

    get isSweetsTab(){
        return this.selectedItem == "sweets";
    }
}