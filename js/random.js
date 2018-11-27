$(document).ready(function() {

    var letters = ["को", "ख", "ग", "घ", "और", "    ", "च", "जी", "ज", "मैं", "एल", "मीटर", "    ", "या", "पी", "क्ष", "आर", "रों", "टी", "में", "एक्स", "और", "से", "    "];

    var count = 0;
    setInterval(function() {

        if(count < 100) {
            var rand = letters[Math.floor(Math.random() * letters.length)];
            $("#randomText").append(rand);
        }
        count++;
    }, 100);



})



