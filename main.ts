let Hando_mado = 0
input.onButtonPressed(Button.A, function () {
    if (input.lightLevel() > 100) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showString("GAME 1")
    Hando_mado = randint(1, 3)
    if (Hando_mado == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (Hando_mado == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature())
})
input.onGesture(Gesture.Shake, function () {
	
})
