import AView from "./view/a-view/a-view";
import BView from "./view/b-view/b-view";
import CView from "./view/c-view/c-view";
import DView from "./view/d-view/d-view";

let decision

export default class App {


    constructor() {

    }

    async start(){
        if(!this.decision) {
            var aView = new AView();
            await aView.start();
        }
        
        var bView = new BView();
        if(aView) aView._callbackPromise.promise.then((data) => bView.showNumber(data))
        else bView.showNumber(this.decision)
        await bView.start();


        var cView = new CView();
        if(bView) bView._callbackPromise.promise.then((data) => cView.showNumber(data))
        await cView.start();

        
        await cView._callbackPromise.promise.then((data) => this.decision = data)
        
        if(this.decision === 'next'){

            var dView = new DView();

            await dView.start();

            await dView._callbackPromise.promise.then((data) => this.decision = data)

            if(this.decision){
                this.start()
            }

        } else {
            this.decision = null
            return this.start()
        }
    }
}