class Coincounter extends DrawableObject {
    height = 60;
    width = 60;
    x = 20;
    y = 110;
    world;
    counter = 0;
    IMAGE_COIN = 'img/collectableobjects/coin.png';


    constructor(world) {
        super();
        this.world = world;
        this.loadImage(this.IMAGE_COIN);
    }
}