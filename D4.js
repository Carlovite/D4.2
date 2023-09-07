/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
function area(l1, l2) {
  const tot = l1 * l2;
  return tot;
}

// console.log(area(8, 9));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(n1, n2) {
  let tot;
  if (n1 != n2) {
    tot = n1 + n2;
  } else {
    tot = (n1 + n2) * 3;
  }
  return tot;
}

// console.log(crazySum(5, 5));
// console.log(crazySum(5, 4));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
function crazyDiff(n) {
  let tot1 = Math.abs(n - 19);
  let tot2 = Math.abs(n - 19) * 3;
  if (n <= 19) {
    return tot1;
  } else {
    return tot2;
  }
}

// console.log(crazyDiff(20));
// console.log(crazyDiff(19));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
  let tot1 = true;
  let tot2 = false;
  if ((n > 20 && n <= 100) || n === 400) {
    return tot1;
  }
  return tot2;
}

// console.log(boundary(1));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(stringa) {
  let stringa2 = "EPICODE" + stringa;
  if (stringa.slice(0, 7) === "EPICODE") {
    return stringa;
  }
  return stringa2;
}
// console.log(epify("EPICOdE è un corso bello ma tosto"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(n) {
  let message = "error";

  if (n <= 0) {
    return message;
  } else if (n % 3 === 0 || n % 7 === 0) {
    return true;
  } else {
    return false;
  }
}

// console.log(check3and7(-5));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

//METODO 1:

// function reverseString1(stringa) {
//   let splitString = stringa.split(""); //se la mia stringa è "ciao" qua creo nuovo array contenente "c","i","a,"o"
//   let reverseArray = splitString.reverse();
//   let joinArray = reverseArray.join("");
//   return joinArray;
// }

//console.log(reverseString1("Carlo"));

function reverseString(str) {
  return str.split("").reverse().join("");
}

// console.log(reverseString("ciao"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
function giveMeRandom(n) {
  const tot = [];
  for (i = 0; i < n; i++) {
    tot[i] = Math.floor(Math.random() * 11);
  }
  return tot;
}
// console.log(giveMeRandom(4));
