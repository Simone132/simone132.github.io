let numeroCasuale;
let tentativi = 0;
let numeriProvati = [];

function startGame() {
    numeroCasuale = generateRandomNumber();
}

function generateRandomNumber() {
    return Math.floor(1000 + Math.random() * 9000);
}

function guessNumber() {
    let guessInput = document.getElementById("guessInput").value;
    
    // Verifica se l'input è un numero a 4 cifre
    if (guessInput.length !== 4 || isNaN(guessInput)) {
        setMessage("Inserisci un numero a 4 cifre valido.", "red");
        return;
    }

    tentativi++;

    // Controlla se il numero è corretto
    if (parseInt(guessInput) === numeroCasuale) {
        setMessage(`Bravo! Hai indovinato il numero in ${tentativi} tentativi.`, "green");
    } else {
        // Calcola le cifre esatte e posizioni corrette
        let cifreEsatte = 0;
        for (let i = 0; i < 4; i++) {
            if (guessInput[i] === numeroCasuale.toString()[i]) {
                cifreEsatte++;
            }
        }

        // Aggiorna il messaggio
        let message = `Cifre esatte e posizioni corrette: ${cifreEsatte}`;
        setMessage(message, "black");

        // Aggiorna i numeri già provati
        numeriProvati.push(guessInput);
        document.getElementById("triedNumbers").textContent = numeriProvati.join(", ");
    }

    // Aggiorna il conteggio dei tentativi
    document.getElementById("attemptCount").textContent = tentativi;
}

function setMessage(message, color) {
    document.getElementById("message").textContent = message;
    document.getElementById("message").style.color = color;
}

// Avvia il gioco al caricamento della pagina
window.onload = startGame;
