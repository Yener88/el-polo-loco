let world;
let canvas;


init = () => {
    canvas = document.getElementById('canvas');
}


startGame = () => {
    world = new World(canvas, level1);
    world.resumeGame();
    document.getElementById('startButton').classList.add('d-none');
    document.getElementById('stopButton').classList.remove('d-none');
    document.getElementById('startScreen').classList.add('d-none');
    document.getElementById('control-description').classList.remove('show-description');
}


showControlDescription = () => {
    let description = document.getElementById('control-description');
    if(!description.classList.contains('show-description')) {
        description.classList.add('show-description');
    } else {
        description.classList.remove('show-description');
    }
}


addEventListener('keydown', (event) => {
    let stopButton = document.getElementById('stopButton');
    if(event.code == 'Enter'){
        if(!stopButton.classList.contains('d-none')) {
            world.stopGame();
        } else {
            world.resumeGame();
        }
    };
})