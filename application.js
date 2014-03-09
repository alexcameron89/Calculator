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

	$("#2").click(function(){
		input = input*10+2;
		screenInput();
	});

	$("#3").click(function(){
		input = input*10+3;
		screenInput();
	});

	$("#4").click(function(){
		input = input*10+4;
		screenInput();
	});

	$("#5").click(function(){
		input = input*10+5;
		screenInput();
	});

	$("#6").click(function(){
		input = input*10+6;
		screenInput();
	});

	$("#7").click(function(){
		input = input*10+7;
		screenInput();
	});

	$("#8").click(function(){
		input = input*10+8;
		screenInput();
	});

	$("#9").click(function(){
		input = input*10+9;
		screenInput();
	});

	$("#0").click(function(){
		input = input*10;
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



/*Var Total
Var Input
Var Operation = Plus

On 1, multiply input by 10 & add 1
On 2, multiply input by 10 & add 2
On 3, multiply input by 10 & add 3
On 4, multiply input by 10 & add 4
On 5, multiply input by 10 & add 5
On 6, multiply input by 10 & add 6
On 7, multiply input by 10 & add 7
On 8, multiply input by 10 & add 8
On 9, multiply input by 10 & add 9
On 0, multiply input by 10 & add 0

On addition, take input on current operation, and calculate into total. Then change operation to plus.
On subtraction, take input on current operation, and calculate into total. Then change operation to minus.
On division, take input on current operation, and calculate into total. Then change operation to divide.
On multiplication, take input on current operation, and calculate into total. Then change operation to multiply.
On equals, take input on current operation, and calculate into total. Show Total.

On C, clear Input, clear total, and change operation to plus.*/