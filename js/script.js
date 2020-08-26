// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome ed età.
// Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome.
// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
// Usate prima i console.log e poi provare a stampare con jQuery:
// BONUS: Provate ad utilizzare Handlebars.

// Oggetto studente
var studente = {
  "nome": 'Mario',
  "cognome": 'Rossi',
  "età": 50
}
// stampare tramite ciclo for in tutte le proprietà di studente
for (var key in studente) {
  console.log(key + ': ' + studente[key]);
}

// array di studenti
var classe = [
  {
    "nome": 'Maccio',
    "cognome": 'Capatonda',
    "età": 40
  },
  {
    "nome": 'Ektor',
    "cognome": 'Baboden',
    "età": 40
  },
  {
    "nome": 'Anna',
    "cognome": 'Pannocchia',
    "età": 40
  },
];

// Ciclo su tutti gli studenti e stampo per ognuno nome e cognome.
for (var i = 0; i < classe.length; i++) {
  // for (var key in classe[i]) {
    console.log(classe[i].nome + ' '  + classe[i].cognome);
  // }
}

// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var nome = prompt('Inserisci il nome');
var cognome = prompt('Inserisci il cognome');
var eta = parseInt(prompt('Inserisci l\'età'))
var nuovoStudente = {
  "nome": nome,
  "cognome": cognome,
  "età": eta
};
classe.push(nuovoStudente);
console.log(classe);
