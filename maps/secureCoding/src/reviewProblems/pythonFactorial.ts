import {ReviewObject} from "../ReviewObject.js";
import {LEVEL_CONSTANTS} from "../../../shared/global/LevelConstants.js";
import {InfoText} from "../../../shared/htmlObjects/InfoText.js";

$(function() {


    let codeContainer = $("#code-container")
    //codeContainer.trigger("focus");
    let review1 : ReviewObject = new ReviewObject()
    let tab1 = review1.createTabWithCode(true,    "import math\n" +
        "\n" +
        "\n" +
        "def factorial(num):\n" +
        "    try:\n" +
        "        result = math.factorial(num)\n" +
        "        return result\n" +
        "    except ValueError:\n" +
        "        print(\"bad input\")\n")

    review1.addButton(tab1,"Good!", () => {
        WA.state.saveVariable(LEVEL_CONSTANTS.LEVEL_1.pythonFactorialProblem.variableName, true)

        codeContainer.empty()
        codeContainer.append(review1.getHtml())
        codeContainer.append(new InfoText("RichtigRichtigRichtigRichtigRichtigRichtigRichtigRichtigRichtigRichtigRichtigRichtigRichtigRichtigRichtigRichtigRichtigRichtigRichtigRichtigRichtigRichtigRichtig", "Explanation",true).getHtml().html())
    })
    review1.addButton(tab1,"Bad!", () => {alert("FALSCH!!")})



    codeContainer.append(review1.getHtml())
    review1.bindButtonsToKeys();

})