import TextView from "./view/text-view/text-view";
import AView from "./view/a-view/a-view";
import BView from "./view/b-view/b-view";
import CView from "./view/c-view/c-view";
import DView from "./view/d-view/d-view";

export default class App {

    constructor() {

    }


    async start(){
        var aView = new AView();
        await aView.start();
        
        
        var bView = new BView();
        await bView.start();


        var cView = new CView();
        await cView.start();


        var dView = new DView();
        await dView.start();
    }
}