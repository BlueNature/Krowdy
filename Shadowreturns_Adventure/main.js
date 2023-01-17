const getUsername = () => {
    let username;
    while (!username) {
        username = prompt("Bienvenido a Shadowreturns Adventure Text \nIngresa tu nombre")?.trim();
        if (!username) {
            alert("No es un nombre valido, intentalo nuevamente");
        }
    }
    return username;
};

const showMenu = (username) => {
    let userChoice;
    while (true) {
        const initialMenu = `
      Menu:
      1. Cambiar tu nombre
      2. Iniciar juego
      `;
        userChoice = prompt(initialMenu);

        if (userChoice === "1") {
            username = getUsername();
        } else if (userChoice === "2") {
            break;
        } else {
            alert("No es una opcion valida intentelo nuevamente");
        }
    }
    alert("Bienvenido al juego");
    playGame(username);
};

const playGame = (username) => {
    const scene1 = `Te encuentras en un laberinto, ¿qué deseas hacer?
    1. Ir hacia la izquierda
    2. Ir hacia la derecha
    3. Avanzar hacia adelante`;
    const userChoice = prompt(scene1);

    if (userChoice === "1") {
        alert("Perdiste el juego, te encontraste con un monstruo demencial y no puedes evitarlo...");
        return;
    } else if (userChoice === "2") {
        alert("Perdiste el juego, te caiste en un pozo y no puedes salir. Moriste de hambre...");
        return;
    } else if (userChoice === "3") {
        const scene2 = `Avanzaste hacia adelante y encuentras un tesoro, ¿qué deseas hacer?
      1. Tomar el tesoro
      2. Dejarlo y seguir avanzando`;
        const userChoice2 = prompt(scene2);
        if (userChoice2 === "1") {
            alert("Felicidades, has ganado el juego!");
        } else {
            alert("Perdiste el juego, el tesoro era la unica forma de salir del laberinto");
        }
        return;
    } else {
        alert("No es una opcion valida intentelo nuevamente");
        playGame(username);
    }
};

const username = getUsername();
alert(`Bienvenido ${username}`);
showMenu(username);