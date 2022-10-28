document.addEventListener("DOMContentLoaded", function(event){
    // Incrementing the Streak and saving / loading it from memory
    let streak;
    const quotes = ['"When you have a dream, youve got to grab it and never let go."','"Nothing is impossible. The word itself says Im possible!"','"The bad news is time flies. The good news is youre the pilot."','"Life has got all those twists and turns. You´ve got to hold on tight and off you go."','"Keep your face always toward the sunshine, and shadows will fall behind you."','"Success is not final, failure is not fatal: it is the courage to continue that counts."','"Spread love everywhere you go."',' "You can be everything. You can be the infinite amount of things that people are."']
    document.getElementById("quote").innerHTML = quotes[Math.floor(Math.random()*quotes.length)];
    if(localStorage.getItem("counter") > 0) {
        streak = localStorage.getItem("counter");
        document.getElementById("counter").innerHTML = "Streak: " + streak;
    } else {
        streak = 0;
    }
    document.getElementById("incrementer").addEventListener("click", function() {
        streak++;
        document.getElementById("counter").innerHTML = "Streak: " + streak;
        if(typeof(Storage) !== "undefined") {
            localStorage.setItem("counter", streak);
        }
    });

    document.getElementById("reset").addEventListener("click", function() {
        if(typeof(Storage) !== "undefined") {
            localStorage.setItem("counter", 0);
            streak = 0;
            document.getElementById("counter").innerHTML = "Streak: " + streak;
        }
    });
        document.getElementById("newquote").addEventListener("click", function() {
        document.getElementById("quote").innerHTML = quotes[Math.floor(Math.random()*quotes.length)];
    });
});

