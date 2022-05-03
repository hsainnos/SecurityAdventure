import {elevator} from "../../shared/elevator/elevator.js"
import {TextFilesGerman} from "../../shared/TextFiles/TextFilesGerman.js";
import {TextFilesEnglish} from "../../shared/TextFiles/TextFilesEnglish.js";

let TextFiles: any = TextFilesGerman;
let currentItem: any = undefined;
let currentTriggerMessage: any = undefined;

let quest_1: boolean = false;
let quest_2: boolean = false;
let quest_3: boolean = false;

elevator.setCurrentLevel("Level1.json");
elevator.setMaxLevelAvailable(2);

