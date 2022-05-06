const password = document.getElementById('link')

if (password)
    password.addEventListener('click', function () {
        let input = document.getElementById('password') as HTMLInputElement
        let right_password = document.getElementById('right-password') as HTMLElement

        let value: string = input.value
        if (value === right_password.innerText) {


            document.body.innerHTML = '                   <div class="success-desktop-background">\n' +
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
        }
        else {
            input.style.color = 'red'
        }
    })

