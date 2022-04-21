import {ReviewObject} from "../ReviewObject.js";
import {ProgressVariableNames} from "../ProgressVariableNames.js";

$(function() {


    let codeContainer = $("#code-container")
    codeContainer.trigger("focus");
    let review1 : ReviewObject = new ReviewObject()
    let tab1 = review1.createTabWithCode(true,    "#include <stdio.h>\n" +
        "\n" +
        "    int main() {\n" +
        "\n" +
        "        printf(\"Please enter your values:\\n\");\n" +
        "        char[] array 10]\n" +
        "        fgets(array, 10, stdin);\n" +
        "        printf(\"Content of array is %s\\n\", array);\n" +
        "\n" +
        "        return 0;\n" +
        "}\n", "clike")

    review1.addButton(tab1,"Good!", () => {alert("RICHTIG!!")
    WA.state.saveVariable(ProgressVariableNames.cPrintProblem, true)})
    review1.addButton(tab1,"Bad!", () => {alert("FALSCH!!")})



    codeContainer.append(review1.getHtml())
    review1.bindButtonsToKeys();



})
