import View from "../../../core/view/view";
import html from "./d-view.html";
import "./d-view.scss";
import Utils from "../../../core/utils";

export default class DView extends View {

    constructor() {
        super(html);
        this.backButton()
        this.button5orClick()
        this.buttonThreeAndClick()
    }

    async backButton() {
        Utils.onClickById("back", () => {
            this.end(8);
        })
    }

    waitForClick() {
        return new Promise((resolve) => {
            Utils.onClickById("click", () => {
                resolve();
            })
        })
    }

    waitFor5() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 5000)
        })
    }

    button5orClick() {
        Utils.onClickById("fiveOrClick", () => {
            Promise.any([this.waitForClick(), this.waitFor5()]).then(() => alert('5 o click'));
        })
    }

    waitFor3(){
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 3000)
        })
    }

    buttonThreeAndClick(){
        Utils.onClickById("threeAndClick", () => {
            Promise.all([this.waitFor3(),this.waitForClick()]).then(() => alert('3 y click'));
        })
    }


}