function compterPairs(tab) {
    let nbr = 0 

	for (let i = 0; i < tab.length; i++) {
         if(tab[i]%2 == 0) {
            nbr++
          }
    }
    console.log(nbr)
}

console.log(compterPairs([1, 2, 3, 4, 5])); // Résultat attendu : 2