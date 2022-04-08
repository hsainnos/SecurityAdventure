import {HtmlObject} from "./HtmlObject.js";
import {Tab} from "./Tab.js";
import {getUniqueID} from "./HtmlObjectHelper.js";

export class TabContainer implements HtmlObject{

    tabs : Tab[] = []
    id: string = getUniqueID()

    getHtml = (): JQuery => {



        let htmlHeader = $("<ul class='nav nav-tabs'></ul>")
        let htmlContent = $("<div class='tab-content'></div>")

        //alert(this.tabs[0].getHtmlContent().html())

        this.makeTabsValid(true)

        this.tabs.forEach((tab) => {

            htmlHeader.append(tab.getHtmlHeader)
            htmlContent.append(tab.getHtmlContent)

        })

        return $("<div></div>").append(htmlHeader).append(htmlContent)
    };

    addTab = (tab : Tab) => {
        this.tabs.push(tab)
    };

    makeTabsValid = (oneTabMustBeActive : boolean = false) => {
        let tabActiveCounter = 0

        this.tabs.forEach((tab) => {

            if(tab.active){
                tabActiveCounter++

                if(tabActiveCounter > 1){
                    tab.makeTabInactive()
                    tabActiveCounter--
                }
            }
        })
        if( oneTabMustBeActive && tabActiveCounter == 0){
            this.tabs[0].makeTabActive()
        }
    };
}