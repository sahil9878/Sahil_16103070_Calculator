var count = 0;
function clearDisplay(){
    document.getElementById("display-bar").innerHTML = "";
	count = 0;
}

function display(userInput){
if(count <=16){
    document.getElementById("display-bar").innerHTML += userInput;
	count++;
	}
}

function calculate(){
    var answer = eval(document.getElementById("display-bar").innerHTML);
    document.getElementById("display-bar").innerHTML = answer;
}
