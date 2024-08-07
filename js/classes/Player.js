//usually have a capital letter
class Player {
    // set properties for the individual property
    constructor ({
        collisionBlocks = []
    }){
        this.position = {
            x: 200,
            y: 200,
        }
        
        this.velocity = {
            x: 0,
            y: 0,
        }

        this.width = 25
        this.height = 25
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
        this.checkForHorizontalCollisions()

        // apply gravity
        this.applyGravity()

        // check for vertical collisions
        this.checkForVerticalCollisions()

    }
    
    checkForHorizontalCollisions () {
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
                this.position.x + this.width >= collisionBlock.position.x &&
                // now we need the bottom of collision block
                this.position.y + this.height >= collisionBlock.position.y &&
                // top side collision detection
                this.position.y <= collisionBlock.position.y + collisionBlock.height
            ) {     
                // collision on x axis going to the left
                if ( this.velocity.x < 0){
                    // responding to the collision
                    this.position.x  = collisionBlock.position.x + collisionBlock.width + 0.01
                    break
                }

                if ( this.velocity.x > 0) {
                    this.position.x = collisionBlock.position.x - this.width - 0.01
                    break
                }
            }
        }

    }

    applyGravity(){
        this.velocity.y += this.gravity
        this.position.y += this.velocity.y
    }

    checkForVerticalCollisions() {
        for (let i = 0; i < this.collisionBlocks.length; i ++){
            // we need a traditional for loop so we can use break
            // set to the array we are looping through
            const collisionBlock = this.collisionBlocks[i]
            // if a collision exists
                // left side of player      // left side of the collision block, adding the width gets the right side of the collision block
            if (this.position.x <= collisionBlock.position.x + collisionBlock.width &&
                // this takes into account both sides of the collision blocks
                this.position.x + this.width >= collisionBlock.position.x &&
                // now we need the bottom of collision block
                this.position.y + this.height >= collisionBlock.position.y &&
                // top side collision detection
                this.position.y <= collisionBlock.position.y + collisionBlock.height
            ) {     
                // collision on x axis going to the left
                if ( this.velocity.y < 0){
                    this.velocity.y = 0
                    // responding to the collision
                    this.position.y  = collisionBlock.position.y + collisionBlock.height + 0.01
                    break
                }

                if ( this.velocity.y > 0) {
                    this.velocity.y = 0
                    this.position.y = collisionBlock.position.y - this.height - 0.01
                    break
                }
            }
        }
    }
}