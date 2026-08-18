function compteARembours(n) {
    let nbr = [];
    for (let i = n; i >= 0; i--) {
    nbr.push(i);
  }
    return nbr;
}

console.log(compteARembours(3)); // Résultat attendu : [3, 2, 1, 0]