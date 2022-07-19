class DrawableObject {
    x;
    y;
    height;
    width;
    img;
    imageCache = {};
    currentImage = 0;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    };


    drawObject(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    };


    loadImages(arrayOfImages) {
        arrayOfImages.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        })
    };


    playAnimation(arrayOfImages) {
        let i = this.currentImage % arrayOfImages.length;
        let path = arrayOfImages[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    };
}