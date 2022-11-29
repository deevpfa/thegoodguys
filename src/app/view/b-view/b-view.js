import View from "../../../core/view/view";
import html from "./b-view.html";
import "./b-view.scss";
import Utils from "../../../core/utils";

export default class BView extends View {

    constructor() {
        super(html);
        this.clickOnButton()
        this.showNumber()
    }

    async clickOnButton(){
        Utils.onClickById("next", () => {
            let numberPlusFive = parseInt(document.getElementById("number").innerHTML) + 5
            this.end(numberPlusFive);
        })
    }

    async showNumber(number){
        if(number) document.getElementById("number").innerHTML = number
    }
}