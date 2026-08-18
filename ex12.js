function estChaine(valeur) {
    if (typeof valeur === 'string') {
        return true
    } else {
       return false
    }
}
console.log(estChaine("bonjour")); // Résultat attendu : true
console.log(estChaine([1, 2, 3])); // Résultat attendu : false