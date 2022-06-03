import {elevator} from "../../shared/elevator/elevator.js"
import {TextFilesGerman} from "../../shared/TextFiles/TextFilesGerman.js";
import {TextFilesEnglish} from "../../shared/TextFiles/TextFilesEnglish.js";
import "./augh.ogg"

let TextFiles: any = TextFilesGerman;
let currentItem: any = undefined;
let currentTriggerMessage: any = undefined;

let quest_1: boolean = false;
let quest_2: boolean = false;
let quest_3: boolean = false;

WA.room.hideLayer("Paper_Highlight");
WA.room.hideLayer("Kylo_Highlight");

WA.room.onEnterLayer("Paper_Highlight_Zone").subscribe(() => {
    WA.room.showLayer("Paper_Highlight");
});

WA.room.onEnterLayer("Paper_Dehighlight_Zone").subscribe(() => {
    WA.room.hideLayer("Paper_Highlight");
});

WA.room.onEnterLayer("Kylo_Highlight_Zone").subscribe(() => {
    WA.room.showLayer("Kylo_Highlight");
});

WA.room.onEnterLayer("Kylo_Dehighlight_Zone").subscribe(() => {
    WA.room.hideLayer("Kylo_Highlight");
});

WA.room.onEnterLayer("F1_Notebook").subscribe( () => {
    currentTriggerMessage = WA.ui.openPopup("popUp_1_notebook", TextFiles.f1_notebook, []);
    const mySound = WA.sound.loadSound("./augh.ogg")
    const config = {
        volume : 0.5,
        loop : false,
        rate : 1,
        detune : 1,
        delay : 0,
        seek : 0,
        mute : false
    }
    mySound.play(config);
});

WA.room.onLeaveLayer("F1_Notebook").subscribe(() => {
    closeTriggerMessage()
});



elevator.setCurrentLevel("Level1.json");
elevator.setMaxLevelAvailable(2);

function closeTriggerMessage() {
    if (currentTriggerMessage !== undefined) {
        currentTriggerMessage.close();
        currentTriggerMessage = undefined;
    }
}

