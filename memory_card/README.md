# Memory Game Readme

## Descrizione
Il Memory Game è un gioco classico di memoria in cui l'obiettivo è trovare le corrispondenze di coppie di carte con gli stessi simboli. In questo caso, le carte sono rappresentate da emoji e il giocatore deve abbinare le emoji identiche nel minor numero di mosse possibile.

## Istruzioni
1. Apri il file `index.html` nel tuo browser web per avviare il gioco.
2. Troverai una griglia di emoji coperte. Clicca su una carta per rivelare l'emoji.
3. Clicca su un'altra carta per trovare l'emoji corrispondente. Se le emoji corrispondono, le carte rimarranno scoperte. Se non corrispondono, le carte si gireranno di nuovo dopo un breve momento.
4. Continua a girare le carte e trovare le corrispondenze fino a quando tutte le coppie sono abbinate.
5. Quando hai abbinato tutte le coppie, comparirà un messaggio di congratulazioni.

## Personalizzazione
Puoi personalizzare il gioco modificando l'array `emojis` nel file `script.js`. Aggiungi o rimuovi emoji secondo le tue preferenze. Assicurati che ci siano abbastanza emoji nella lista da formare coppie per un gioco completo.

```javascript
const emojis=["🎰","🎰","🏇","🏇","🤖","🤖","👻","👻","😈","😈","👽","👽","🤩","🤩","🙃","🙃"];
```

## Struttura dei File
- `index.html`: Contiene la struttura HTML del gioco, inclusi i titoli, la griglia di gioco e il pulsante di reset.
- `style.css`: Gestisce lo stile e l'aspetto del gioco.
- `script.js`: Contiene il codice JavaScript per la logica del gioco, inclusi il mescolamento delle emoji e la gestione degli eventi dei clic.

## Tecnologie Utilizzate
- **HTML**: Utilizzato per creare la struttura del gioco e gli elementi UI.
- **CSS**: Utilizzato per lo stile e il layout del gioco.
- **JavaScript**: Utilizzato per la logica del gioco, inclusi gli eventi dei clic e il controllo delle corrispondenze delle carte.

Divertiti a giocare al Memory Game! Speriamo che tu abbia una buona memoria e possa trovare tutte le corrispondenze!


# Memory Game - JavaScript Readme

In questo README, spiegherò passo dopo passo il codice JavaScript utilizzato per creare il Memory Game.

## Inizializzazione delle Emoji

```javascript
const emojis=["🎰","🎰","🏇","🏇","🤖","🤖","👻","👻","😈","😈","👽","👽","🤩","🤩","🙃","🙃"];
```

Iniziamo definendo un array di emoji. Ogni emoji compare due volte nell'array per creare le coppie corrispondenti.

## Mischia le Emoji

```javascript
var shuf_emojis = emojis.sort(()=>(Math.random()> .5) ? 2 : -1);
```

Usiamo il metodo `sort` dell'array per mischiare casualmente le emoji. Il metodo `sort` prende una funzione di confronto che restituisce 1 o -1 in modo casuale, quindi le emoji saranno mescolate casualmente.

## Creazione delle Carte del Gioco

```javascript
for(var i=0; i<emojis.length; i++) {
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = shuf_emojis[i];

    // Aggiungi un gestore di eventi per il clic
    box.onclick = function(){
        this.classList.add('boxOpen');
        setTimeout(function(){
            // Controlla se ci sono due carte aperte
            if(document.querySelectorAll('.boxOpen').length > 1){
                if(document.querySelectorAll('.boxOpen')[0].innerHTML ==
                   document.querySelectorAll('.boxOpen')[1].innerHTML){
                    // Le due carte corrispondono, aggiungi una classe di corrispondenza
                    document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch');
                    document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch');

                    // Rimuovi la classe di apertura dalle carte corrispondenti
                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');

                    // Controlla se hai vinto
                    if(document.querySelectorAll('.boxMatch').length == emojis.length){
                        alert('Complimenti, hai vinto!');
                    }

                } else{
                    // Le due carte non corrispondono, chiudile di nuovo
                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');
                }
            }
        }, 500);
    }

    // Aggiungi la carta al contenitore di gioco
    document.querySelector('.game').appendChild(box);
}
```

In questo ciclo `for`, creiamo dinamicamente le carte del gioco come elementi `div` con la classe `item`. Ogni carta riceve una emoji mescolata. Aggiungiamo anche un gestore di eventi al clic per ogni carta.

## Gestione degli Eventi di Clic

Nel gestore di eventi al clic su una carta:
- Aggiungiamo la classe `boxOpen` per mostrare la carta.
- Attendiamo 500 millisecondi per consentire al giocatore di vedere la carta.
- Controlliamo se ci sono due carte aperte.
- Se ci sono due carte aperte, verifichiamo se corrispondono.
- Se le carte corrispondono, aggiungiamo la classe `boxMatch` per segnalare la corrispondenza e le rimuoviamo dalla visualizzazione.
- Controlliamo se hai vinto il gioco confrontando il numero di carte abbinate con il numero totale di emoji.
- Se le carte non corrispondono, le chiudiamo di nuovo rimuovendo la classe `boxOpen`.

## Spero che questa spiegazione ti aiuti a capire il codice JavaScript utilizzato per creare il Memory Game. Buon divertimento nel giocare!