$(document).ready(function() {

    var letters = ["को", "ख", "ग", "घ", "और", "    ", "च", "जी", "ज", "मैं", "एल", "मीटर", "    ", "या", "पी", "क्ष", "आर", "रों", "टी", "में", "एक्स", "और", "से", "    "];

    var count = 0;
    setInterval(function() {

        if(count < 100) {
            var rand = letters[Math.floor(Math.random() * letters.length)];
            $(".randomText").append(rand);
        }
        count++;
    }, 300);

})

$(document).ready(function() {

    var letters = ["को", "ख", "ग", "घ", "और", " ", "च", "जी", "ज", "मैं", "एल", "मीटर", "    ", "या", "पी", "क्ष", "आर", "रों", "टी", "में", "एक्स", "और", "से", "    "];

    var count = 0;
    setInterval(function() {

        if(count < 105) {
            var rand = letters[Math.floor(Math.random() * letters.length)];
            $(".randomText2").append(rand);
        }
        count++;
    }, 200);

})


$(document).ready(function() {

    var letters = ["को", "ख", "ग", "घ", "और", " ", "च", "जी", "ज", "मैं", "एल", "मीटर", "    ", "या", "पी", "क्ष", "आर", "रों", "टी", "में", "एक्स", "और", "से", "    "];

    var count = 0;
    setInterval(function() {

        if(count < 80) {
            var rand = letters[Math.floor(Math.random() * letters.length)];
            $(".randomText3").append(rand);
        }
        count++;
    }, 350);

})





















