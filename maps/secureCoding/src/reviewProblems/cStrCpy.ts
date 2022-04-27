import {ReviewObject} from "../ReviewObject.js";
import {LEVEL_CONSTANTS} from "../../../shared/global/LevelConstants.js";

$(function() {



    let codeContainer = $("#code-container")
    codeContainer.trigger("focus");
    let review1 : ReviewObject = new ReviewObject()
    let tab1 = review1.createTabWithCode(false,    "#include <stdio.h>"+"\n" +
        "#include <string.h>\n" +
        "    int main() {"+ "\n" +
        "\n" +
        "        char text1[3]=\"TUX\";\n" +
        "        char text2[5]=\"PUFFY\";\n" +
        "        strcpy(text1,text2);\n" +
        "\n" +
        "        return 0;\n" +
        "}\n", "clike")

    review1.addButton(tab1,"Good!", () => {alert("Die Antwort ist leider falsch!")})
    review1.addButton(tab1,"Bad!", () => {codeContainer.append(review2.getHtml())
        review1.unbindButtons();
        review2.bindButtonsToKeys()})



    codeContainer.append(review1.getHtml())
    review1.bindButtonsToKeys();


//Teil 2




    let review2 : ReviewObject = new ReviewObject()
    let rev2Tab1 = review2.createTabWithCode(false,     "#include <stdio.h>"+"\n" +
        "#include <string.h>\n" +
        "\n" +
        "    int main() {"+"\n" +
        "        char text1[3]=\"TUX\";\n"+
        "        char text2[5]=\"PUFFY\";\n"+
        "        strncpy(text1,text2,5);\n"+
        "\n"+
        "        return 0;\n"+
        "}\n", "clike")

    review2.addButton(rev2Tab1, "Good", () => {alert("FALSCH!")})




    let rev2Tab2 = review2.createTabWithCode(false,     "#include <stdio.h>"+"\n" +
        "#include <string.h>\n" +
        "    int main() {\n" +
        "\n" +
        "        char text1[3]=\"TUX\";\n" +
        "        char text2[5]=\"PUFFY\";\n" +
        "        int sizeoftext1=0;\n"+
        "        int sizeoftext2=0;\n"+
        "\n" +
        "        sizeoftext1=sizeof(text1)/(sizeof(text1[0]);\n" +
        "        sizeoftext2=sizeof(text2)/(sizeof(text2[0]);\n"+
        "\n" +
        "        strcpy(text1,text2);" +
        "\n"+
        "        return 0;\n" +
        "\n" +
        "}\n","clike")

    review2.addButton(rev2Tab2, "Good", () => {alert("FALSCH!")})




    let rev2Tab3 = review2.createTabWithCode(false, "#include <stdio.h>\n" +
        "#include <string.h>\n" +
        "\n" +
        "    int main() {" +
        "\n" +
        "        char text1[3]=\"TUX\";\n" +
        "        char text2[5]=\"PUFFY\";\n" +
        "        int sizeoftext1=sizeof(text1)/(sizeof(text1[0]);\n" +
        "        int sizeoftext2=sizeof(text2)/(sizeof(text2[0]);\n" +
        "\n" +
        "        if(sizeoftext1>=sizeoftext2){\n" +
        "        strncpy(text1,text2,5);\n" +
        "\n" +
        "}\n","clike")


    review2.addButton(rev2Tab3, "Good", () => {alert("RICHTIG!")
        WA.state.saveVariable(LEVEL_CONSTANTS.LEVEL_1.cStrCpyProblem.variableName, true)})

})
