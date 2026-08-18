function sommeTotale(tab) {
    let somme = 0

	for (let i = 0; i < tab.length; i++) {
    somme += tab[i];
}
console.log(somme)
}
console.log(sommeTotale([1, 2, 3, 4])); // Résultat attendu : 10