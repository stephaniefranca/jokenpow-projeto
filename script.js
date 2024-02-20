const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')



let humanScoreNumber = 0
let MachineScoreNumber = 0

const GAME_OPTIONS = {
ROCK : 'rock',
PAPER :'paper',
SCISSORS : 'scissors'

}

const playHuman = (humanchoice) => {
    playTheGame(humanchoice, playMachine())
}

const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]

}

const playTheGame = (human, machine) => {



    console.log('Humano: ' + human + ' Maquina: ' + machine)

    if (human === machine) {
        result.innerHTML = "Empate"
    } else if (human === 'paper' && machine === 'rock' ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você ganhou!"
    } else {
        MachineScoreNumber++
        machineScore.innerHTML = MachineScoreNumber
        result.innerHTML = "Você perdeu!"
    }

}

