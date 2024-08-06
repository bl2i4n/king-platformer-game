// generic object to use what images we want to display in the screen
class Sprite {
    constructor ({position, imageSrc}) {
        this.position = position
                    // native image object
        this.image = new Image()
        this.image.onload = () => {
            this.loaded = true
        }
        // load in an image from a source file
        this.image.src = imageSrc
        this.loaded = false
    }

    draw(){
        if(!this.loaded) return
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}