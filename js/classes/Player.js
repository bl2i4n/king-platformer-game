//usually have a capital letter
class Player {
    // set properties for the individual property
    constructor (){
        this.position = {
            x: 100,
            y: 100,
        }
        
        this.velocity = {
            x: 0,
            y: 0,
        }

        this.width = 100
        this.height = 100
        this.sides = {
            //this will get the bottom coordinate of our player
            bottom: this.position.y + this.height
        }
        this.gravity = 1
    }

    draw () {
            //what a player should look like
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update (){
        //we are adding velocity to the player here
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        this.sides.bottom = this.position.y + this.height

        // above bottom of canvas
        if (this.sides.bottom + this.velocity.y < canvas.height) {
            this.velocity.y += this.gravity
        } else { 
            this.velocity.y = 0
        }
    }
}