// Global variables, grabbing the HTML door images. 
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
//  Global variables, containing the possible door images
const botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
const beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';
const closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';
//  global variables, one counting down the number of doors to open and 3 empty door variables. 
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
// Global variable grabbing the start button
const startButton = document.getElementById('start');
// Global variable to check if the player is currently playing 
let currentlyPlaying = true;
// Function checking if the door opened contains the botPath. returning true or false
const isBot = (door) => {
    // console.log('checking Bot');
    if(door.src === botDoorPath) {
        // console.log('this is a bot')
        return true; 
    } else {
        // console.log('this is not a bot')
        return false; 
    }
}
//  Function checking if the door has been opened previously. 
const isClicked = (door) => {
        if (door.src === closedDoorPath) {
            return false;
        } else {
            return true;
        }
}
// function, counting down your 3 goes. if you get 3 goes, no bot, you win. if you get bot, you loose, else continue.
const playDoor = (door) => {
    numClosedDoors--; 
    // console.log(numClosedDoors);
    // HAVE relied on JS accepting 0 as false, can change this too: 
    //  if (numClosedDoors === 0)
    if (numClosedDoors === 0) {
        gameOver('win');
    } else if (isBot(door)) {
        gameOver();
    }
}
//  function randomly moving the door images. 
const randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random()* numClosedDoors);
    // console.log(`this is the choreDoor random number ${choreDoor}`);
    if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else if (choreDoor === 1) {
        openDoor2 = botDoorPath; 
        openDoor1 = spaceDoorPath;
        openDoor3 = beachDoorPath;
    } else {
        openDoor3 = botDoorPath;
        openDoor2 = spaceDoorPath;
        openDoor1 = beachDoorPath;
    }   
}
//  onclick function, 
doorImage1.onclick = () => {
        if (currentlyPlaying && !isClicked(doorImage1)) {
             doorImage1.src = openDoor1;
             playDoor(doorImage1);
        }
};

doorImage2.onclick = () => {
    // if (!isClicked(doorImage2)) {
    //     doorImage2.src = openDoor2;
    //     playDoor(doorImage2);
        if (currentlyPlaying && !isClicked(doorImage2)) {
            doorImage2.src = openDoor2;
            playDoor(doorImage2);
        }
};

doorImage3.onclick = () => {
    // if (!isClicked(doorImage3)) {
    //     doorImage3.src = openDoor3;
    //     playDoor(doorImage3);
        if(currentlyPlaying && !isClicked(doorImage3)) {
            doorImage3.src = openDoor3;
            playDoor(doorImage3);
        }
};

startButton.onclick = () => {
    if(!currentlyPlaying) {
    startRound();
    }
}

startRound = () => {
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    numClosedDoors = 3;
    startButton.innerHTML = 'Good luck!';
    currentlyPlaying = true;
    randomChoreDoorGenerator();
}

gameOver = (status) => {
    if (status === 'win') {
        startButton.innerHTML = 'You win! Play again?'; 
    } else {
        startButton.innerHTML = 'Game Over! Play again?';
    }
    currentlyPlaying = false; 
};

startRound()