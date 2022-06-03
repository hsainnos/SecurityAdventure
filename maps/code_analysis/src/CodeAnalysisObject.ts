import {CodeBox} from "../../shared/htmlObjects/CodeBox.js";
import {HtmlObject} from "../../shared/htmlObjects/HtmlObject.js";
import {getUniqueID} from "../../shared/htmlObjects/HtmlObjectHelper.js";
import {InfoText} from "../../shared/htmlObjects/InfoText.js";
import {Console} from "../../shared/htmlObjects/Console.js";
import {Button} from "../../shared/htmlObjects/Button.js";

export class CodeAnalysisObject implements HtmlObject {

    id: string = getUniqueID();
    answers: { answer: string, isRight: boolean }[];
    console: Console;
    codeBox: CodeBox;
    rightText: InfoText;
    buttonArray: Button[] = [];


    createProblem(codeContainer: JQuery, language: string, code: string, consoleOutput: string, answers: { answer: string, isRight: boolean, }[], rightText: string) {


        // this.codeBox = new CodeBox(code,language);


        this.codeBox = new CodeBox(code, language);
        this.answers = answers;
        this.rightText = new InfoText(rightText, "Info", true);
        this.console = new Console("abc-command", consoleOutput);

        //let consoleDiv = $("<div></div>").addClass("console");
        //let outputDiv = $("<div></div>").addClass("output");


        answers.forEach((answer) => {
            let buttonFun = () => {
                codeContainer.empty();
                codeContainer.append(this.getHtml());
            };

            if (answer.isRight) {
                buttonFun = () => {
                    codeContainer.empty();
                    codeContainer.append(this.getHtml());
                    codeContainer.append(this.rightText.getHtml().addClass("console-text"));
                    $("html, body").animate({ scrollTop: $(document).height() }, "fast");
                }
            }


            this.buttonArray.push(new Button(answer.answer, buttonFun))
        })


    }


    getHtml(): JQuery {
        let buttonHtml = $("<div></div>")
        this.buttonArray.forEach((button) => {
            buttonHtml.append(button.getHtml().addClass("m-4"))
        });


        return $("<div></div>").append(this.codeBox.getHtml().addClass("console-text").append($("<hr/>")).append(this.console.getHtml()).append($("<hr/>")).append(buttonHtml));
    }


}