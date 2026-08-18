function plusPetit(tab) {
	let min = tab[0]
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] < min ) {
            min = tab[i]
        }
 }  console.log(min)
}

console.log(plusPetit([4, 15, 2, 9])); // Résultat attendu : 2