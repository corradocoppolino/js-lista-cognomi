var cognome = prompt("Inserisci il tuo cognome");

var arrayCognome = ["Bianchi","Verdi","Gialli","Marroni","Ciao","Rossi","Ciani","Violi"];

arrayCognome[8] = cognome;

arrayCognome.sort();

console.log(arrayCognome);
  
for(var i = 0; i < arrayCognome.length; i++){
  
    var elemento_lista = arrayCognome[i];
    
    var contenuto_precendente = document.getElementById('lista').innerHTML;
    
    document.getElementById('lista').innerHTML = contenuto_precendente + "<li>" +elemento_lista+ "</li>";

}

var trovato = arrayCognome.indexOf(cognome);

trovato +=  1;

document.getElementById("trovato").innerHTML = "Il tuo cognome si trova nella posizione: " + trovato;