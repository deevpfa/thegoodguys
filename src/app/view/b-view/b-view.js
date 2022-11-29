import View from "../../../core/view/view";
import html from "./b-view.html";
import "./b-view.scss";
import Utils from "../../../core/utils";

export default class BView extends View {

    constructor() {
        super(html);
        this.clickOnButton()
    }

    async clickOnButton(){
        Utils.onClickById("next", () => {
            this.end();
        })
    }
}