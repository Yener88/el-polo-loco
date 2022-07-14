class Keyboard {
    up = false;
    right = false;
    left = false;
    space = false;
    world;


    constructor(world){
        this.world = world;
    }


    listenerDown = addEventListener('keydown', (event) => {
        if(event.code == 'ArrowUp'){
            this.up = true;
        };
        if(event.code == 'ArrowRight'){
            this.right = true;
        };
        if(event.code == 'ArrowLeft'){
            this.left = true;
        };
        if(event.code == 'Space'){
            this.space = true;
        };
    })

    
    listenerUp = addEventListener('keyup', (event) => {
        if(event.code == 'ArrowUp'){
            this.up = false;
        };
        if(event.code == 'ArrowRight'){
            this.right = false;
        };
        if(event.code == 'ArrowLeft'){
            this.left = false;
        };
        if(event.code == 'Space'){
            this.space = false;
        };
    })
}