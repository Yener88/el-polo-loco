class Healthbar extends DrawableObject {
    height = 70;
    width = 260;
    x = 30;
    y = -5;
    world;

    
    IMAGES_HEALTHBAR = [
        'img/statusbars/healthbar/0.png',
        'img/statusbars/healthbar/20.png',
        'img/statusbars/healthbar/40.png',
        'img/statusbars/healthbar/60.png',
        'img/statusbars/healthbar/80.png',
        'img/statusbars/healthbar/100.png'
    ];


    constructor(world) {
        super();
        this.world = world;
        this.loadImages(this.IMAGES_HEALTHBAR);
        this.setHealth();
    }


    calcHealth() {
        if(this.world.character.health <= 0) {
            return 0;
        }
        else if(this.world.character.health <= 20) {
            return 1;
        }
        else if(this.world.character.health <= 40) {
            return 2;
        }
        else if(this.world.character.health <= 60) {
            return 3;
        }
        else if(this.world.character.health <= 80) {
            return 4;
        }
        else if(this.world.character.health <= 100) {
            return 5;
        }
    }

    
    setHealth() {
        let path = this.IMAGES_HEALTHBAR[this.calcHealth()];
        this.img = this.imageCache[path];
    }
}