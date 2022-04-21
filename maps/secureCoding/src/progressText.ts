import {ProgressVariableNames} from "./ProgressVariableNames.js";

$(function() {


    let progressContainer = $("#progress-container")




    WA.onInit().then(() => {


        // @ts-ignore
        //let enumKeys = Object.keys(ProgressVariableNames).map(key => ProgressVariableNames[key])
        let enumKeys = Object.keys(ProgressVariableNames)

        //alert(ProgressVariableNames.pythonInputValidationProblem)


enumKeys.forEach((key) => {



    let value : string = ProgressVariableNames[key as keyof typeof ProgressVariableNames]

    if(WA.state.hasVariable(value)){
        let boolVar = WA.state.loadVariable(value)

        if(boolVar){

            progressContainer.append("<p>" + key + ": " + String(boolVar) + "</p>")
        }
        else {

            progressContainer.append("<p>" + key + ": " + "false" + "</p>")
        }
    }
    else{
        progressContainer.append("<p>false</p>")

    }

})

       //console.log(WA.state.loadVariable(value.))
       //console.log(WA.state.loadVariable("problem1"))








        //progressContainer.text(text)

        //WA.chat.sendChatMessage("KingKong ist cool", "Mr Ape")
        //WA.chat.sendChatMessage("Hello World", "Mr Robot")

    });
})