
document.getElementById("mainText").innerHTML = "You come to the end of the glade and have two paths before you. The one on the left looks like it has been taken recently: you see signs of recent foot traffic. The one on the right is barren save for several speckles of a mottled brown colour: what looks to be old bloodstains.";

document.getElementById("title").innerHTML = "The First Choice.";
 
 var buttonOne = document.getElementById("op1");
 var buttonTwo = document.getElementById("op2");
 
 function hideButtons(){
 	buttonOne.style.display = "none";
    buttonTwo.style.display = "none";
 }

 buttonOne.innerHTML ="take left path";
 buttonTwo.innerHTML ="take right path";

function optionOne(){
    document.getElementById("mainText").innerHTML = "you have taken the left path!";
    hideButtons();
};   

function optionTwo(){
    document.getElementById("mainText").innerHTML = "you have taken the right path!";
    hideButtons();
}; 
