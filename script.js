document.addEventListener('DOMContentLoaded', () => {
    const choices = document.querySelectorAll('.choice');
    const player1ChoiceDisplay = document.getElementById('player1-choice');
    const player2ChoiceDisplay = document.getElementById('player2-choice');
    const resultMessageDisplay = document.getElementById('result-message');
    const player1ScoreDisplay = document.getElementById('player1-score');
    const player2ScoreDisplay = document.getElementById('player2-score');
    const resetButton = document.getElementById('reset-button');

    let player1Choice = '';
    let player2Choice = '';
    let player1Score = 0;
    let player2Score = 0;

    choices.forEach(choice => choice.addEventListener('click', (e) => {
        const player = e.target.getAttribute('data-player');
        const choice = e.target.id.replace(/[0-9]/g, ''); // remove the number from the id to get the choice (rock, paper, scissors)
        
        if (player === '1') {
            player1Choice = choice;
            player1ChoiceDisplay.textContent = `Player 1's choice: ${player1Choice}`;
        } else {
            player2Choice = choice;
            player2ChoiceDisplay.textContent = `Player 2's choice: ${player2Choice}`;
        }

        if (player1Choice && player2Choice) {
            const result = determineWinner(player1Choice, player2Choice);
            resultMessageDisplay.textContent = result;

            if (result === "Player 1 wins!") {
                player1Score++;
                player1ScoreDisplay.textContent = player1Score;
            } else if (result === "Player 2 wins!") {
                player2Score++;
                player2ScoreDisplay.textContent = player2Score;
            }
            
            // Reset choices for the next round
            player1Choice = '';
            player2Choice = '';
        }
    }));

    resetButton.addEventListener('click', () => {
        player1Score = 0;
        player2Score = 0;
        player1ScoreDisplay.textContent = player1Score;
        player2ScoreDisplay.textContent = player2Score;
        player1ChoiceDisplay.textContent = "Player 1's choice: ";
        player2ChoiceDisplay.textContent = "Player 2's choice: ";
        resultMessageDisplay.textContent = "";
        player1Choice = '';
        player2Choice = '';
    });

    function determineWinner(player1Choice, player2Choice) {
        if (player1Choice === player2Choice) {
            return "It's a draw!";
        }
        if ((player1Choice === 'rock' && player2Choice === 'scissors') ||
            (player1Choice === 'paper' && player2Choice === 'rock') ||
            (player1Choice === 'scissors' && player2Choice === 'paper')) {
            return "Player 1 wins!";
        }
        return "Player 2 wins!";
    }
});
