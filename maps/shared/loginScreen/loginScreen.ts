const password = document.getElementById('link') as HTMLElement
const input = document.getElementById('password') as HTMLInputElement
const login = document.getElementById('login') as HTMLElement

const button_container = document.getElementById('button-container') as HTMLElement

const button1 = document.getElementById('button_1') as HTMLButtonElement
const button2 = document.getElementById('button_2') as HTMLButtonElement
const button3 = document.getElementById('button_3') as HTMLButtonElement


WA.state.onVariableChange('quest_1_1_visible').subscribe(() => {
    login.hidden = false
    button_container.hidden = false
})

WA.state.onVariableChange('quest_1_2_visible').subscribe(() => {
    login.hidden = false
    button_container.hidden = false

})

WA.state.onVariableChange('quest_1_3_visible').subscribe(() => {
    login.hidden = false
    button_container.hidden = false

})

button2.addEventListener('click', function () {
    input.value = button2.innerText
})

button1.addEventListener('click', function () {
    input.value = button1.innerText
})

button3.addEventListener('click', function () {
    input.value = button3.innerText
})


password.addEventListener('click', function () {
    execute()
})

input.addEventListener('keydown', function (key) {
    if (key.code == 'Enter') {
        execute()
    }
})

function execute() {

    let right_password = document.getElementById('right-password') as HTMLElement

    let value: string = input.value
    if (value === right_password.innerText) {


        document.body.innerHTML = '<div class="success-desktop-background">\n' +
            '                       <div class="success-symbol-layer">\n' +
            '                           <div class="success-time"></div>\n' +
            '                           <div class="success-power"></div>\n' +
            '                       </div>\n' +
            '                   <div class="success-box">\n' +
            '                       <div class="success-watermelon"></div>\n' +
            '                       <div class="success-trash_can"></div>\n' +
            '                       <div class="success-data"></div>\n' +
            '                       <div class="success-safari"></div>\n' +
            '                       <div class="success-terminal"></div>\n' +
            '                   </div>\n' +
            '                   </div>'
    } else {
        setTimeout(() => {
            input.style.color = 'black'
        }, 3000)
        input.style.color = 'red'
    }
}

