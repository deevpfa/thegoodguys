import View from "../../../core/view/view";
import html from "./c-view.html";
import "./c-view.scss";
import Utils from "../../../core/utils";

export default class CView extends View {

    constructor() {
        super(html);
        this.clickOnButton()
        this.showNumber()
        this.ToggleStyles()
    }

    async clickOnButton(){
        Utils.onClickById("next", () => {
            this.end('next');
        })
        Utils.onClickById("restarting", () => {
            this.end('restarting');
        })
    }
    async showNumber(number){
        if(number) document.getElementById("number").innerHTML = number
        if(number > 10) {
            document.querySelector(".c-view-container").classList.add("style-2")
        }
    }

    async ToggleStyles(){
        Utils.onClickById("swap", () => {
            document.querySelector(".c-view-container").classList.toggle("style-2")
        })
    }
}