basic.forever(function () {
    for (let j = 0; j <= 2; j++) {
        for (let i = 0; i <= 2; i++) {
            led.plot(2 - i, 2)
            led.plot(2 + i, 2)
            led.plot(2, 2 - i)
            led.plot(2, 2 + i)
            basic.pause(200)
        }
    }
    basic.clearScreen()
})
