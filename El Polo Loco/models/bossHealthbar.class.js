class BossHealthbar extends DrawableObject {
    height = 70;
    width = 260;
    x = 680;
    y = -5;
    health = 100;
    world;
    IMAGES_ENEMYHEALTHBAR = [
        'img/statusbars/enemyhealthbar/0.png',
        'img/statusbars/enemyhealthbar/20.png',
        'img/statusbars/enemyhealthbar/40.png',
        'img/statusbars/enemyhealthbar/60.png',
        'img/statusbars/enemyhealthbar/80.png',
        'img/statusbars/enemyhealthbar/100.png'
    ];


    constructor(world) {
        super();
        this.world = world;
        this.loadImages(this.IMAGES_ENEMYHEALTHBAR);
        this.setEnemyHealth();
    }


    calcEnemyHealth() {
        if(this.health == 0) {
            return 0;
        }
        else if(this.health <= 20) {
            return 1;
        }
        else if(this.health <= 40) {
            return 2;
        }
        else if(this.health <= 60) {
            return 3;
        }
        else if(this.health <= 80) {
            return 4;
        }
        else if(this.health <= 100) {
            return 5;
        }
    }

    
    setEnemyHealth() {
        let path = this.IMAGES_ENEMYHEALTHBAR[this.calcEnemyHealth()];
        this.img = this.imageCache[path];
    }
}