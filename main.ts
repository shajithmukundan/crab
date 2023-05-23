radio.onReceivedNumber(function (receivedNumber) {
    code = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendNumber(4)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(6)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(7)
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendNumber(5)
})
let code = 0
radio.setGroup(1)
code = 0
servos.P0.stop()
servos.P1.stop()
basic.forever(function () {
    while (code == 1) {
        servos.P0.run(50)
        servos.P1.run(50)
    }
    while (code == 2) {
        servos.P0.run(-50)
        servos.P1.run(-50)
    }
    while (code == 3) {
        servos.P0.stop()
        servos.P1.stop()
    }
    while (code == 4) {
        servos.P0.run(100)
        servos.P1.run(100)
    }
    while (code == 5) {
        servos.P0.run(-100)
        servos.P1.run(-100)
    }
    while (code == 6) {
        servos.P0.run(-100)
        servos.P1.run(100)
    }
    while (code == 7) {
        servos.P0.run(100)
        servos.P1.run(-100)
    }
})
