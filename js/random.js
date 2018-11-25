$(document).ready( function() {
    var textArray = ["HHHHAAAA", "B", "C", "D", "E", "F", "G", "H", "I", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "Z", "s", "p", "%", "$"];

    $('#text-box').randomText( textArray, 1000); // ( array, interval, ["reload text or html"] )
});
// custom jquery plugin loadText()
$.fn.randomText = function( textArray, interval, randomEle, prevText ) {
    var obj = $(this);
    if( $('#text-content').length == 0 ){ obj.append('<div id="text-content">'); }
    var textCont = $('#text-content');
    if( typeof randomEle != 'undefined' ){ if( $('#randomizer').length == 0 ){ obj.append('<a href="javascript:;" id="randomizer"><em>' + randomEle ); } }
    textCont.fadeOut( 'fast', function() {
        var chosenText = random_array( textArray );
        while( chosenText == prevText ) { chosenText = random_array( textArray ); }
        textCont.empty().html( chosenText );
        textCont.fadeIn( 'fast' );
        sendText = chosenText;
    });
    timeOut = setTimeout( function(){ obj.randomText( textArray, interval, randomEle, sendText ); }, interval );
    
}
//public function
function random_array( aArray ) {
    var rand = Math.floor( Math.random() * aArray.length + aArray.length );
    var randArray = aArray[ rand - aArray.length ];
    return randArray;
}