// generic object to use what images we want to display in the screen
class Sprite {
    constructor ({position, imageSrc, frameRate}) {
        this.position = position
                    // native image object
        this.image = new Image()
        this.image.onload = () => {
            this.loaded = true
            this.width = this.image.width / 11
            this.height = this.image.height
        }
        // load in an image from a source file
        this.image.src = imageSrc
        this.loaded = false
        this.frameRate = frameRate
    }

    draw(){
        if(!this.loaded) return
        const cropbox = {
            position : {
                x: 0,
                y: 0
            },
            width: this.width,
            height: this.height,
        }
        c.drawImage(
            this.image, 
            cropbox.position.x, 
            cropbox.position.y, 
            cropbox.width, 
            cropbox.height, 
            this.position.x, 
            this.position.y,
            this.width,
            this.height
        )
    }
}