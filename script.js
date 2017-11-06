var  disp=document.getElementById("display-bar"); //display
var empty = false; //checks if screen is empty or not	
var count = 0; //counts the number of digits
var answer = ""; //stores the answer
function clearDisplay(){
    disp.value = "";
	count = 0;
	answer = "";
}

function display(Input)
{
	if(count <=16) //digits inside limit
	{
		if(empty == true) //screen should empty
		{
			if(answer == "") //no stored answer ie. first input (discarding operators only)
			{
				if(disp.value.length==1 &&(Input =='+' || Input == '-' || Input == '/' || Input =='*')) 
				{
					disp.value = "";
					count = 0;
				}
				else
				{
					count++;
					disp.value += Input;
				}
			}
			else //stored answer ie after calculating answer (operators are used, numbers get a new input)
			{
				if(Input =='+' || Input == '-' || Input == '/' || Input =='*')
				{
					disp.value = answer;
					count++;
					disp.value += Input;
				}
				else
				{
					disp.value = "";
					count = 0;
					count++;
					disp.value += Input;
				}
			}
		}
		else // screen not empty(general usage)
		{
			disp.value += Input;
			count++;
		}
		empty = false;
	}
}

function calculate(){
    answer = eval(disp.value);
    disp.value = answer;
	count = disp.value.length;;
	empty = true;
}
function backspace()
{
	var value = disp.value;
    disp.value = value.substr(0, value.length - 1);
}

document.addEventListener("keydown", function(event) {
   
    var kp;
    if(event.which >= 48 && event.which<=57)
	{
		  kp =  event.which - 48;
		  display(kp);
    }
    else if(event.which== 8){
      backspace();
    }
    else if(event.which>= 96 && event.which <= 105 ){
      kp = event.which - 96;
      display(kp);
    }
    else if(event.which == 13 || event.which==187 ){
      calculate();}
    else if (event.which == 107||event.which == 187)
        display('+');
    else if (event.which == 109 || event.which == 189)
        display('-');
    else if (event.which == 111 ||event.which == 191)
        display('/');
    else if (event.which == 106||event.which == 56)
        display('*');
    else if(event.which == 110||event.which == 190)
        display('.');
});
