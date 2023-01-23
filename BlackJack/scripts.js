const btnNewGame = document.querySelector("#btnNewGame"),
    btnDrawCard = document.querySelector("#btnDrawCard"),
    btnStop = document.querySelector("#btnStop"),
    playerPoints = document.querySelectorAll("small"),
    currentPlayer = document.querySelector("#currentPlayer"),
    playerCards = document.querySelectorAll(".cards");

let deck = [],
    players = [],
    currentTurn = 0;

const suits = ["C", "D", "H", "S"],
    specials = ["A", "J", "Q", "K"];

const init = (numberOfPlayers = 3) => {
    deck = createDeck();
    players = [];
    currentTurn = 0;

    for (let i = 0; i < numberOfPlayers; i++) {
        players.push({
            id: i < numberOfPlayers - 1 ? `Player ${i + 1}` : "Computer",
            points: 0
        });
    }

    for (let i = 0; i < players.length; i++) {
        playerPoints[i].textContent = 0;
        playerCards[i].textContent = "";
    }

    enableButtons();
    setTurn(currentTurn);
};

const enableButtons = () => {
    btnDrawCard.disabled = false;
    btnStop.disabled = false;
};

const disableButtons = () => {
    btnDrawCard.disabled = true;
    btnStop.disabled = true;
};

const createDeck = () => {
    deck = [];

    for (let suit of suits) {
        for (let i = 2; i <= 10; i++) {
            deck.push(i + suit);
        }

        for (let special of specials) {
            deck.push(special + suit);
        }
    }

    return _.shuffle(deck);
};

const drawCard = () => {
    if (deck.length <= 0) {
        throw "No more cards in deck";
    }

    return deck.pop();
};

const getCardValue = (card) => {
    const value = card.substring(0, card.length - 1);

    return !isNaN(value) ? value * 1 : value === "A" ? 11 : 10;
};

const accumulatePoints = (card, turn) => {
    players[turn].points += getCardValue(card);
    playerPoints[turn].textContent = players[turn].points;

    return players[turn];
};

const createPlayerCard = (card, turn) => {
    const image = document.createElement("img");
    image.src = `assets/${card}.png`;
    image.classList.add("card");
    playerCards[turn].appendChild(image);
};

const computerTurn = (minPoints) => {
    setTurn(players.length - 1);
    let computerPoints = 0;

    do {
        const card = drawCard();
        computerPoints = accumulatePoints(card, players.length - 1);
        createPlayerCard(card, players.length - 1);
    } while (computerPoints < minPoints);
    checkWin();
};

const setTurn = (turn) => {
    currentTurn = turn;
    currentPlayer.textContent = players[turn].id;
};

const checkWin = () => {
    for (let i = 0; i < players.length; i++) {
        if (players[i].points > 21) {
            disableButtons();
            alert(`${players[i].id} has lost!`);
            btnNewGame.style.display = "block";
            return;
        }
    }
    const nextTurn = currentTurn === players.length - 1 ? 0 : currentTurn + 1;
    setTurn(nextTurn);

    if (players[nextTurn].id === "Computer") {
        computerTurn(17);
    }
};

btnNewGame.addEventListener("click", () => {
    init();
    btnNewGame.style.display = "none";
});

btnDrawCard.addEventListener("click", () => {
    const card = drawCard();
    accumulatePoints(card, currentTurn);
    createPlayerCard(card, currentTurn);
    checkWin();
});

btnStop.addEventListener("click", () => {
    disableButtons();
    checkWin();
});

