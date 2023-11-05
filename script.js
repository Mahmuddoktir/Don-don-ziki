window.addEventListener('DOMContentLoaded', () => {
    const choices = document.querySelectorAll('.choice'),
    score = document.querySelector('#score'),
    modal = document.querySelector('.modal'),
    result = document.querySelector('#result'),
    restart = document.querySelector('#restart')
    scoreBoard = {
        player: 0,
        computer: 0
    };

    // Play game

    function play() {
        restart.style.display = 'inline-block'
        const playerChoice = event.target.id
        const computerChoice = getComputerChoice()
        const winner = getWinner(playerChoice , computerChoice)
        showWinner(winner, computerChoice)
    }

    // GetComputerChoice

    function getComputerChoice() {
        const rand = Math.random()
        if (rand < 0.34){
            return 'bochka'
        } else if (rand <= 0.67) {
            return "qog'oz"
        } else {
            return 'qaychi'
        }
    }

    //GetWinner

    function getWinner(p, c) {
        if (p === c) {
            return 'draw'
        } else if (p === 'rock') {
            if (c === 'paper') {
                return 'computer'
            } else {
                return 'player'
            }
        } else if (p === 'paper') {
            if (c === 'scissors') {
                return 'computer'
            } else {
                return 'player'
            }
        } else if (p === 'scissors') {
            if (c === 'rock') {
                return 'computer'
            } else {
                return 'player'
            }
        }
    }

    //ShowWinner

    function showWinner(winner, computerChoice) {
        if (winner === 'player') {
            scoreBoard.player++
            result.innerHTML = `
                <h1 class="text-win">Siz yutdingiz</h1>
                <i class = "fas fa-hand-${computerChoice} fa-10x"></i>
                <p>Kompyuter tanlovi <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} </strong> </p>
            `
        } else if (winner === 'computer') {
            scoreBoard.computer++
            result.innerHTML = `
            <h1 class="text-lose">Yutqazdingiz</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Kompyuter tanlovi<strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
            
            `
        } else {
            result.innerHTML = `
                <h1>Durrang</h1>
                <i class="fas fa-hand-${computerChoice} fa-10x"></i>
                <p>Kompyuter tanlovi<strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong>
            `
        }

        score.innerHTML = `
            <p> O'yinchi: ${scoreBoard.player} </p>
            <p> Kompyuter: ${scoreBoard.computer} </p>
        `

        modal.style.display = 'block'
    }

    //RestartGame

    function restartGame() {
        scoreBoard.player = 0
        scoreBoard.computer = 0
        score.innerHTML = `
        <p> O'yinchi: ${scoreBoard.player} </p>
        <p> Kompyuter: ${scoreBoard.computer} </p>

        `
    }

    //ClearModal

    function clearModal(event) {
        if (event.target == modal) {
            modal.style.display = 'none'
        }
    }

    //EventListener

    choices.forEach(choice => choice.addEventListener('click', play))
    window.addEventListener('click', clearModal)
    restart.addEventListener('click', restartGame)

}) 





