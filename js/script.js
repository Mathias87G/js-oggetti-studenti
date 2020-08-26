// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome ed età.
// Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome.
// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
// Usate prima i console.log e poi provare a stampare con jQuery:
// BONUS: Provate ad utilizzare Handlebars.

// Oggetto studente
var studente = {
  "Nome": 'Mario',
  "Cognome": 'Rossi',
  "Età": 50
};
// stampare tramite ciclo for in tutte le proprietà di studente
for (var key in studente) {
  $('#studente').append(key + ': ' + studente[key] + ' ');
};

// array di studenti
var classe = [
  {
    "Nome": 'Maccio',
    "Cognome": 'Capatonda',
    "Età": 40
  },
  {
    "Nome": 'Ektor',
    "Cognome": 'Baboden',
    "Età": 40
  },
  {
    "Nome": 'Anna',
    "Cognome": 'Pannocchia',
    "Età": 40
  },
];

// Ciclo su tutti gli studenti e stampo per ognuno nome e cognome.
for (var i = 0; i < classe.length; i++) {
    $('#classe').append('<li>' + classe[i].Nome + ' '  + classe[i].Cognome + '</li>');
};

// Funzione sul button per i prompt nuovo inserimento dati
$('button').click(
  function(){
    // Dati nuovo studente
    var nome = capitalize(prompt('Inserisci il nome'));
    var cognome = capitalize(prompt('Inserisci il cognome'));
    var eta = parseInt(prompt('Inserisci l\'età'));
    var nuovoStudente = {
      "Nome": nome,
      "Cognome": cognome,
      "Età": eta
    };
    // Inserisco nuovo studente nell'array
    classe.push(nuovoStudente);
    $('#classe').append('<li>' + nome + ' '  + cognome + '</li>');
  }
);

// funzione per maiuscole nome e cognome
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
