input.onButtonPressed(Button.A, function () {
    contador = -1
})
let contador = 0
contador = -1
basic.forever(function () {
    contador += 1
    if (contador > 20) {
        contador = -1
    }
    basic.pause(1000)
})
