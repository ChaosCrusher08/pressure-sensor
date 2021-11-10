let Value = 0
basic.forever(function () {
    Value = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(Value)
    if (pins.analogReadPin(AnalogPin.P0) > 500) {
        basic.showIcon(IconNames.Happy)
    } else if (pins.analogReadPin(AnalogPin.P0) < 500) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
})
