var lista = ['', 'Bianchi', 'Rossi', 'Perlari', 'Lodigiani', 'Mastrobattista', 'Verdi'];
var cognome = prompt("Dimmi il tuo cognome");
console.log(cognome);
if (isNaN(cognome)) {
  var cognomeupper = cognome.charAt(0).toUpperCase() + cognome.slice(1);
  lista.push(cognomeupper);
  lista.sort();
}
console.log(lista.indexOf(cognomeupper, 1));
for (var i = 1; i < 8; i++) {
  document.getElementById('list').innerHTML += "<li>"+ lista[i] +"</li>";
}
