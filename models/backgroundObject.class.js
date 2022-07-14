class BackgroundObject extends DrawableObject {
    height = 540;
    width = 960;
    x;
    y = 0;

    
    constructor(path, x) {
        super().loadImage(path);
        this.x = x;
    }
}