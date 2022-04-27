import {CheckBox} from "../../shared/htmlObjects/CheckBox.js";
import {LEVEL_CONSTANTS} from "../../shared/global/LevelConstants.js";

$(function() {


    let progressContainer = $("#progress-container")




    WA.onInit().then(() => {


        // @ts-ignore
        //let enumKeys = Object.keys(ProgressVariableNames).map(key => ProgressVariableNames[key])
        //let enumKeys = Object.keys(ProgressVariableNames)

        //alert(ProgressVariableNames.pythonInputValidationProblem)



        for(let problemKey in LEVEL_CONSTANTS.LEVEL_1){

            let levelVariable = LEVEL_CONSTANTS.LEVEL_1[problemKey as keyof typeof LEVEL_CONSTANTS.LEVEL_1]
            if(WA.state.hasVariable(levelVariable.variableName)){
                let boolVar = WA.state.loadVariable(levelVariable.variableName)
                if(boolVar){
                    progressContainer.append("<p>" + levelVariable.displayName + ": " + new CheckBox(true, true).getHtml().html() + "</p>")
                }
                else {
                    progressContainer.append("<p>" + levelVariable.displayName + ": " + new CheckBox(false, true).getHtml().html() + "</p>")
                }
            }
            else{
                progressContainer.append("<p>false</p>")

            }
        }






/* enumKeys.forEach((key) => {





    let value : string = ProgressVariableNames[key as keyof typeof ProgressVariableNames]

    if(WA.state.hasVariable(value)){
        let boolVar = WA.state.loadVariable(value)
        if(boolVar){
            progressContainer.append("<p>" + key + ": " + new CheckBox(true, true).getHtml().html() + "</p>")
        }
        else {
            progressContainer.append("<p>" + key + ": " + new CheckBox(false, true).getHtml().html() + "</p>")
        }
    }
    else{
        progressContainer.append("<p>false</p>")

    }

})*/

       //console.log(WA.state.loadVariable(value.))
       //console.log(WA.state.loadVariable("problem1"))








        //progressContainer.text(text)

        //WA.chat.sendChatMessage("KingKong ist cool", "Mr Ape")
        //WA.chat.sendChatMessage("Hello World", "Mr Robot")

    });
})