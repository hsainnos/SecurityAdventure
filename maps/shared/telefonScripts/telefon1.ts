let answer_option1: HTMLParagraphElement = document.getElementById("first_answer_option1") as HTMLParagraphElement;
let answer_option2: HTMLParagraphElement = document.getElementById("first_answer_option2") as HTMLParagraphElement;

answer_option1.onmouseover = function () {
    answer_option1.style.textDecoration = "underline"
}

answer_option2.onmouseover = function () {
    answer_option2.style.textDecoration = "underline"
}

answer_option1.onmouseout = function () {
    answer_option1.style.textDecoration = "none"
}

answer_option2.onmouseout = function () {
    answer_option2.style.textDecoration = "none"
}

answer_option1.onclick = show_second
answer_option2.onclick = show_second

function show_second() {
    document.body.innerHTML =
        '<div class="telefon_container">' +
        '<div id="second_question" class="imessage">\n' +
        '        <p class="from-them">Wie hat sich angesichts der Lage im Jahr 2020 die Kundenstruktur der HSA-Informatics\n' +
        ' verändert?</p>\n' +
        '    </div>\n' +
        '\n' +
        '    <p id="comment_2" class="comment">Wählen Sie Ihre Antwort:</p>\n' +
        '\n' +
        '    <div id="second_answer" class="imessage">\n' +
        '        <p id="second_answer_option1" class="from-me grow">Aufgrund der Verunsicherung in der\n' +
        ' Bevölkerung im Jahre 2020, ist ein Großteil der\n' +
        ' Privatkunden weggefallen, weswegen sich die HSA-Informatics nun fast ausschließlich auf Geschäftskunden\n' +
        ' fokussiert.</p>\n' +
        '        <p id="second_answer_option2" class="from-me grow">Aus Gründen der Datensicherheit kann ich\n' +
        ' Ihnen dazu keine Informationen geben.</p>\n' +
        '    </div>' +
        '</div>'

    answer_option1 = document.getElementById("second_answer_option1") as HTMLParagraphElement;
    answer_option2 = document.getElementById("second_answer_option2") as HTMLParagraphElement;

    answer_option1.onmouseover = function () {
        answer_option1.style.textDecoration = "underline"
    }

    answer_option2.onmouseover = function () {
        answer_option2.style.textDecoration = "underline"
    }

    answer_option1.onmouseout = function () {
        answer_option1.style.textDecoration = "none"
    }

    answer_option2.onmouseout = function () {
        answer_option2.style.textDecoration = "none"
    }

    answer_option1.onclick = show_third
    answer_option2.onclick = show_third
}

function show_third() {
    document.body.innerHTML =
        '<div class="telefon_container">' +
        '<div id="third_question" class="imessage">\n' +
        '        <p class="from-them">Um Ihnen das Preisgeld für den besten Ausbildungsplatz 2020 zukommen zulassen, brauche ich\n' +
        ' nun von Ihnen noch die Bankverbindung eines dem Unternehmen zugehörigen Kontos.</p>\n' +
        '    </div>\n' +
        '\n' +
        '    <p id="comment_3" class="comment">Wählen Sie Ihre Antwort:</p>\n' +
        '\n' +
        '    <div id="third_answer" class="imessage">\n' +
        '        <p id="third_answer_option1" class="from-me grow">IBAN: DE89 5001 0517 7221 5356 85 <br> Der\n' +
        ' zugehörige Pin lautet ****</p>\n' +
        '        <p id="third_answer_option2" class="from-me grow">Ich bin nicht autorisiert, Daten dieser Art\n' +
        ' weiterzugeben, ich bitte Sie, sich an meinen\n' +
        ' Vorgesetzten zu wenden.</p>\n' +
        '    </div>' +
        '</div>'

    answer_option1 = document.getElementById("third_answer_option1") as HTMLParagraphElement;
    answer_option2 = document.getElementById("third_answer_option2") as HTMLParagraphElement;

    answer_option1.onmouseover = function () {
        answer_option1.style.textDecoration = "underline"
    }

    answer_option2.onmouseover = function () {
        answer_option2.style.textDecoration = "underline"
    }

    answer_option1.onmouseout = function () {
        answer_option1.style.textDecoration = "none"
    }

    answer_option2.onmouseout = function () {
        answer_option2.style.textDecoration = "none"
    }

    answer_option1.onclick = show_fourth
    answer_option2.onclick = show_fourth
}

function show_fourth() {
    WA.state.saveVariable('quest_2_2', true).catch(e => console.error(e))
    document.body.innerHTML =
        '<div class="telefon_container">' +
        '<div id="fourth_question" class="imessage">\n' +
        '        <p class="from-them">Vielen Dank für Ihre Zeit, auf wiederhören.</p>\n' +
        '    </div>\n' +
        '\n' +
        '    <p id="comment_4" class="comment">Fazit:</p>\n' +
        '\n' +
        '    <div id="conclusion" class="imessage">\n' +
        '        <p class="from-them">Richtige Antworten: <br>\n' +
        '            1. Frage: Option 1; <br>\n' +
        '            2. Frage: Option 2; <br>\n' +
        '            3. Frage: Option 2; <br>\n' +
        '        </p>\n' +
        '        <p class="from-them">Geben Sie keine Informationen über die Unternehmensstruktur o.Ä. Auskunft. <br>\n' +
        '            Konkurrenten können sich mit solchen Informationen Wettbewerbsvorteile erschleichen.\n' +
        '        </p>\n' +
        '    </div>' +
        '</div>'

}
