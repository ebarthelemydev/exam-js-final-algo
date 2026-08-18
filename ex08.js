function contientZero(tab) {
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] == 0) {
        return true
    } else {
        return false
    }
    }
}

console.log(contientZero([1, 0, 3])); // Résultat attendu : true
console.log(contientZero([1, 2, 3])); // Résultat attendu : false