input.onButtonPressed(Button.A, function () {
    if (Coin_1 == "Heads" && Coin_2 == "Heads" || Coin_1 == "Heads" && Coin_2 == "Heads") {
        Player_1 += 1
        basic.showNumber(Player_1)
        basic.showIcon(IconNames.EigthNote)
        basic.showString("Ply 1")
    } else {
        Player_2 += 1
        basic.showIcon(IconNames.QuarterNote)
        basic.showString("Ply 2")
    }
})
let Player_1 = 0
let Coin_2 = ""
let Coin_1 = ""
Coin_1 = "Tails"
Coin_2 = "Heads"
Player_1 = 0
let Player_2 = 0
