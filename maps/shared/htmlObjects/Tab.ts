import {HtmlObject} from "./HtmlObject.js";
import {getUniqueID} from "./HtmlObjectHelper.js";

export class Tab {

    self = this
    id: string = getUniqueID()
    tabName: string
    active: boolean = false
    tabContents: { identifier: string, element: HtmlObject }[] = []


    constructor(tabName: string) {
        this.tabName = tabName
    }


    makeTabActive = () => {
        this.active = true
    };

    makeTabInactive = () => {
        this.active = false
    };

    makeTabDomElementInactive = () => {
        this.makeTabInactive()
        $("#tab" +this.id).removeClass("active")
        $("#tabHeader" +this.id).removeClass("active")
    };

    makeTabDomElementActive = () => {
        this.makeTabActive()
        $("#tab" +this.id).addClass("active")
        $("#tabHeader" +this.id).addClass("active")
    };

    addTabContent = (identifier: string, element: HtmlObject) => {
        this.tabContents.push({identifier: identifier, element: element})
    };

    removeTabContentByElement = (element: HtmlObject) => {
        this.tabContents.filter((tabContent) => {
            return tabContent.element.id != element.id
        })
    };

    getTabContentsByIdentifier = (identifier: string): HtmlObject[] => {
        return this.tabContents.filter((tabContent) => {
            return tabContent.identifier == identifier
        }).map((tabContent) => {
            return tabContent.element
        })
    };

    getHtmlContent = (): JQuery => {
        let htmlContent: JQuery

        if (this.active) {
            htmlContent = $("<div  class='tab-pane active' id='tab" + this.id + "'></div>")
        } else {
            htmlContent = $("<div  class='tab-pane' id='tab" + this.id + "'></div>")
        }


        this.tabContents.forEach((tabContent) => {
            htmlContent.append(tabContent.element.getHtml())
        })
        return htmlContent

    };


    getHtmlHeader = (): JQuery => {
        let htmlHeader: JQuery

        if (this.active) {
            htmlHeader = $("<li class='active'>" + "<a href='#tab" + this.id + "'  data-toggle='tab'>" + this.tabName + "</a></li>")
        } else {
            htmlHeader = $("<li>" + "<a href='#tab" + this.id + "' data-toggle='tab'>" + this.tabName + "</a></li>")
        }
        htmlHeader.attr('id', "tabHeader" + this.id);
        return htmlHeader
    };

}