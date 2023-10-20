var txt;

function preload() {
    txt =loadStrings("rainbow.txt");
}

function setup() {
    noCanvas();
    console.log(txt);
}