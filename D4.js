/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
/* SCRIVI QUI LA TUA RISPOSTA */
/*function area(l1, l2) {
  let tot = 0;
  tot = prompt(l1) * prompt(l2);
  return tot;
}

console.log(area());*/

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*function crazySum(y1, y2) {
  let sum = y1 + y2;
  if (y1 === y2) {
    sum = sum * 3;
    return sum;
  }
}
let y1 = Math.abs(prompt());
let y2 = Math.abs(prompt());
let result = crazySum(y1, y2);
console.log(result);/*

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*function crazyDiff(a1, a2) {
  if (a1 < a2) {
    TTotal = a2 % a1;
  } else {
    TTotal = (a1 % a2) * 3;
  }
  return TTotal;
}
let a1 = Math.abs(prompt());
let a2 = 19;
let ReSult = crazyDiff(a1, a2);
console.log(ReSult);*/

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
/*function boundary(n) {
  if (20 <= n && n <= 100) {
    console.log("true");
  } else {
    console.log("false");
  }
}
let n = parseInt(prompt());
let kiddo = boundary(n);
console.log(kiddo);*/
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify(word) {
  if (word.includes("EPICODE")) {
    word.unshift("EPICODE");
  }
}
let word = " è il migliore";
let WWord = epify(word);
console.log(WWord);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*function check3and7(d) {
  if (d % 3 === 0) {
    return "è multiplo di 3";
  } else if (d % 7 === 0) {
    return "è multiplo di sette";
  } else {
    return "non è multiplo di nessuno dei due";
  }
}
let d = Math.abs(prompt());
console.log(check3and7(d));*/

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
/* SCRIVI QUI LA TUA RISPOSTA */
/*function reverseString(str) {
  let STRinga1 = str.split("");
  let Stringa2 = STRinga1.reverse();
  let STringa3 = Stringa2.join("");

  return STringa3;
}
let str = prompt();
console.log(reverseString(str));*/

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
function cutString(str12) {
  let pukka = str12.split("");
  let Pukka1 = pukka.slice(1, -1).join();

  return Pukka1;
}
let str12 = prompt();
console.log(cutString(str12));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
