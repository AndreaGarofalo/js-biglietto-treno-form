console.log("JS OK");

// Descrizione:
// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale
// del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.

/*
1- prendo l'elemento dal dom
2- creo una costante con il prezzo al chilometro
3- chiedo all'utente il numero di chilometri che vuole percorrere e lo salvo nella costante userDistance
4- chiedo all'utente l'età del passeggero e l1 salvo nella costante age
5- creo una formula per calcolare il prezzo del biglietto integrale
6- creo due formule if per applicare gli sconti in base all'età
7- metto il prezzo del biglietto in pagina
*/

// 1- prendo l'elemento dal dom

const price = document.getElementById("target");
const distance = document.getElementById("distance");
const age = document.getElementById("age");
const button = document.getElementById("button");

console.log(price, distance, age, button);

// 2- creo una costante con il prezzo al chilometro
const priceForKm = 0.21;

button.addEventListener("click", function () {
  // 3- chiedo all'utente il numero di chilometri che vuole percorrere e lo salvo nella costante userDistance

  const userDistance = distance.value;

  // 4- chiedo all'utente l'età del passeggero e l1 salvo nella costante age

  const userAge = age.value;

  console.log(userDistance, userAge);

  // 5- creo una formula per calcolare il prezzo del biglietto integrale
  const yourPrice = userDistance * priceForKm;

  console.log(yourPrice);

  // 6- creo due formule if per applicare gli sconti in base all'età

  let discount = "You have no discount available!";

  if (userAge < 18) {
    const reducedPrice = (yourPrice - yourPrice * 0.2).toFixed(2);
    discount = `You have a 20% discount. Your total is: ${reducedPrice}€`;
  }

  if (userAge >= 65) {
    const reducedPrice = (yourPrice - yourPrice * 0.4).toFixed(2);
    discount = `You have a 40% discount. Your total is: ${reducedPrice}€`;
  }

  console.log(discount);
});
