function compterMots(phrase) {
	let somme = 1

	for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] == " ") {
        somme++;
    }
}
console.log(somme)
}

console.log(compterMots("Bonjour tout le monde")); // Résultat attendu : 4