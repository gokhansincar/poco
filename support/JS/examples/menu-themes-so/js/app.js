// ON DOCUMENT READY
$(function() {

	/* NAV MOBILE
	------------------------------------------------------*/
	//Quand on click sur le menu hamburger...
	$("#hamburger").on("click", function(e) {
		//Annule le comportement par défaut du lien
		e.preventDefault();

		//Ajoute la classe "open", enlève "close"
		$("#nav").addClass("open").removeClass("close");
	});

	//Quand on click sur le lien pour fermer...
	$("#close").on("click", function(e) {
		e.preventDefault();
		$("#nav").removeClass("open").addClass("close");
	});

	//Quand on clique en dehors
	$("html").on("mouseup", function(e) {
		var container = $("#nav");
		if (!container.is(e.target) && container.has(e.target).length === 0) {
			container.removeClass("open").addClass("close");
		}
	});

}); // FIN DOCUMENT READY
