input.onButtonPressed(Button.A, function () {
    basic.showNumber(Min)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Max)
})
let Min = 0
let Max = 0
let currenttemperature = input.temperature()
Max = input.temperature()
Min = input.temperature()
basic.forever(function () {
    basic.showString(".")
    currenttemperature = input.temperature()
    if (currenttemperature < Min) {
        Min = currenttemperature
    }
    if (currenttemperature > Min) {
        Max = currenttemperature
    }
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(1000)
})
