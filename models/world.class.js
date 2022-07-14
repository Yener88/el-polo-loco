class World {
    character = new Character(this);
    keyboard = new Keyboard(this);
    healthbar = new Healthbar(this);
    bossHealthbar = [];
    spawnedChicks = [];
    bottleCounter = new Bottlecounter(this);
    coinCounter = new Coincounter(this);
    level;
    bossFight_x = 1500;
    canvas;
    ctx;
    camera_x;
    throwableObjects = [];


    constructor(canvas, level1) {
        this.canvas = canvas;
        this.level = level1;
        this.ctx = canvas.getContext('2d');
    }


    resumeGame() {
        document.getElementById('stopButton').classList.remove('d-none');
        document.getElementById('resumeButton').classList.add('d-none');
        this.drawWorld();
        this.setWorld();
        this.startCharacter();
        this.startChicken();
        this.startLittleChicken();
        this.startBoss();
        this.startClouds();
        this.startBottle();
    }


    stopGame() {
        document.getElementById('stopButton').classList.add('d-none');
        document.getElementById('resumeButton').classList.remove('d-none');
        this.stopCharacter();
        this.stopChicken();
        this.stopLittleChicken();
        this.stopBoss();
        this.stopClouds();
        this.stopBottle();
    }

    
    restartGame() {
        location.reload();
    }


    startCharacter() {
        this.character.startCharacter();
    }


    stopCharacter() {
        this.character.stopCharacter();
    }


    startChicken() {
        this.level.chicken.forEach((chicken) => {
            chicken.startChicken();
        })
    }


    stopChicken() {
        this.level.chicken.forEach((chicken) => {
            chicken.stopChicken();
        })
    }


    startLittleChicken() {
        this.spawnedChicks.forEach((chick) => {
            chick.startLittleChicks();
        })
    }


    stopLittleChicken() {
        this.spawnedChicks.forEach((chick) => {
            chick.stopLittleChicks();
        })
    }


    startClouds() {
        this.level.clouds.forEach((cloud) => {
            cloud.startClouds();
        })
    }


    stopClouds() {
        this.level.clouds.forEach((cloud) => {
            cloud.stopClouds();
        })
    }


    startBoss() {
        this.level.boss.forEach((boss) => {
            boss.startBoss();
        })
    }


    stopBoss() {
        this.level.boss.forEach((boss) => {
            boss.stopBoss();
        })
    }


    startBottle() {
        this.throwableObjects.forEach((bottle) => {
            bottle.startBottle();
        })
    }


    stopBottle() {
        this.throwableObjects.forEach((bottle) => {
            bottle.stopBottle();
        })
    }


    drawWorld() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.drawArray(this.level.backgroundObjects);
        this.drawArray(this.level.clouds);
        this.drawArray(this.level.bottles);
        this.drawArray(this.level.coins);
        this.drawArray(this.level.health);
        this.ctx.translate(-this.camera_x, 0);
        this.healthbar.drawObject(this.ctx);
        this.drawArray(this.bossHealthbar);
        this.bottleCounter.drawObject(this.ctx);
        this.drawNumber();
        this.coinCounter.drawObject(this.ctx);
        this.ctx.translate(this.camera_x, 0);
        this.drawArray(this.level.chicken);
        this.drawArray(this.level.boss);
        this.drawArray(this.spawnedChicks);
        this.drawBottles();
        this.drawCharacter();
        this.ctx.translate(-this.camera_x, 0);
        requestAnimationFrame(this.drawWorld.bind(this));
    }


    drawArray(levelArray) {
        levelArray.forEach(object => {
            object.drawObject(this.ctx);
        })
    }


    drawCharacter() {
        if (this.character.direction == -1) {
            this.ctx.save();
            this.ctx.translate(this.character.width, 0);
            this.ctx.scale(-1, 1);
            this.character.x = this.character.x * -1;
        }
        this.character.drawObject(this.ctx);
        if (this.character.direction == -1) {
            this.ctx.restore();
            this.character.x = this.character.x * -1;
        }
    }


    drawBottles() {
        this.throwableObjects.forEach(bottle => {
            if (bottle.direction == -1) {
                this.ctx.save();
                this.ctx.translate(0, 0);
                this.ctx.scale(-1, 1);
                bottle.x = bottle.x * -1;
            }
            bottle.drawObject(this.ctx);
            if (bottle.direction == -1) {
                this.ctx.restore();
                bottle.x = bottle.x * -1;
            }
        })
    }


    drawNumber() {
        this.ctx.font = '25px Viaoda Libre Bold';
        this.ctx.fillText('x ' + this.bottleCounter.counter, 80, 105);
        this.ctx.fillText('x ' + this.coinCounter.counter, 80, 155);
    }


    setWorld() {
        this.level.boss.forEach((boss) => {
            boss.world = this;
        })

        this.level.chicken.forEach((chicken) => {
            chicken.world = this;
        })

        this.level.bottles.forEach((bottle) => {
            bottle.world = this;
        })
        this.level.coins.forEach((coin) => {
            coin.world = this;
        })

        this.level.health.forEach((health) => {
            health.world = this;
        })
    }
}