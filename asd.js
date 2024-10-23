// var [] card_pattern = {}
var tmp;
var interval, interval2;
var tick = 0;
var club_cards = ["./club/1.png",
    "./club/2.png",
    "./club/3.png",
    "./club/4.png",
    "./club/5.png",
    "./club/6.png",
    "./club/7.png",
    "./club/8.png",
    "./club/9.png",
    "./club/10.png",
    "./club/11.png",
    "./club/12.png",
"./club/13.png"];
var heart_cards = ["./heart/1.png",
    "./heart/2.png",
    "./heart/3.png",
    "./heart/4.png",
    "./heart/5.png",
    "./heart/6.png",
    "./heart/7.png",
    "./heart/8.png",
    "./heart/9.png",
    "./heart/10.png",
    "./heart/11.png",
    "./heart/12.png",
"./heart/13.png"];
var spade_cards = ["./spade/1.png",
    "./spade/2.png",
    "./spade/3.png",
    "./spade/4.png",
    "./spade/5.png",
    "./spade/6.png",
    "./spade/7.png",
    "./spade/8.png",
    "./spade/9.png",
    "./spade/10.png",
    "./spade/11.png",
    "./spade/12.png",
"./spade/13.png"];
var diamond_cards = ["./diamond/1.png",
    "./diamond/2.png",
    "./diamond/3.png",
    "./diamond/4.png",
    "./diamond/5.png",
    "./diamond/6.png",
    "./diamond/7.png",
    "./diamond/8.png",
    "./diamond/9.png",
    "./diamond/10.png",
    "./diamond/11.png",
    "./diamond/12.png",
"./diamond/13.png"];


function shuffle() { }
function addCards() { }
function match(c1, c2) {

}
function flip(card) {
    document.getElementById(card).classList.toggle('ani11');
    document.getElementById(card).style.backgroundImage="url()";
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
        interval2 = setTimeout(() => { document.getElementById("card1").style.visibility = "visible" }, 1000);
        tick++;
    } else if (tick === 2) {
        document.getElementById("d2").classList.add('ani4');
        interval2 = setTimeout(() => { document.getElementById("card2").style.visibility = "visible" }, 1000);
        tick++;
    } else if (tick === 3) {
        document.getElementById("d2").classList.add('ani5');
        interval2 = setTimeout(() => { document.getElementById("card3").style.visibility = "visible" }, 1000);
        tick++;
    } else if (tick === 4) {
        document.getElementById("d2").classList.add('ani6');
        interval2 = setTimeout(() => { document.getElementById("card4").style.visibility = "visible" }, 1000);
        tick++;
    } else if (tick === 5) {
        document.getElementById("d2").classList.add('ani7');
        interval2 = setTimeout(() => { document.getElementById("card5").style.visibility = "visible" }, 1000);
        tick++;
    } else if (tick === 6) {
        document.getElementById("d2").classList.add('ani8');
        interval2 = setTimeout(() => { document.getElementById("card6").style.visibility = "visible" }, 1000);
        tick++;
    } else if (tick === 7) {
        document.getElementById("d2").classList.add('ani9');

        interval2 = setTimeout(() => { document.getElementById("card7").style.visibility = "visible" }, 1000);
        tick++;
    } else if (tick === 8) {
        document.getElementById("d2").classList.add('ani10');
        interval2 = setTimeout(() => { document.getElementById("card8").style.visibility = "visible" }, 1000);

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
    document.getElementById("d1").classList.add('ani1');
    document.getElementById("d1").style.transform = "translateX(-90px)";
    document.getElementById("d2").classList.add('ani1');
    document.getElementById("d2").style.transform = "translateX(-90px)";

    tick++;  
    tmp = setInterval(aniDis, 1000); 
}
dis();