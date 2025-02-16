const players = [
    "Ronaldo", "Oblak", "Kane", "Eto'o", "Owen", "Neymar", "Rui Costa", "Adriano", "Osimhen", "Nesta", "Ansu Fati", "Iniesta", "Alexis Sanchez", "Zidane", "Emerson", "Nedved", "Donnarumma", "Alaba", "Aguero", "Origi",
    "Icardi", "Immobile", "Eder", "Ramos", "Salah", "Haaland", "Dzeko", "Osvaldo", "Ochoa", "Aubameyang", "Gabriel Jesus", "Suarez", "Zapata", "Totti", "Insigne", "Eusebio", "Ortega", "Aimar", "Rodrygo", "Odegaard",
    "Del Piero", "Ocampos", "Simeone", "Eto'o", "Origi", "Ibrahimovic", "Cantona", "Alisson", "Navas", "Saviola", "Alderweireld", "Dybala", "Alvaro Morata", "Arnautovic", "Coloccini", "Isco", "Orban", "Nainggolan", "Neuer",
    "Reina", "Acerbi", "Ilicic", "Chiellini", "Insigne", "Ely", "Yarmolenko", "Oxlade-Chamberlain", "Nani", "Insigne", "Evra", "Adebayor", "Riquelme", "Effenberg", "Gundogan", "Ndombele", "Eriksen", "Nagatomo",
    "Obi Mikel", "Lucas Moura", "Alcacer", "Rui Patricio", "Onana", "Akanji", "Iniesta", "Alex Sandro", "Odriozola", "Aouar", "Ramos", "Sergi Roberto", "Orsolini", "Immobile", "Eto'o", "Ocampos", "Sneijder", "Riquelme",
    "Eden Hazard", "Douglas Costa", "Aouar", "Rakitic", "Coutinho", "Osimhen", "Nani", "Iheanacho", "Onuoha", "Aubameyang", "Gattuso", "Orban", "Nainggolan", "Neymar", "Reus", "Sanches", "Sane", "Eto'o", "Olmo"
];

let usedPlayers = [];

function checkPlayer() {
    const input = document.getElementById("playerInput").value.trim();
    if (!input) {
        alert("Inserisci un nome di calciatore!");
        return;
    }

    const lastChar = usedPlayers.length > 0 ? usedPlayers[usedPlayers.length - 1].slice(-1).toLowerCase() : null;
    const firstChar = input.charAt(0).toLowerCase();
    
    if (usedPlayers.includes(input)) {
        alert("Questo calciatore è già stato usato!");
        return;
    }

    if (lastChar && firstChar !== lastChar) {
        alert(`Il nome deve iniziare con '${lastChar.toUpperCase()}'!`);
        return;
    }

    if (!players.includes(input)) {
        alert("Nome non valido o non in lista!");
        return;
    }

    usedPlayers.push(input);
    document.getElementById("usedPlayers").innerHTML += `<li>${input}</li>`;
    document.getElementById("playerInput").value = "";
}