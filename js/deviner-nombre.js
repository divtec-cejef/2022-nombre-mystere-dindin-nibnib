/**
* Jeu du nombre mystère
* @author  Steve Fallet
* @version 0.1
* @since   2018-09-09 (date de création)
*/

// Main IIFE (Immediately-Invoked Function Expression, se prononce "iffy")
const main = () => {
	"use strict";

	/* Déclaration des variables. */
	let nbEssai;

	/**
		 * Retourne un nombre entier aléatoire compris entre min et max
		 * @param min
		 * @param max
		 * @returns {number}
	 */
	function tireNombre(min = 0, max = 100) {
		return Math.floor(Math.random() * (max - min) + min);
	}

	/* Déclarer une variable appelée `nbMystere` et lui affecter la valeur de la fonction `tireNombre()` */
	let nbMystere = tireNombre();

	while (reponse !== nbMystere) {
		/* Demander à l'utilisateur d'entrer un nombre entre 0 et 100. */
		let reponse = parseInt(prompt("Entrez un nombre entre 0 et 100"));
		nbEssai++;

		if (reponse > nbMystere) {
			alert("C'est moins");
		} else if (reponse < nbMystere) {
			alert("C'est plus");
		}
	}
	alert("Vous avez trouvé après " + nbEssai + " essai(s)");
}; // main IIFE

main();
