import View from "../../../core/view/view";
import html from "./d-view.html";
import "./d-view.scss";
import Utils from "../../../core/utils";

export default class DView extends View {

    constructor() {
        super(html);
        this.clickOnButton()
    }

    async clickOnButton(){
        Utils.onClickById("back", () => {
            this.end('back');
        })
    }
}