

//controllo se pagina è pront
$(document).ready(function() {

	//fai qualcosa clicchi elemento scroll to
    $(".scrollTo").click(function() {

        
        
    	// sposta tutto il contenuto fino a target
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#target").offset().top
        }, 2000);
    
    });
})

