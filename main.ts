enum RadioMessage {
    message1 = 49434,
    Forward = 16348,
    Backward = 28651,
    Stop = 61268,
    Lights = 8859,
    Wifi = 24879,
    Left = 14947,
    Right = 32391,
    Light = 10501
}
radio.onReceivedMessage(RadioMessage.Forward, function () {
    cuteBot.forward()
})
radio.onReceivedMessage(RadioMessage.Lights, function () {
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x0000ff)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0x0000ff)
    strip = neopixel.create(DigitalPin.P15, 2, NeoPixelMode.RGB)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
})
radio.onReceivedMessage(RadioMessage.Light, function () {
    cuteBot.closeheadlights()
})
radio.onReceivedMessage(RadioMessage.Backward, function () {
    cuteBot.backforward()
})
radio.onReceivedMessage(RadioMessage.Right, function () {
    cuteBot.turnright()
})
radio.onReceivedMessage(RadioMessage.Stop, function () {
    cuteBot.stopcar()
})
radio.onReceivedMessage(RadioMessage.Left, function () {
    cuteBot.turnleft()
})
radio.onReceivedMessage(RadioMessage.Wifi, function () {
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        `)
    basic.showLeds(`
        # # # . .
        # # # . .
        # # # . .
        # # # . .
        # # # . .
        `)
    basic.showLeds(`
        # # # # .
        # # # # .
        # # # # .
        # # # # .
        # # # # .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showString("Connected")
})
let strip: neopixel.Strip = null
radio.setGroup(2)
