
document.getElementById("mainText").innerHTML = "You come to the end of the glade and have two paths before you. The one on the left looks like it has been taken recently: you see signs of recent foot traffic. The one on the right is barren save for several speckles of a mottled brown colour: what looks to be old bloodstains.";

document.getElementById("title").innerHTML = "The First Choice."



function optionOne(){
    document.getElementById("mainText").innerHTML = "you have taken the left path!";
};   

function optionTwo(){
    document.getElementById("mainText").innerHTML = "you have taken the right path!";
}; 

document.getElementById("op1").innerHTML ="take left path";
document.getElementById("op2").innerHTML ="take right path";