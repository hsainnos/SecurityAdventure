import {CodeAnalysisObject} from "../CodeAnalysisObject.js";
import {LEVEL_CONSTANTS} from "../../../shared/global/LevelConstants.js";

$(function() {

    let codeContainer = $("#code-container")

    let codeAnalysisObject = new CodeAnalysisObject();

    codeAnalysisObject.createProblem(codeContainer,LEVEL_CONSTANTS.LEVEL_2.pythonAssert.variableName,"python","assert (2+2==6, \"2+2 is 6!\")","Issue: [B101:assert_used] Use of assert detected. The enclosed code will be removed when compiling to optimised byte code.\n" +
        "   Severity: Low   Confidence: High\n" +
        "   Location: assert.py:1:0\n",[{answer : "risk of malicious code execution", isRight: false},{answer : "risk of data stealing", isRight: false},{answer : "risk of running unchecked statements", isRight: true},{answer : "risk of buffer overflow", isRight: false}],"Assert is used as a function for debug reasons that is always true. This makes it pretty dangerous. Statements such as\n" +
        "\n" +
        "assert (2+2==6, \"2+2 is 6!\")\n" +
        "\n" +
        "\n" +
        "are always true. In this trivial example this is not servere but in other usecases it can. There ist the risk of running unchecked statements.")


    codeContainer.append(codeAnalysisObject.getHtml());

})