const birthdaySong = document.getElementById("birthdaySong");

let candleBlown = false;
let envelopeOpened = false;


/* =========================================
   SCREEN CONTROL
========================================= */

function showScreen(number) {
    document.querySelectorAll(".screen").forEach(function(screen) {
        screen.classList.remove("active");
    });

    const target = document.getElementById("screen" + number);

    if (target) {
        target.classList.add("active");
    }
}


/* =========================================
   SCREEN 1 → SCREEN 2
========================================= */

document
    .getElementById("startButton")
    .addEventListener("click", function() {
        showScreen(2);
    });


/* =========================================
   SCREEN 2 → SCREEN 3
========================================= */

document
    .getElementById("cakeButton")
    .addEventListener("click", function() {
        showScreen(3);
    });


/* =========================================
   CANDLE → SONG + ENVELOPE
========================================= */

document
    .getElementById("candle")
    .addEventListener("click", function() {

        if (candleBlown) {
            return;
        }

        candleBlown = true;

        const candle = document.getElementById("candle");
        const hint = document.getElementById("candleHint");

        candle.classList.add("blown");

        hint.textContent = "wish made ✦";


        /* Start the song automatically */

        if (birthdaySong) {
            birthdaySong.currentTime = 0;

            birthdaySong.play().catch(function(error) {
                console.log("Music could not start automatically:", error);
            });
        }


        /* Give the candle animation a moment,
           then reveal the envelope */

        setTimeout(function() {
            showScreen(4);
        }, 1500);

    });


/* =========================================
   ENVELOPE
========================================= */

document
    .getElementById("envelope")
    .addEventListener("click", function() {

        if (envelopeOpened) {
            return;
        }

        envelopeOpened = true;

        const envelope = document.getElementById("envelope");
        const hint = document.getElementById("envelopeHint");
        const button = document.getElementById("openLetterButton");

        envelope.classList.add("open");

        hint.textContent = "Your letter is waiting for you ♡";


        setTimeout(function() {
            button.classList.remove("hidden");
        }, 800);

    });


/* =========================================
   ENVELOPE → LETTER
========================================= */

document
    .getElementById("openLetterButton")
    .addEventListener("click", function() {
        showScreen(5);
    });


/* =========================================
   LETTER → FINAL SCREEN
========================================= */

document
    .getElementById("finishLetter")
    .addEventListener("click", function() {
        showScreen(6);
    });
