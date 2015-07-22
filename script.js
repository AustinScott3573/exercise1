function divide(num1) {
	return num1 / 10;
}

function multiply(num2) {
	return num2 * 5;
}

function input() {
		var userValue = document.getElementById("num1").value;
		if (userValue === "") {
			alert("Please insert number");

		} else if (userValue >= 10000) {
			document.getElementById("result").innerHTML = divide(userValue);

		} else if (userValue <= 10000) 
			 document.getElementById("result").innerHTML = multiply(userValue);
			 	
		}
		

































