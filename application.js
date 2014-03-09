$(document).ready(function() {
	//Total holds the numbers already calculated
	var total = 0;
	//Input takes the current number to be calculated into total
	var input = 0;
	//Operation takes the operation(+,-,*,/) for the current input
	var operation = "plus";

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

		if(operation == "plus") {
			total = total + input;
		};

		if(operation == "minus") {
			total = total - input;
		};

		if(operation == "multiply") {
			total = total * input;
		};

		if(operation == "divide") {
			total = total/input;
		};
	};
	screenTotal();

//Buttons and their functions
	$(".number").click(function(){
		console.log($(this).text());
		input = input*10+Number($(this).text());
		screenInput();
	});

	$("#clear").click(function() {
		total = 0;
		input = 0;
		operation = "plus";
		screenTotal();
	});

	$("#equals").click(function() {
		calculate();
		screenTotal();
		input = 0;
		operation = "plus";
		total = 0;
	});

	$("#plus").click(function() {
		calculate();
		operation = "plus";
		input = 0;
		screenTotal();
	});

	$("#minus").click(function() {
		calculate();
		operation = "minus";
		input = 0;
		screenTotal();
	});

	$("#multiply").click(function() {
		calculate();
		operation = "multiply";
		input = 0;
		screenTotal();
	});

	$("#divide").click(function() {
		calculate();
		operation = "divide";
		input = 0;
		screenTotal();
	});
});