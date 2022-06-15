import {ReviewObject} from "../ReviewObject.js";
import {LEVEL_CONSTANTS} from "../../../shared/global/LevelConstants.js";
import {InfoText} from "../../../shared/htmlObjects/InfoText.js";

$(function() {


    let codeContainer = $("#code-container")
   // codeContainer.trigger("focus");
    let review1 : ReviewObject = new ReviewObject()
    let tab1 = review1.createTabWithCode(true,    "def cal(num_1, op, num_2):\n" +
        "    return eval(f'{num_1} {op} {num_2}')\n", "python")

    review1.addButton(tab1,"Good!", () => {
        codeContainer.empty()
        codeContainer.append(review1.getHtml())
        codeContainer.append(new InfoText("Wrong answer sorry!",  "Wrong",true).getHtml().html())
        $("html, body").animate({ scrollTop: $(document).height() }, "fast")
    })
    review1.addButton(tab1,"Bad!", () => {
        codeContainer.empty()
        codeContainer.append(review1.getHtml())
        codeContainer.append(review2.getHtml())
        review1.unbindButtons();
        review2.bindButtonsToKeys()})



    codeContainer.append(review1.getHtml())
    review1.bindButtonsToKeys();



    let review2 : ReviewObject = new ReviewObject()
    let rev2Tab1 = review2.createTabWithCode(true, "from decimal import Decimal\n" +
        "\n" +
        "\n" +
        "def cal(num_1, op, num_2):\n" +
        "    num_1 = Decimal(num_1)\n" +
        "    num_2 = Decimal(num_2)\n" +
        "    if op == '+':\n" +
        "        return num_1 + num_2\n" +
        "    if op == '-':\n" +
        "        return num_1 - num_2\n" +
        "    if op == '*':\n" +
        "        return num_1 * num_2\n" +
        "    if op == '/':\n" +
        "        return num_1 / num_2\n","python")

    review2.addButton(rev2Tab1, "Good", () => {
        WA.state.saveVariable(LEVEL_CONSTANTS.LEVEL_1.pythonEvalProblem.variableName, true)

        review2.tabContainer.makeTabActive(rev2Tab1);
        codeContainer.empty()
        codeContainer.append(review1.getHtml())
        codeContainer.append(review2.getHtml())
        codeContainer.append(new InfoText("The employer was told to write a method which gets 2 numbers and one math parameter (+, -, *, /) and return the result.\n" +
            "Know the Problem is that the input is coming from a user input from a web server and his collage didn’t do a good input\n" +
            "validation. If know a user is inputting\n" +
            "\n" +
            "{“num_1”:__import__('os').system('rm -rf *'), “op”:+, “num_2”:1}\n" +
            "\n" +
            "\n" +
            "all the files\n" +
            "would be deleted. The best practices is if you are working with any user input or are not sure from where the input is\n" +
            "coming just don’t use eval(). Even the solution where eval() is restricted can be compromised. The same Problem exists\n" +
            "with the exec() function.", "Explanation",true,"AWESOME!").getHtml().html())
        $("html, body").animate({ scrollTop: $(document).height() }, "fast")
    })




    let rev2Tab2 = review2.createTabWithCode(false,     "def cal(num_1, op, num_2):\n" +
        "    return eval('%s %op %b' % num_1, op, num_2)\n","python")

    review2.addButton(rev2Tab2, "Good", () => {
        codeContainer.empty()
        review2.tabContainer.makeTabActive(rev2Tab2);
        codeContainer.append(review1.getHtml())
        codeContainer.append(review2.getHtml())
        codeContainer.append(new InfoText("Wrong answer sorry!",  "Wrong",true).getHtml().html())
        $("html, body").animate({ scrollTop: $(document).height() }, "fast")
    })


    let rev2Tab3 = review2.createTabWithCode(false, "def cal(num_1, op, num_2):\n" +
        "    return eval(f'{num_1} {op} {num_2}', {'__builtins__': None}, {'a': num_1, 'op': op, 'b': num_2})\n","python")


    review2.addButton(rev2Tab3, "Good", () => {
        codeContainer.empty()
        review2.tabContainer.makeTabActive(rev2Tab3);
        codeContainer.append(review1.getHtml())
        codeContainer.append(review2.getHtml())
        codeContainer.append(new InfoText("Wrong answer sorry!",  "Wrong",true).getHtml().html())
        $("html, body").animate({ scrollTop: $(document).height() }, "fast")
    })
//codeReviewApi.addReviewObjectsToHtmlElement(phase1Element, codeArray)
})