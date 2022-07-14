class ThrowableObject extends MovableObject {
    height = 90;
    width = 90;
    world;
    splashTimer;
    bottleThrown = true;
    objectHit = false;
    stopSplash = false;
    objectHit = false;
    soundBSmash = new Audio('audio/bottlesmash.mp3');

    IMAGES_BOTTLE = [
        'img/collectableobjects/bottle/throw/throwanimation1.png',
        'img/collectableobjects/bottle/throw/throwanimation2.png',
        'img/collectableobjects/bottle/throw/throwanimation3.png',
        'img/collectableobjects/bottle/throw/throwanimation4.png'
    ];


    IMAGES_SPLASH = [
        'img/collectableobjects/bottle/splash/splashanimation1.png',
        'img/collectableobjects/bottle/splash/splashanimation2.png',
        'img/collectableobjects/bottle/splash/splashanimation3.png',
        'img/collectableobjects/bottle/splash/splashanimation4.png'
    ];


    constructor(x, y, world, direction) {
        super();
        this.world = world;
        this.loadImage('img/collectableobjects/bottle/throw/throwanimation1.png');
        this.loadImages(this.IMAGES_BOTTLE);
        this.loadImages(this.IMAGES_SPLASH);
        this.direction = direction;
        this.x = x;
        this.y = y;
        this.currentImage = 1;
        this.speedY = 13;
        this.applyGravity();
        this.flyingBottle();
        this.bottleAnimation();
    }


    flyingBottle() {
        this.movementTimer = setInterval(() => {
            this.x += 11 * this.direction;
            if (this.objectHit || !this.isAboveGround()) {
                this.x -= 11;
            }
        }, 1000 / 60);
    }


    bottleAnimation() {
        this.animationTimer = setInterval(() => {
            if (this.bottleThrown && this.isAboveGround() && !this.objectHit) { this.playAnimation(this.IMAGES_BOTTLE) }
            else if (this.objectHit || !this.isAboveGround()) {
                this.playAnimation(this.IMAGES_SPLASH);
                this.stopSplash = true;
                clearInterval(this.gravityTimer);
            }
        }, 150);
        this.splashTimer = setInterval(() => {
            this.stopSplashAnimation();
            this.checkBottleCollisionWithChicken();
            this.checkBottleCollisionWithBoss();
            this.checkBottleCollisionWithLittleChicken()
        }, 1000 / 60);
    }


    removeBottle() {
        let i = this.world.throwableObjects.indexOf(this);
        this.world.throwableObjects.splice(i, 1);
    }


    stopSplashAnimation() {
        if (this.stopSplash) {
            this.stopSplash = false;
            this.currentImage = 0;
            this.soundBSmash.play();
            clearInterval(this.splashTimer);
            setTimeout(() => {
                this.objectHit = false;
                this.removeBottle();
            }, 500);
        }
    }


    checkBottleCollisionWithChicken() {
        this.world.level.chicken.forEach(chicken => {
            if (this.isColliding(chicken) && !chicken.isDead) {
                this.objectHit = true;
                chicken.kickedOut();
            }
        })
    }


    checkBottleCollisionWithBoss() {
        this.world.level.boss.forEach(boss => {
            if (this.isColliding(boss) && !boss.mustWalk) {
                this.objectHit = true;
                boss.gotHit();
            }
        })
    }


    checkBottleCollisionWithLittleChicken() {
        this.world.spawnedChicks.forEach(chick => {
            if (this.isColliding(chick) && !chick.isDead) {
                this.objectHit = true;
                chick.kickedOut();
            }
        })
    }


    startBottle() {
        this.applyGravity();
        this.flyingBottle();
        this.bottleAnimation();
    }


    stopBottle() {
        clearInterval(this.gravityTimer);
        clearInterval(this.movementTimer);
        clearInterval(this.animationTimer);
        clearInterval(this.splashTimer);
    }
}

