$(document).ready(function() {

    var letters = ["6", "2", "3", "4", "5"];

    var count = 0;
    setInterval(function() {

        if(count < 1) {
            var rand = letters[Math.floor(Math.random() * letters.length)];
            $(".randomNumber").append(rand);
        }
        count++;
    });
})


$(document).ready(function() {

    var numbers = ["13", "21", "34", "55", "89"];

    var count = 0;
    setInterval(function() {

        if(count < 1) {
            var rand = numbers[Math.floor(Math.random() * numbers.length)];
            $(".personeNumber").append(rand);
        }
        count++;
    });
})







