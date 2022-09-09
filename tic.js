//Difficulty
var diff;

//From menu, setting the difficulty
function menu(x){
	document.getElementById("menu").style.display = "none";
	if(x == 0){
		diff = 1;
	}
	if(x == 1){
		diff = 2;
	}
	if(x == 2){
		diff = 3;
	}
}

//Dumb machine makes a random move
function dumb(){
	if(diff == 2){
		randomMove();
	}
}

//Smart machine checks for wins
function smart(){
	if(diff == 3){
		smartMove();
	}
}

//Smart function
function smartMove(){
	//Getting values and disables
	var b1, b2, b3, b4, b5, b6, b7, b8, b9;
	b1 = document.getElementById("b1").value;
	b2 = document.getElementById("b2").value;
	b3 = document.getElementById("b3").value;
	b4 = document.getElementById("b4").value;
	b5 = document.getElementById("b5").value;
	b6 = document.getElementById("b6").value;
	b7 = document.getElementById("b7").value;
	b8 = document.getElementById("b8").value;
	b9 = document.getElementById("b9").value;

	var b11, b22, b33, b44, b55, b66, b77, b88, b99;
	b11 = document.getElementById("b1").disabled;
	b22 = document.getElementById("b2").disabled;
	b33 = document.getElementById("b3").disabled;
	b44 = document.getElementById("b4").disabled;
	b55 = document.getElementById("b5").disabled;
	b66 = document.getElementById("b6").disabled;
	b77 = document.getElementById("b7").disabled;
	b88 = document.getElementById("b8").disabled;
	b99 = document.getElementById("b9").disabled;

	//Checking if 0 has a win then if X has a win. Then we will either win or block
	if(((b1 == "0" && b2 == "0") || (b7 == "0" && b5 == "0") || (b9 == "0" && b6 == "0")) && !b33){
		myfunc_5();
		myfunc();
	}else if(((b1 == "0" && b3 == "0") || (b5 == "0" && b8 == "0")) && !b22){
		myfunc_4();
		myfunc();
	}else if(((b2 == "0" && b3 == "0") || (b4 == "0" && b7 == "0") || (b9 == "0" && b5 == "0")) && !b11){
		myfunc_3();
		myfunc();
	}else if(((b1 == "0" && b7 == "0") || (b5 == "0" && b6 == "0")) && !b44){
		myfunc_6();
		myfunc();
	}else if(((b1 == "0" && b9 == "0") || (b2 == "0" && b8 == "0") || (b3 == "0" && b7 == "0") || (b4 == "0" && b6 == "0")) && !b55){
		myfunc_7();
		myfunc();
	}else if(((b3 == "0" && b9 == "0") || (b4 == "0" && b5 == "0")) && !b66){
		myfunc_8();
		myfunc();
	}else if(((b1 == "0" && b4 == "0") || (b8 == "0" && b9 == "0") || (b5 == "0" && b3 == "0")) && !b77){
		myfunc_9();
		myfunc();
	}else if(((b7 == "0" && b9 == "0") || (b2 == "0" && b5 == "0")) && !b88){
		myfunc_10();
		myfunc();
	}else if(((b1 == "0" && b5 == "0") || (b7 == "0" && b8 == "0") || (b3 == "0" && b6 == "0")) && !b99){
		myfunc_11();
		myfunc();
	}else if(((b1 == "X" && b2 == "X") || (b7 == "X" && b5 == "X") || (b9 == "X" && b6 == "X")) && !b33){
		myfunc_5();
		myfunc();
	}else if(((b1 == "X" && b3 == "X") || (b5 == "X" && b8 == "X")) && !b22){
		myfunc_4();
		myfunc();
	}else if(((b2 == "X" && b3 == "X") || (b4 == "X" && b7 == "X") || (b9 == "X" && b5 == "X")) && !b11){
		myfunc_3();
		myfunc();
	}else if(((b1 == "X" && b7 == "X") || (b5 == "X" && b6 == "X")) && !b44){
		myfunc_6();
		myfunc();
	}else if(((b1 == "X" && b9 == "X") || (b2 == "X" && b8 == "X") || (b3 == "X" && b7 == "X") || (b4 == "X" && b6 == "X")) && !b55){
		myfunc_7();
		myfunc();
	}else if(((b3 == "X" && b9 == "X") || (b4 == "X" && b5 == "X")) && !b66){
		myfunc_8();
		myfunc();
	}else if(((b1 == "X" && b4 == "X") || (b8 == "X" && b9 == "X") || (b5 == "X" && b3 == "X")) && !b77){
		myfunc_9();
		myfunc();
	}else if(((b7 == "X" && b9 == "X") || (b2 == "X" && b5 == "X")) && !b88){
		myfunc_10();
		myfunc();
	}else if(((b1 == "X" && b5 == "X") || (b7 == "X" && b8 == "X") || (b3 == "X" && b6 == "X")) && !b99){
		myfunc_11();
		myfunc();
	//Else, make a random move
	}else{
		randomMove();
	}
}

//Random move
function randomMove(){
	//Make array for possible moves 
	var empt = [];
	//Get disabled
	var b1, b2, b3, b4, b5, b6, b7, b8, b9;
	b1 = document.getElementById("b1").disabled;
	b2 = document.getElementById("b2").disabled;
	b3 = document.getElementById("b3").disabled;
	b4 = document.getElementById("b4").disabled;
	b5 = document.getElementById("b5").disabled;
	b6 = document.getElementById("b6").disabled;
	b7 = document.getElementById("b7").disabled;
	b8 = document.getElementById("b8").disabled;
	b9 = document.getElementById("b9").disabled;
	//If not disabled, put position in array
	if(!b1){
		empt.push(0);
	}
	if(!b2){
		empt.push(1);
	}
	if(!b3){
		empt.push(2);
	}
	if(!b4){
		empt.push(3);
	}
	if(!b5){
		empt.push(4);
	}
	if(!b6){
		empt.push(5);
	}
	if(!b7){
		empt.push(6);
	}
	if(!b8){
		empt.push(7);
	}
	if(!b9){
		empt.push(8);
	}

	//Get a randon number using length of array
	var num = Math.floor(Math.random() * empt.length);

	//Call appropriate function for whatever number is picked
	if(empt[num] == 0){
		myfunc_3();
		myfunc();
	}
	if(empt[num] == 1){
		myfunc_4();
		myfunc();
	}
	if(empt[num] == 2){
		myfunc_5();
		myfunc();
	}
	if(empt[num] == 3){
		myfunc_6();
		myfunc();
	}
	if(empt[num] == 4){
		myfunc_7();
		myfunc();
	}
	if(empt[num] == 5){
		myfunc_8();
		myfunc();
	}
	if(empt[num] == 6){
		myfunc_9();
		myfunc();
	}
	if(empt[num] == 7){
		myfunc_10();
		myfunc();
	}
	if(empt[num] == 8){
		myfunc_11();
		myfunc();
	}

}

// Function called whenever user tab on any box
function myfunc() {

	// Setting DOM to all boxes or input field
	var b1, b2, b3, b4, b5, b6, b7, b8, b9;
	b1 = document.getElementById("b1").value;
	b2 = document.getElementById("b2").value;
	b3 = document.getElementById("b3").value;
	b4 = document.getElementById("b4").value;
	b5 = document.getElementById("b5").value;
	b6 = document.getElementById("b6").value;
	b7 = document.getElementById("b7").value;
	b8 = document.getElementById("b8").value;
	b9 = document.getElementById("b9").value;

	// Checking if Player X won or not and after
	// that disabled all the other fields
	if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
		b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		window.alert('Player X won');
	}
	else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
		b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;

		window.alert('Player X won');
	}
	else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' ||
		b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		window.alert('Player X won');
	}
	else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' ||
		b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		window.alert('Player X won');
	}
	else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		window.alert('Player X won');
	}
	else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		window.alert('Player X won');
	}
	else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b9").disabled = true;
		window.alert('Player X won');
	}
	else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		window.alert('Player X won');
	}

	// Checking of Player X finish
	// Checking for Player 0 starts, Is player 0 won or
	// not and after that disabled all the other fields
	else if ((b1 == '0' || b1 == '0') && (b2 == '0' ||
		b2 == '0') && (b3 == '0' || b3 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((b1 == '0' || b1 == '0') && (b4 == '0' ||
		b4 == '0') && (b7 == '0' || b7 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((b7 == '0' || b7 == '0') && (b8 == '0' ||
		b8 == '0') && (b9 == '0' || b9 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((b3 == '0' || b3 == '0') && (b6 == '0' ||
		b6 == '0') && (b9 == '0' || b9 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((b1 == '0' || b1 == '0') && (b5 == '0' ||
		b5 == '0') && (b9 == '0' || b9 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((b3 == '0' || b3 == '0') && (b5 == '0' ||
		b5 == '0') && (b7 == '0' || b7 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((b2 == '0' || b2 == '0') && (b5 == '0' ||
		b5 == '0') && (b8 == '0' || b8 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b9").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((b4 == '0' || b4 == '0') && (b5 == '0' ||
		b5 == '0') && (b6 == '0' || b6 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		window.alert('Player 0 won');
	}

	// Checking of Player 0 finish
	// Here, Checking about Tie
	else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
		|| b2 == '0') && (b3 == 'X' || b3 == '0') &&
		(b4 == 'X' || b4 == '0') && (b5 == 'X' ||
		b5 == '0') && (b6 == 'X' || b6 == '0') &&
		(b7 == 'X' || b7 == '0') && (b8 == 'X' ||
		b8 == '0') && (b9 == 'X' || b9 == '0')) {
			document.getElementById('print')
				.innerHTML = "Match Tie";
			window.alert('Match Tie');
	}
	else {

		// Here, Printing Result
		if (flag == 1) {
			document.getElementById('print')
				.innerHTML = "Player X Turn";
		}
		else {
			document.getElementById('print')
				.innerHTML = "Player 0 Turn";
			//Calling both smart and dumb
			dumb();
			smart();
		}
	}
}

// Function to reset game
function myfunc_2() {
	location.reload();
	document.getElementById('b1').value = '';
	document.getElementById("b2").value = '';
	document.getElementById("b3").value = '';
	document.getElementById("b4").value = '';
	document.getElementById("b5").value = '';
	document.getElementById("b6").value = '';
	document.getElementById("b7").value = '';
	document.getElementById("b8").value = '';
	document.getElementById("b9").value = '';

}

// Here onwards, functions check turn of the player
// and put accordingly value X or 0
flag = 1;
function myfunc_3() {
	if (flag == 1) {
		document.getElementById("b1").value = "X";
		document.getElementById("b1").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b1").value = "0";
		document.getElementById("b1").disabled = true;
		flag = 1;
	}
}

function myfunc_4() {
	if (flag == 1) {
		document.getElementById("b2").value = "X";
		document.getElementById("b2").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b2").value = "0";
		document.getElementById("b2").disabled = true;
		flag = 1;
	}
}

function myfunc_5() {
	if (flag == 1) {
		document.getElementById("b3").value = "X";
		document.getElementById("b3").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b3").value = "0";
		document.getElementById("b3").disabled = true;
		flag = 1;
	}
}

function myfunc_6() {
	if (flag == 1) {
		document.getElementById("b4").value = "X";
		document.getElementById("b4").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b4").value = "0";
		document.getElementById("b4").disabled = true;
		flag = 1;
	}
}

function myfunc_7() {
	if (flag == 1) {
		document.getElementById("b5").value = "X";
		document.getElementById("b5").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b5").value = "0";
		document.getElementById("b5").disabled = true;
		flag = 1;
	}
}

function myfunc_8() {
	if (flag == 1) {
		document.getElementById("b6").value = "X";
		document.getElementById("b6").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b6").value = "0";
		document.getElementById("b6").disabled = true;
		flag = 1;
	}
}

function myfunc_9() {
	if (flag == 1) {
		document.getElementById("b7").value = "X";
		document.getElementById("b7").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b7").value = "0";
		document.getElementById("b7").disabled = true;
		flag = 1;
	}
}

function myfunc_10() {
	if (flag == 1) {
		document.getElementById("b8").value = "X";
		document.getElementById("b8").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b8").value = "0";
		document.getElementById("b8").disabled = true;
		flag = 1;
	}
}

function myfunc_11() {
	if (flag == 1) {
		document.getElementById("b9").value = "X";
		document.getElementById("b9").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b9").value = "0";
		document.getElementById("b9").disabled = true;
		flag = 1;
	}
}
