import View from "../../../core/view/view";
import html from "./a-view.html";
import "./a-view.scss";
import Utils from "../../../core/utils";

export default class AView extends View {

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