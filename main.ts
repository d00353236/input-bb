input.onGesture(Gesture.EightG, function () {
    basic.showString("" + (input.temperature()))
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.FreeFall, function () {
    music.playMelody("E C G A F B A D ", 120)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("kablam")
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.SmallHeart)
})
input.onGesture(Gesture.Shake, function () {
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    basic.showString("stop that")
})
basic.showString("messin around")
basic.forever(function () {
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
    basic.showLeds(`
        . # # # .
        # # . # #
        # . # . #
        # # . # #
        . # # # .
        `)
    basic.pause(100)
})
