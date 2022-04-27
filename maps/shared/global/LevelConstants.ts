class LevelVariable{

    variableName : string;
    displayName : string;

    constructor(variableName : string, displayName : string) {
        this.variableName = variableName;
        this.displayName = displayName;
    }

}



const LEVEL_1 = {"cPrintProblem" : new LevelVariable("problem1", "C-Print"),
    "cStrCpyProblem" : new LevelVariable("problem2", "C-Str-Copy"),
    "cStrLenProblem" : new LevelVariable("problem3", "C-Str-Len"),
    "javaPasswordProblem" : new LevelVariable("problem4", "Java-Password"),
    "javaReadFileProblem" : new LevelVariable("problem5", "Java-Read-File"),
    "javaSocketProblem" : new LevelVariable("problem6", "Java-Socket"),
    "pythonEvalProblem" : new LevelVariable("problem7", "Python-Eval"),
    "pythonFactorialProblem" : new LevelVariable("problem8", "Python-Factorial"),
    "pythonInputValidationProblem" : new LevelVariable("problem9", "Python-Validation"),}


export const LEVEL_CONSTANTS  = {
    "LEVEL_1" : LEVEL_1

}