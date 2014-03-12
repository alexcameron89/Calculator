$(document).ready(function() {
	//Total holds the numbers already calculated
	var total = 0;
	//Input takes the current number to be calculated into total
	var input = 0;
	//Operation takes the operation(+,-,*,/) for the current input
	var operation = "+";

	var justCalculated = false;

	//Shows the total
	var screenTotal = function() {
			$(".screen").text(total);
	}

	//Shows the current input
	var screenInput = function() {
			$(".screen").text(input);
	}

	//Based on operation, calculates the input into total
	var calculate = function() {

		if(operation == "+") {
			total = total + input;
		};

		if(operation == "-") {
			total = total - input;
		};

		if(operation == "x") {
			total = total * input;
		};

		if(operation == "/") {
			total = total/input;
		};
	};
	screenTotal();

//Buttons and their functions
	$(".number").click(function(){
		if(justCalculated == true) {
			input = 0;
			total = 0;
			operation = "+";
			justCalculated = false;
		};
		input = input*10+Number($(this).text());
		screenInput();
	});

	$("#clear").click(function() {
		total = 0;
		input = 0;
		operation = "+";
		justCalculated = false;
		screenTotal();
	});

	$("#equals").click(function() {
		calculate();
		screenTotal();
		justCalculated = true;
	});

	$(".operator").click(function() {
		if(justCalculated == true){
			input = 0;
			operation = $(this).text();
			justCalculated = false;
		} else {
		calculate();
		operation = $(this).text();
		input = 0;
		screenTotal();
			};
	});
});