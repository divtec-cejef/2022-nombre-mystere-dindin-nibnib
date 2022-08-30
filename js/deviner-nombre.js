/**
* Jeu du nombre mystère
* @author  Odin Beuchat
* @version 0.1
* @since   2022-08-30 (date de création)
*/

// Main IIFE (Immediately-Invoked Function Expression, se prononce "iffy")
const main = () => {
	"use strict";
	const MAX = 100;
	const MIN = 0;

	/**
		 * Retourne un nombre entier aléatoire compris entre min et max
		 * @param min
		 * @param max
		 * @returns {number}
	 */
	function tireNombre(min = 0, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}

	/* Déclaration des variables. */
	let nbEssai, reponse = 0;
	let nbMystere = tireNombre(MIN, MAX);

	do {
		/* Demander à l'utilisateur d'entrer un nombre entre 0 et 100. */
		reponse = parseInt(prompt(`Entrez un nombre entre ${MIN} et ${MAX} :`));
		nbEssai++;

		if (isNaN(reponse) || reponse < MIN || reponse > MAX) {
			alert("Vous n'avez pas entré un nombre valide");
			continue;
		}

		if (reponse > nbMystere) {
			alert("C'est moins !");
		} else if (reponse < nbMystere) {
			alert("C'est plus !");
		}
	} while (reponse !== nbMystere);
	alert("Vous avez trouvé après " + nbEssai + " essai(s)");
}; // main IIFE

main();
