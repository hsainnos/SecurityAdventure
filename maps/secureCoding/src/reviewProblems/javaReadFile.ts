import {ReviewObject} from "../ReviewObject.js";

$(function() {


    let codeContainer = $("#code-container")
    codeContainer.focus()
    let review1 : ReviewObject = new ReviewObject()
    let tab1 = review1.createTabWithCode(true,    "import java.io.File;\n" +
        "import java.io.FileNotFoundException;\n" +
        "import java.util.Arrays;\n" +
        "import java.util.Scanner;\n" +
        "\n" +
        "public class ReadFile {\n" +
        "\n" +
        "       public static void main(String[] args) throws FileNotFoundException {\n" +
        "        String file = \"/home/jeff/Documents/document.txt;/\"\n" +
        "        Scanner content=new Scanner(new File(file));\n" +
        "\n" +
        "        while (content.hasNextLine()){\n" +
        "            String line=content.nextLine();\n" +
        "            System.out.println(line);\n" +
        "        }\n" +
        "    }\n"+
        "}\n", "java")

    review1.addButton(tab1,"Good!", () => {alert("RICHTIG!!")})
    review1.addButton(tab1,"Bad!", () => {alert("FALSCH!!")})



    codeContainer.append(review1.getHtml())
    review1.bindButtonsToKeys();



})
