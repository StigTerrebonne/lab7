'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.likeCtr').click(clickLike);
}

function clickLike(e){
	e.preventDefault();
	console.log("made it");
	ga('create', 'UA-134624562-1', 'auto');
	ga('send', 'event', 'like', 'click');
}