var lista = ['Bianchi', 'Rossi', 'Perlari', 'Lodigiani', 'Mastrobattista', 'Verdi'];
var cognome = prompt("Dimmi il tuo cognome");
console.log(cognome);
if (isNaN(cognome)) {
  var cognomeupper = cognome.charAt(0).toUpperCase() + cognome.slice(1);
  lista.push(cognomeupper);
  lista.sort();
}
for (var i = 0; i < 7; i++) {
  document.getElementById('list').innerHTML += "<li>"+ lista[i] +"</li>";
}
var indexCognome = lista.indexOf(cognomeupper) + 1;
console.log(indexCognome);
