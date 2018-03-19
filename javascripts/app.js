// Rover Object Goes Here
// ======================
var rover = {
	direction: "N",
	x: 0,
	y: 0,
	travelLog: ["(0,0)"]
}
// ======================

function turnLeft() {
	console.log("turnLeft was called!");
	
	switch (rover.direction) {
		case "N":
			rover.direction = "W";
			printRoverDirection();
			break;
		case "W":
			rover.direction = "S";
			printRoverDirection();
			break;
		case "S":
			rover.direction = "E";
			printRoverDirection();
			break;
		case "E":
			rover.direction = "N";
			printRoverDirection();
			break;
	
		default:
			console.log("Error: Unable to turn left!");
			break;
	}
}

function turnRight() {
	console.log("turnRight was called!");

	switch (rover.direction) {
		case "N":
			rover.direction = "E";
			printRoverDirection();
			break;
		case "W":
			rover.direction = "N";
			printRoverDirection();
			break;
		case "S":
			rover.direction = "W";
			printRoverDirection();
			break;
		case "E":
			rover.direction ="S";
			printRoverDirection();
			break;
	
		default:
			console.log("Error: Unable to turn right!");
			break;
	}
}

function moveForward() {
	console.log("moveForward was called!")

	if (boundsCheck() > 0) { return; }

	switch (rover.direction) {
		case "N":
			rover.y -= 1
			console.log("Rover position is now " + rover.x + "," + rover.y + ".");
			break;
		case "S":
			rover.y += 1
			console.log("Rover position is now " + rover.x + "," + rover.y + ".");
			break;
		case "W":
			rover.x -= 1
			console.log("Rover position is now " + rover.x + "," + rover.y + ".");
			break;
		case "E":
			rover.x += 1
			console.log("Rover position is now " + rover.x + "," + rover.y + ".");
			break;

		default:
			console.log("Error: Rover direction could not be determined!");
			break;
	}
	
	logPosition();
}

function printRoverDirection() {
	switch (rover.direction) {
		case "N":
			console.log("Rover is now facing North.");
			break;
		case "W":
			console.log("Rover is now facing West.");
			break;
		case "S":
			console.log("Rover is now facing South.");
			break;
		case "E":
			console.log("Rover is now facing East.");
			break;
	
		default:
			console.log("Error: Rover direction could not be determined!");
			break;
	}
}

function execCommands(commandString) {
	for(var i = 0; i < commandString.length; i++) {
		var letter = commandString[i];
		switch (letter) {
			case "f": 
				moveForward();
				break;
			case "r": 
				turnRight();
				break;
			case "l": 
				turnLeft();
				break;
			default: 
				console.log("Error: Unknown command at character " + i + ".");
				break;
		}
	}
	console.log(rover.travelLog);
}

function logPosition() {
	let currentPosition = "(" + rover.x + "," + rover.y + ")";
	rover.travelLog.push(currentPosition);
}

function boundsCheck() {
	switch (rover.direction) {
		case "N":
			if ((rover.y - 1) < 0) {
				console.log("The rover cannot move any further North!");
				return 1;
			} 
			if ((rover.y - 1) >= 0) {
				return 0;
			}
			break;
		case "W":
			if ((rover.x - 1) < 0) {
				console.log("The rover cannot move any further West!");
				return 1;
			}
			if ((rover.x -1) >= 0) {
				return 0;
			}
			break;
		case "E":
			if ((rover.x + 1) > 9) {
				console.log("The rover cannot move any further East!");
				return 1;
			}
			if ((rover.x + 1) <= 9) {
				return 0;
			}
			break;
		case "S":
			if ((rover.y + 1) > 9) {
				console.log("The rover cannot move any further South!");
				return 1;
			}
			if ((rover.y + 1) <= 9) {
				return 0;
			}
			break; 
			
			//Theoretically, we should never reach the default case but it's here for what Captain Hook would call "reasons of good form."

			default: 
				console.log("Something is seriously wrong.");
				break;
	}
}