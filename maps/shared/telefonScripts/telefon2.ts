let answer_option1_2: HTMLParagraphElement = document.getElementById("first_answer_option1") as HTMLParagraphElement;
let answer_option2_2: HTMLParagraphElement = document.getElementById("first_answer_option2") as HTMLParagraphElement;

answer_option1_2.onmouseover = function () {
    answer_option1_2.style.textDecoration = "underline"
}

answer_option2_2.onmouseover = function () {
    answer_option2_2.style.textDecoration = "underline"
}

answer_option1_2.onmouseout = function () {
    answer_option1_2.style.textDecoration = "none"
}

answer_option2_2.onmouseout = function () {
    answer_option2_2.style.textDecoration = "none"
}

answer_option1_2.onclick = show_right
answer_option2_2.onclick = show_second_2

function show_second_2() {
    document.body.innerHTML =
        '<div class="telefon_container">' +
        '<div id="second_question" class="imessage">\n' +
        '        <p class="from-them">Vielen Dank, wenn sie nun noch den Rechner freigeben, dann kann ich mit Ihnen am Problem\n' +
        ' arbeiten.</p>\n' +
        '    </div>\n' +
        '\n' +
        '    <p id="comment_2" class="comment">Wählen Sie Ihre Antwort:</p>\n' +
        '\n' +
        '    <div id="second_answer" class="imessage">\n' +
        '        <p id="second_answer_option1" class="from-me grow">>Auflegen & Passwort ändern<</p>\n' +
        '        <p id="second_answer_option2" class="from-me grow">>Rechner freigeben<</p>\n' +
        '    </div>' +
        '</div>'

    answer_option1_2 = document.getElementById("second_answer_option1") as HTMLParagraphElement;
    answer_option2_2 = document.getElementById("second_answer_option2") as HTMLParagraphElement;

    answer_option1_2.onmouseover = function () {
        answer_option1_2.style.textDecoration = "underline"
    }

    answer_option2_2.onmouseover = function () {
        answer_option2_2.style.textDecoration = "underline"
    }

    answer_option1_2.onmouseout = function () {
        answer_option1_2.style.textDecoration = "none"
    }

    answer_option2_2.onmouseout = function () {
        answer_option2_2.style.textDecoration = "none"
    }

    answer_option1_2.onclick = show_right
    answer_option2_2.onclick = show_third_2
}

function show_third_2() {
    document.body.innerHTML =
        '<div class="telefon_container">' +
        '<div id="third_question" class="imessage">\n' +
        '        <p class="from-them">Laut meines Diagnosetools ist Ihre Rechner mit zu vielen verschiedenen komplexen\n' +
        ' Schadsoftwaresystemen befallen, ich kann Ihnen nicht ohne größeren Aufwand zeitnah helfen. Wenn Sie jedoch\n' +
        ' möchten, können Sie einen Techniker damit beauftragen, sich um Ihre Probleme zu kümmern. Hierbei kommen jedoch\n' +
        ' Kosten in Höhe von 20 €/h auf Sie zu.</p>\n' +
        '    </div>\n' +
        '\n' +
        '    <p id="comment_3" class="comment">Wählen Sie Ihre Antwort:</p>\n' +
        '\n' +
        '    <div id="third_answer" class="imessage">\n' +
        '        <p id="third_answer_option1" class="from-me grow">>Auflegen & Passwort ändern<</p>\n' +
        '        <p id="third_answer_option2" class="from-me grow">>Techniker beauftragen<</p>\n' +
        '    </div>' +
        '</div>'

    answer_option1_2 = document.getElementById("third_answer_option1") as HTMLParagraphElement;
    answer_option2_2 = document.getElementById("third_answer_option2") as HTMLParagraphElement;

    answer_option1_2.onmouseover = function () {
        answer_option1_2.style.textDecoration = "underline"
    }

    answer_option2_2.onmouseover = function () {
        answer_option2_2.style.textDecoration = "underline"
    }

    answer_option1_2.onmouseout = function () {
        answer_option1_2.style.textDecoration = "none"
    }

    answer_option2_2.onmouseout = function () {
        answer_option2_2.style.textDecoration = "none"
    }

    answer_option1_2.onclick = show_right
    answer_option2_2.onclick = show_wrong

}

function show_right() {
    WA.state.saveVariable('quest_2_3', true).catch(e => console.error(e))
    document.body.innerHTML =
        '<div class="telefon_container">' +
        '<br>' +
        '<p id="comment_4" class="comment">Fazit:</p>' +
        '<div id="conclusion_right" class="imessage">\n' +
        '        <p class="from-them"> Richtige Wahl!\n' +
        '        </p>\n' +
        '\n' +
        '        <p class="from-them">\n' +
        '            Am besten ist es so früh wie möglich aufzulegen, da es sich offensichtlich nicht um einen echten Microsoft\n' +
        '            Mitarbeiter handelt.\n' +
        '        </p>\n' +
        '        <p class="from-them"> Ein Support-Mitarbeiter meldet sich nie ohne vorherige Anfrage, aus dem Nichts, bei einem\n' +
        ' Kunden, dadurch fliegt Ranjid schon im ersten Satz auf.\n' +
        '        </p>\n' +
        '    </div>' +
        '</div>'
}

function show_wrong() {
    document.body.innerHTML =
        '<div class="telefon_container">' +
        '<br>' +
        '<p id="comment_4" class="comment">Fazit:</p>\n' +
        '\n' +
        '    <div id="conclusion_wrong" class="imessage">\n' +
        '        <p class="from-them">\n' +
        '            Falsche Wahl!\n' +
        '        </p>\n' +
        '\n' +
        '        <p class="from-them">\n' +
        '            Am besten ist es so früh wie möglich aufzulegen, da es sich offensichtlich nicht um einen echten Microsoft\n' +
        '            Mitarbeiter handelt.\n' +
        '        </p>\n' +
        '        <p class="from-them"> Ein Support-Mitarbeiter meldet sich nie ohne vorherige Anfrage, aus dem Nichts, bei einem\n' +
        ' Kunden, dadurch fliegt Ranjid schon im ersten Satz auf.\n' +
        '        </p>\n' +
        '    </div>' +
        '</div>'
}