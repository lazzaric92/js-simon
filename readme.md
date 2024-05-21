! Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

Creo una funzione per generare una quantità nota (5) di numeri random, compresi tra un min e un max, e inserirli in un array ('randomNumbersArray).

In pagina visualizzo i numeri randomici presenti in randomNumbersArray (trasformo il contenuto dell'array in una stringa) e creo un timer di 30 secondi da visulizzare a schermo.
Dopo i 30 secondi, i numeri diventano non visibili e appaiono i 5 prompt in cui l'utente dovrà inserire i numeri visti in precedenza; questi numeri verranno inseriti in un array ('userNumbersArray').
Comparo gli elementi dei due array, evidenziando quanti e quali elementi coincidono. 