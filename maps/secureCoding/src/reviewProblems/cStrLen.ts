import {ReviewObject} from "../ReviewObject.js";

$(function() {



    let codeContainer = $("#code-container")
    codeContainer.trigger("focus");
    let review1 : ReviewObject = new ReviewObject()
    let tab1 = review1.createTabWithCode(false,    "#include <stdio.h>"+"\n" +
        "#include <stdio.h>" +
        "    int main() {\n" +
        "\n" +
        "        char text1[]=\"\";\n" +
        "        int secondtolast=strlen(text1)-1;\n" +
        "\n" +
        "        return 0;\n" +
        "}\n", "clike")

    review1.addButton(tab1,"Good!", () => {alert("FALSCH")})
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
        "        char text1[]=\"\";\n"+
        "        int lengthofarray=0;\n"+
        "\n" +
        "        for(int i=0; text1[i]!='\0'; i++){\n" +
        "           lengthofarray++;\n"+
        "        }\n" +
        "        int secondtolast=lengthofarray-2;\n" +
        "\n" +
        "        return 0;"+"\n"+
        "}\n", "clike")

    review2.addButton(rev2Tab1, "Good", () => {alert("FALSCH!")})




    let rev2Tab2 = review2.createTabWithCode(false,     "#include <stdio.h>"+"\n" +
        "#include <string.h>\n" +
        "    int main() {\n"+
        "\n" +
        "        char text1[]=\"\";\n" +
        "        int lengthofarray=0;\n" +
        "\n" +
        "        for(int i=0; text1[i]!='\0'; i++){\n"+
        "           lengthofarray++;\n"+
        "        }\n" +
        "\n" +
        "        int secondtolast=lengthofarray-1;\n" +
        "\n" +
        "        return 0;\n" +
        "}\n","clike")

    review2.addButton(rev2Tab2, "Good", () => {alert("FALSCH!")})




    let rev2Tab3 = review2.createTabWithCode(false, "#include <stdio.h>\n" +
        "#include <string.h>\n" +
        "\n" +
        "    int main() {" +
        "        char text1[]=\"\";\n" +
        "\n" +
        "        if(strlen(text1)>0){\n" +
        "        int secondtolast=strlen(text1)-1;\n" +
        "        }\n" +
        "\n" +
        "        return 0;\n" +
        "}\n","clike")


    review2.addButton(rev2Tab3, "Good", () => {alert("RICHTIG!")})

})
