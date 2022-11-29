import View from "../../../core/view/view";
import html from "./c-view.html";
import "./c-view.scss";
import Utils from "../../../core/utils";

export default class CView extends View {

    constructor() {
        super(html);
        this.clickOnButton()
    }

    async clickOnButton(){
        Utils.onClickById("next", () => {
            this.end('next');
        })
        Utils.onClickById("restarting", () => {
            this.end('restarting');
        })
    }
}