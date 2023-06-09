# Simon Says #

Visualizzare in pagina 5 numeri casuali diversi. Da lì parte un timer di 30 secondi.
 Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

- Creo una function che mi generi un array di 5 numeri casuali diversi tra loro.
    - Dichiaro la costante array vuota.
    - Utilizzo un **While** per generare 5 numeri casuali, controllo che siano diversi usando il **Do while**.
- Dichiaro una stringa vuota.
    - Utilizzando un **Ciclo for** inserisco gli elementi dell'array precedentemente creata nel DOM.
    - Creo una function che aggiunga la classe '*d-none*' all'elemento del DOM.
    - Creo un **setTimout** nella quale inserirò la funtion precedentemente creata.
    - Creo una function che chieda all'utente i numeri che si ricorda.
