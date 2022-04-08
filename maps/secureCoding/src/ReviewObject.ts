import {TabContainer} from "../../shared/htmlObjects/TabContainer.js";
import {Tab} from "../../shared/htmlObjects/Tab.js";
import {CodeBox} from "../../shared/htmlObjects/CodeBox.js";
import {Button} from "../../shared/htmlObjects/Button.js";


export class ReviewObject {

    tabContainer = new TabContainer()
    tabCount = 1


    addButton(tab : Tab, name: string, onClick: () => void) {
        let button = new Button(name, onClick)
        tab.addTabContent("button", button)
    }

    createTabWithCode(active: boolean, code: string, language: string = "javascript") : Tab {

        let tab = new Tab("Tab " + this.tabCount++)
        let codeBox = new CodeBox(code, language)
        tab.addTabContent("codeBox", codeBox)

        if (active) {
            tab.makeTabActive()
        }
        this.tabContainer.addTab(tab)

        return tab
    }


    getHtml(): JQuery {
        return this.tabContainer.getHtml()
    }


}