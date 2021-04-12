var cognome = prompt("Inserisci il tuo cognome");

var arrayCognome = ["Bianchi","Verdi","Gialli","Marroni","Ciao","Rossi","Ciani","Violi"];

arrayCognome[8] = cognome;

console.log(arrayCognome);


  
  
for(var i = 0; i < arrayCognome.length; i++){
  
    var elemento_lista = arrayCognome[i];
    
    var contenuto_precendente = document.getElementById('lista').innerHTML;
    
    document.getElementById('lista').innerHTML = contenuto_precendente + "<li>" +elemento_lista+ "</li>";
    
    if(elemento_lista === cognome && isNaN(cognome)==true){
        document.getElementById('trovato').innerHTML = "Il tuo cognome si trova nella posizione: " + arrayCognome.length;
    }else{
        document.getElementById('trovato').innerHTML = "Hai inserito un valore non valido";
    }


}