

//controllo se pagina è pront
$(document).ready(function() {

	//fai qualcosa clicchi elemento scroll to
    $(".scrollTo").click(function() {
 
    	// sposta tutto il contenuto fino a target
        $("#recensioni-inutili").animate({
            scrollTop: 1000
        }, 2000);
    
    });
})

