const display=document.getElementById("display");

function appendToDisplay(input){
    display.value += input;

}
function cleardisplay(){
    display.value ="";

}
function cal(){
    display.value = eval(display.value);

}