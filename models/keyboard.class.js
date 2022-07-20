class Keyboard {
    up = false;
    right = false;
    left = false;
    space = false;
    world;


    constructor(world){
        this.world = world;
        this.bindBtnPressEvents();
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

    bindBtnPressEvents() {
        document.getElementById('btnLeft').addEventListener('touchstart', (e) =>{
            e.preventDefault();
            this.left = true;
        });
        document.getElementById('btnLeft').addEventListener('touchend', (e) =>{
            e.preventDefault();
            this.left = false;
        });
        document.getElementById('btnRight').addEventListener('touchstart', (e) =>{
            e.preventDefault();
            this.right = true;
        });
        document.getElementById('btnRight').addEventListener('touchend', (e) =>{
            e.preventDefault();
            this.right = false;
        });
        document.getElementById('btnJump').addEventListener('touchstart', (e) =>{
            e.preventDefault();
            this.up = true;
        });
        document.getElementById('btnJump').addEventListener('touchend', (e) =>{
            e.preventDefault();
            this.up = false;
        });
        document.getElementById('btnThrow').addEventListener('touchstart', (e) =>{
            e.preventDefault();
            this.space = true;
        });
        document.getElementById('btnThrow').addEventListener('touchend', (e) =>{
            e.preventDefault();
            this.space = false;
        });
    }
}