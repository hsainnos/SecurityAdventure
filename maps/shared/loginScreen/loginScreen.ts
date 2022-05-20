const password = document.getElementById('link') as HTMLElement
const input = document.getElementById('password') as HTMLInputElement


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

