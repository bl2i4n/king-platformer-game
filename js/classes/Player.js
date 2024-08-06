//usually have a capital letter
class Player {
    // set properties for the individual property
    constructor ({
        collisionBlocks = []
    }){
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

        this.collisionBlocks = collisionBlocks
        console.log(this.collisionBlocks)
    }

    draw () {
            //what a player should look like
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update (){
        //we are adding velocity to the player here
        this.position.x += this.velocity.x
        // set horizontal collisons above
        // now we want to check for horizontal collisions
        for (let i = 0; i < this.collisionBlocks.length; i ++){
            // we need a traditional for loop so we can use break
            // set to the array we are looping through
            const collisionBlock = this.collisionBlocks[i]
            // if a collision exists
                // left side of player      // left side of the collision block, adding the width gets the right side of the collision block
            if (this.position.x <= collisionBlock.position.x + collisionBlock.width &&
                // this takes into account both sides of the collision blocks
                this.position.x + this.width >= collisionBlock.x &&
                // now we need the bottom of collision block
                this.position.y + this.height >= collisionBlock.position.x &&
                // top side collision detection
                this.position.y <= collisionBlock.position.y + collisionBlock.height
            ) {     
                // collision on x axis going to the left
                if ( this.velocity.x < -1){
                    this.position.x  = collisionBlock.position.x + collisionBlock.width + 0.01
                }
            }
        }


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