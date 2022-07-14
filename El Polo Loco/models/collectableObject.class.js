class CollectableObject extends DrawableObject {
    height = 80;
    width = 80;
    world;


    constructor(path, x, y) {
        super();
        this.loadImage(path);
        this.x = x;
        this.y = y;
    }


    removeBottle() {
        let i = this.world.level.bottles.indexOf(this);
        this.world.level.bottles.splice(i, 1);
    }


    removeCoin() {
        let i = this.world.level.coins.indexOf(this);
        this.world.level.coins.splice(i, 1);
    }


    removeHealth() {
        let i = this.world.level.health.indexOf(this);
        this.world.level.health.splice(i, 1);
    }
}