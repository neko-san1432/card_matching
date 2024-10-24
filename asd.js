// var [] card_pattern = {}
var tmp;
var interval, interval2;
var tick = 0;
var carding = ["card1", "card2", "card3", "card4", "card5", "card6", "card7", "card8"];
var shuffled_card = ["", "", "", "", "", "", "", ""];
var sfi = [0, 0, 1, 1, 2, 2, 3, 3];
var number_pairs = [0, 0, 0, 0];
var tick = 0;
var correct = 0;
var opened = ['', ''];
var club_cards = ["./img/club/1.png",
    "./img/club/2.png",
    "./img/club/3.png",
    "./img/club/4.png",
    "./img/club/5.png",
    "./img/club/6.png",
    "./img/club/7.png",
    "./img/club/8.png",
    "./img/club/9.png",
    "./img/club/10.png",
    "./img/club/11.png",
    "./img/club/12.png",
    "./img/club/13.png"];
var heart_cards = ["./img/heart/1.png",
    "./img/heart/2.png",
    "./img/heart/3.png",
    "./img/heart/4.png",
    "./img/heart/5.png",
    "./img/heart/6.png",
    "./img/heart/7.png",
    "./img/heart/8.png",
    "./img/heart/9.png",
    "./img/heart/10.png",
    "./img/heart/11.png",
    "./img/heart/12.png",
    "./img/heart/13.png"];
var spade_cards = ["./img/spade/1.png",
    "./img/spade/2.png",
    "./img/spade/3.png",
    "./img/spade/4.png",
    "./img/spade/5.png",
    "./img/spade/6.png",
    "./img/spade/7.png",
    "./img/spade/8.png",
    "./img/spade/9.png",
    "./img/spade/10.png",
    "./img/spade/11.png",
    "./img/spade/12.png",
    "./img/spade/13.png"];
var diamond_cards = ["./img/diamond/1.png",
    "./img/diamond/2.png",
    "./img/diamond/3.png",
    "./img/diamond/4.png",
    "./img/diamond/5.png",
    "./img/diamond/6.png",
    "./img/diamond/7.png",
    "./img/diamond/8.png",
    "./img/diamond/9.png",
    "./img/diamond/10.png",
    "./img/diamond/11.png",
    "./img/diamond/12.png",
    "./img/diamond/13.png"];


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
function shuffled_cards() {
    sfi = shuffle(sfi);
    for (let i = 3; i > 0; i--) {
        var j = Math.floor(Math.random() * (13));
        while (number_pairs.includes(j)) {
            j = Math.floor(Math.random() * (13));
        }
        number_pairs[i] = j;
    }
    for (let i = 0; i < 8; i++) {
        var j = Math.floor(Math.random() * (4));
        var t = "";
        if (j === 0) {
            t = heart_cards[number_pairs[sfi[i]]];
        } else if (j === 1) {
            t = diamond_cards[number_pairs[sfi[i]]];
        } else if (j === 2) {
            t = spade_cards[number_pairs[sfi[i]]];
        } else if (j === 3) {
            t = club_cards[number_pairs[sfi[i]]];
        }
        while (shuffled_card.includes(t)) {
            j = Math.floor(Math.random() * (4));
            t = "";
            if (j === 0) {
                t = heart_cards[number_pairs[sfi[i]]];
            } else if (j === 1) {
                t = diamond_cards[number_pairs[sfi[i]]];
            } else if (j === 2) {
                t = spade_cards[number_pairs[sfi[i]]];
            } else if (j === 3) {
                t = club_cards[number_pairs[sfi[i]]];
            }
        }
        shuffled_card[i] = t;
    }
}

function match(card) {
    if (tick === 0) {
        opened[0] = card;
        document.getElementById(card).disabled = true;
        tick++;
    } else {
        if (card === opened[0]) {
            return;
        }
        opened[1] = card;
        document.getElementById(card).disabled = true;
        var t = 0, s = 0;
        for (let i = 0; i < 8; i++) {
            if (opened[0] === carding[i]) {
                t = sfi[i];
            }
        }
        for (let i = 0; i < 8; i++) {
            if (opened[1] === carding[i]) {
                s = sfi[i];
            }
        }
        console.log(s+" "+t)
        if (s === t) {
            interval = setTimeout(() => {
                document.getElementById(opened[0]).disabled = true;
                document.getElementById(opened[1]).disabled = true;
            }, 500);
            correct++;
        } else {
            document.getElementById(opened[0]).disabled = false;
            document.getElementById(opened[1]).disabled = false;
            interval = setTimeout(() => {
                document.getElementById(opened[0]).classList.toggle('ani12');
                document.getElementById(opened[1]).classList.toggle('ani12');
                clearTimeout(interval);
            }, 1);        
            interval2 = setTimeout(() => {
                document.getElementById(opened[1]).style.backgroundImage = "url(\"./img/card-back/card_back.png\")"
                document.getElementById(opened[0]).style.backgroundImage = "url(\"./img/card-back/card_back.png\")"
                clearTimeout(interval2);
            }, 250);
        }
        if (correct === 4) {
            setTimeout(() => {
                document.getElementById("sd").style.visibility = "visible" // Show the message after 1 second
            }, 1000);
        }
        tick--;
    }

}
function flip(card) {
    clearInterval();
    document.getElementById(card).classList.toggle('ani11');
    for (let i = 0; i < 8; i++) {
        if (card === carding[i]) {
            console.log(shuffled_card[i]);
            interval = setTimeout(() => { document.getElementById(card).style.backgroundImage = "url(\"" + shuffled_card[i] + "\")"; clearInterval(interval)}, 250);
        }
    }

    interval = setTimeout(match(card), 500);
}
function distribute() {
    document.getElementById("d1").classList.add('ani1');
    shuffle();
    addCards();
}
function aniDis() {
    // Only one condition should be true at a time
    if (tick === 1) {
        document.getElementById("d2").classList.add('ani3');
        interval2 = setTimeout(() => { document.getElementById("card1").style.visibility = "visible" }, 500);
        tick++;
    } else if (tick === 2) {
        document.getElementById("d2").classList.add('ani4');
        interval2 = setTimeout(() => { document.getElementById("card2").style.visibility = "visible" }, 500);
        tick++;
    } else if (tick === 3) {
        document.getElementById("d2").classList.add('ani5');
        interval2 = setTimeout(() => { document.getElementById("card3").style.visibility = "visible" }, 500);
        tick++;
    } else if (tick === 4) {
        document.getElementById("d2").classList.add('ani6');
        interval2 = setTimeout(() => { document.getElementById("card4").style.visibility = "visible" }, 500);
        tick++;
    } else if (tick === 5) {
        document.getElementById("d2").classList.add('ani7');
        interval2 = setTimeout(() => { document.getElementById("card5").style.visibility = "visible" }, 500);
        tick++;
    } else if (tick === 6) {
        document.getElementById("d2").classList.add('ani8');
        interval2 = setTimeout(() => { document.getElementById("card6").style.visibility = "visible" }, 500);
        tick++;
    } else if (tick === 7) {
        document.getElementById("d2").classList.add('ani9');

        interval2 = setTimeout(() => { document.getElementById("card7").style.visibility = "visible" }, 500);
        tick++;
    } else if (tick === 8) {
        document.getElementById("d2").classList.add('ani10');
        interval2 = setTimeout(() => { document.getElementById("card8").style.visibility = "visible" }, 500);

        tick++;
    } else if (tick === 9) {
        // All cards are shown, apply the 'ani2' animation to 'd1'
        document.getElementById("d1").classList.add('ani2');
        document.getElementById("d2").style.visibility = "hidden";

        interval2 = setTimeout(() => {
            document.getElementById("d1").style.transform = "translateX(-220px)";
            document.getElementById("d1").style.visibility = "hidden";
        }, 1000);


        clearInterval(tmp);  // Stop the interval when finished
        tick = 0;  // Reset tick if needed later
    }
}

function dis() {
    shuffled_cards();
    document.getElementById("d1").classList.add('ani1');
    document.getElementById("d1").style.transform = "translateX(-90px)";
    document.getElementById("d2").classList.add('ani1');
    document.getElementById("d2").style.transform = "translateX(-90px)";
    tick++;
    tmp = setInterval(aniDis, 500);
    clearTimeout(interval);
    clearTimeout(interval2);
    clearInterval(interval);
    clearInterval(interval2);
}
dis();