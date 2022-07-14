class LittleChicken extends MovableObject {
    height = 70;
    width = 70;
    y = 420;
    world;
    kickOutChicks = false;


    IMAGES_WALKING = [
        'img/littlechicken/lcw1.png',
        'img/littlechicken/lcw2.png',
        'img/littlechicken/lcw3.png'
    ];

    IMAGE_DEAD = ['img/littlechicken/lcdead.png'];


    constructor(x, world) {
        super();
        this.world = world;
        this.loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGE_DEAD);
        this.x = x;
        this.mustWalk = true;
        this.animate();
        this.movements();
    }


    animate() {
        this.animationTimer = setInterval(() => {
            if(this.isDead) { this.playAnimation(this.IMAGE_DEAD) }
            else if(this.mustWalk) { this.playAnimation(this.IMAGES_WALKING) };
        }, 150);
    }


    movements() {
        this.movementTimer = setInterval(() => {
            if(this.isDead) { this.moveObjects(0)}
            else if(this.mustWalk) { this.moveObjects(7)};
        }, 1000 / 60);
    }


    kickedOut() {
        if(!this.kickOutChicks) {
            this.kickOutChicks = true;
            this.mustWalk = false;
            this.applyGravity();
            this.speedY = 18;
            setInterval(() => {
                this.x += 7;
            }, 1000 / 60);
            setTimeout(() => {
                this.removeChick();
            }, 1500);
        }
    }


    removeChick(){
        let i = this.world.spawnedChicks.indexOf(this);
        this.world.spawnedChicks.splice(i, 1);
    }


    startLittleChicks() {
        this.animate();
        this.movements();
    }

    
    stopLittleChicks() {
        clearInterval(this.animationTimer);
        clearInterval(this.movementTimer);
    }
}