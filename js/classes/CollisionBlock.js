// create a new collision class object
class CollisionBlock {
    constructor({position}) {
        this.position = position
        this.width = 64
        this.height = 64
    }

    draw() {
                    // this allows us to set an alpha or opacity
                    //red, green, blue, alpha
        c.fillStyle = 'rgba(255, 0, 0, 0.5)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}