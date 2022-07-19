class Character extends MovableObject {
    x = 150;
    y = 150;
    height = 340;
    width = 170;
    world;
    health = 100;
    IMAGES_IDLE = [
        'img/pepe/idle/i1.png',
        'img/pepe/idle/i2.png',
        'img/pepe/idle/i3.png',
        'img/pepe/idle/i4.png',
        'img/pepe/idle/i5.png',
        'img/pepe/idle/i6.png',
        'img/pepe/idle/i7.png',
        'img/pepe/idle/i8.png',
        'img/pepe/idle/i9.png',
        'img/pepe/idle/i10.png'
    ];


    IMAGES_WALKING = [
        'img/pepe/walk/w21.png',
        'img/pepe/walk/w22.png',
        'img/pepe/walk/w23.png',
        'img/pepe/walk/w24.png',
        'img/pepe/walk/w25.png',
        'img/pepe/walk/w26.png'
    ];


    IMAGES_JUMPING = [
        'img/pepe/jump/j31.png',
        'img/pepe/jump/j32.png',
        'img/pepe/jump/j33.png',
        'img/pepe/jump/j34.png',
        'img/pepe/jump/j35.png',
        'img/pepe/jump/j36.png',
        'img/pepe/jump/j37.png',
        'img/pepe/jump/j38.png',
        'img/pepe/jump/j39.png',
        'img/pepe/jump/j40.png'
    ];


    IMAGES_HURTING = [
        'img/pepe/hurt/h41.png',
        'img/pepe/hurt/h42.png',
        'img/pepe/hurt/h43.png'
    ];


    IMAGES_DEAD = [
        'img/pepe/dead/d51.png',
        'img/pepe/dead/d52.png',
        'img/pepe/dead/d53.png',
        'img/pepe/dead/d54.png',
        'img/pepe/dead/d55.png',
        'img/pepe/dead/d56.png',
        'img/pepe/dead/d57.png'
    ];

    soundWalk = new Audio('audio/walk.mp3');
    soundJump = new Audio('audio/jump.mp3');
    soundHurt = new Audio('audio/hurt.mp3');
    soundKill = new Audio('audio/kill.mp3');
    soundCoin = new Audio('audio/coin.mp3');
    soundLife = new Audio('audio/life.mp3');
    soundLose = new Audio('audio/lose.mp3');
    soundTheme = new Audio('audio/theme.mp3');
    soundBCollect = new Audio('audio/bottlecollect.mp3');
    soundBThrow = new Audio('audio/bottlethrow.mp3');


    constructor(world) {
        super();
        this.world = world;
        this.loadImage('img/pepe/walk/w21.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_HURTING);
        this.loadImages(this.IMAGES_DEAD);
    }


    characterControl() {
        this.movementTimer = setInterval(() => {
            if (!this.world.keyboard.right && !this.world.keyboard.left && !this.world.keyboard.up) {
                this.mustIdle = true;
                this.mustWalk = false;
            }
            if (this.world.keyboard.right || this.world.keyboard.left) {
                if (this.world.keyboard.right) { this.direction = 1 }
                else { this.direction = -1 }
                this.mustIdle = false;
                this.mustWalk = true;
                this.walk();
            }
            if (this.world.keyboard.up && !this.isAboveGround()) {
                this.mustIdle = false;
                this.mustWalk = false;
                this.mustJump = true;
                this.jump();
                this.soundJump.play();
            }
            if (this.isAboveGround()) {
                this.mustIdle = false;
                this.mustWalk = false;
                this.mustJump = true;
            } else { this.mustJump = false }
            if (this.world.keyboard.space) {
                this.throw();
            }
            this.cameraFocus();
        }, 1000 / 60);
    }


    characterAnimation() {
        this.animationTimer = setInterval(() => {
            if (this.isDead) {
                this.playAnimation(this.IMAGES_DEAD);
                this.gameOver();
                this.soundLose.play();
                this.soundWalk.pause();
            }
            else if (this.isHurt) {
                this.playAnimation(this.IMAGES_HURTING);
                this.soundWalk.pause();
            }
            else if (this.mustIdle) {
                this.playAnimation(this.IMAGES_IDLE);
                this.soundWalk.pause();
            }
            else if (this.mustWalk) {
                this.playAnimation(this.IMAGES_WALKING);
                this.soundWalk.play();
                this.soundWalk.loop = true;
            }
            else if (this.mustJump) {
                this.playAnimation(this.IMAGES_JUMPING);
                this.soundWalk.pause();
            }
        }, 150);
    }


    gameOver() {
        setTimeout(() => {
            clearInterval(this.animationTimer);
            this.world.stopGame();
            document.getElementById('gameOver').classList.add('showResult');
            document.getElementById('restartButton').classList.add('showResult');
            document.getElementById('resumeButton').classList.add('d-none');
            document.getElementById('lose-text').classList.remove('d-none');
        }, 1000);
    }


    walk() {
        if (this.x < 153) {
            this.x = 153;
        }
        if (this.x >= 153 && this.x < this.world.bossFight_x) {
            this.moveCharacter(3);
        }
        if (this.x >= this.world.bossFight_x) {
            this.x = this.world.bossFight_x - 1;
        }
    }


    jump() {
        this.currentImage = 3;
        this.speedY = 20;
    }


    hit() {
        if (!this.isHurt) {
            this.isHurt = true;
            this.soundHurt.play();
            this.health -= 20;
            this.world.healthbar.setHealth();
            console.log('lost Health:' + this.health);
            if (this.health <= 0) {
                this.isDead = true;
            } else {
                setTimeout(() => {
                    this.isHurt = false;
                }, 1500);
            }
        }
    }


    throw() {
        if (!this.bottleThrown && this.world.bottleCounter.counter > 0) {
            this.bottleThrown = true;
            this.soundBThrow.play();
            this.world.throwableObjects.push(new ThrowableObject(this.x + 100, this.y + 100, this.world, this.direction));
            this.world.bottleCounter.counter--;
            setTimeout(() => {
                this.bottleThrown = false;
            }, 500);
        }
    }


    cameraFocus() {
        this.world.camera_x = -this.x + 150;
    }


    checkCollisions() {
        this.collisionTimer = setInterval(() => {
            this.collisionWithChicken();
            this.collisionWithBoss();
            this.collisionWithLittleChicken();
            this.collectBottles();
            this.collectCoins();
            this.collectHealth();
        }, 1000 / 60);
    }


    collisionWithChicken() {
        this.world.level.chicken.forEach((chicken) => {
            if (this.isColliding(chicken) && !chicken.isDead && !this.isAboveGround()) {
                this.hit();
            }
            if (this.jumpsOnTop(chicken) && this.speedY < 0) {
                chicken.isDead = true;
                this.soundKill.play();
            }
        })
    }


    collisionWithBoss() {
        this.world.level.boss.forEach((boss) => {
            if (this.isColliding(boss) && !boss.isDead && !this.isAboveGround()) {
                this.hit();
            }
        })
    }


    collisionWithLittleChicken() {
        this.world.spawnedChicks.forEach((chick) => {
            if (this.isColliding(chick) && !chick.isDead && !this.isAboveGround()) {
                this.hit();
            }
            if (this.jumpsOnTop(chick) && this.speedY < 0) {
                chick.isDead = true;
                this.soundKill.play();
            }
        })
    }


    collectBottles() {
        this.world.level.bottles.forEach((bottle) => {
            if (this.isColliding(bottle)) {
                this.world.bottleCounter.counter++;
                this.soundBCollect.play();
                bottle.removeBottle();
            }
        })
    }


    collectCoins() {
        this.world.level.coins.forEach((coin) => {
            if (this.isColliding(coin)) {
                this.world.coinCounter.counter++;
                this.soundCoin.play();
                coin.removeCoin();
            }
        })
    }


    collectHealth() {
        this.world.level.health.forEach((health) => {
            if (this.isColliding(health)) {
                if (this.health <= 90) {
                    this.health += 10;
                    health.removeHealth();
                    this.world.healthbar.setHealth();
                    this.soundLife.play();
                }
            }
        })

    }


    startCharacter() {
        this.applyGravity();
        this.characterControl();
        this.characterAnimation();
        this.checkCollisions();
        this.soundTheme.play();
        this.soundTheme.loop = true;
    }


    stopCharacter() {
        clearInterval(this.gravityTimer);
        clearInterval(this.animationTimer);
        clearInterval(this.collisionTimer);
        clearInterval(this.movementTimer);
        this.soundTheme.pause();
    }
}