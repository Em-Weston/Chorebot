let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

const botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
const beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';
const closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;

const startButton = document.getElementById('start');

isClicked = (door) => {
        if (door.src === closedDoorPath) {
            return false;
        } else {
            return true;
        }
}

playDoor = () => {
    numClosedDoors--; 
    // HAVE relied on JS accepting 0 as false, can change this too: 
    //  if (numClosedDoors === 0)
    if (!numClosedDoors) {
        gameOver('win');
    } else {
        return;
    }
}

randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random()* numClosedDoors);
    // console.log(choreDoor);
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

doorImage1.onclick = () => {
    if (!isClicked(doorImage1)) {
        doorImage1.src = openDoor1;
        playDoor();
    } else {
        return;
    }
    
};

doorImage2.onclick = () => {
    if (!isClicked(doorImage2)) {
        doorImage2.src = openDoor2;
        playDoor();
    } else {
        return; 
    }
}

doorImage3.onclick = () => {
    if (!isClicked(doorImage3)) {
        doorImage3.src = openDoor3;
        playDoor();
    } else {
        return;
    }
}

const gameOver = (status) => {
    if (status === 'win') {
        startButton.innerHTML = 'You win! Play again?';
    }
}

randomChoreDoorGenerator();