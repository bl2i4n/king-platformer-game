// grab canvas element
const canvas = document.querySelector('canvas');
// getContext method on the canvas element
// use 2d methods to draw on the canvas
const c = canvas.getContext('2d');

// aspect width
canvas.width = 1024; // 64 * 16
canvas.height = 576; // 64 * 9
// important : canvas starts at the top left at 0,0

// run all the code above and store it into parsedCollisions
const parsedCollisions = collisionLevel1.parse2D();
const collisionBlocks = parsedCollisions.createObjectsFrom2D()


const backgroundLevel1 = new Sprite({
    position: {
        // set sprite image to be drawn at the top left of our canvas
        x: 0,
        y: 0,
    },
    imageSrc: './img/backgroundLevel1.png',
})

// lower case P for player means this is an instantiation of the class we created
const player = new Player({
    // since this has the same name as the collisionBlocks we do not need to pass in the same key and value
    collisionBlocks,
    imageSrc: './img/king/idle.png'
    
})

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
}
// we need an animation loop to fall downward
// this calls itself and keeps calling itself until we end this
function animate() {
    //this keeps running until we tell it to stop
            //requestAnimationFrame takes a callback and the callback we are passing in is animate
            //this is a recursive call loop
    window.requestAnimationFrame(animate);
    // console.log('currently in animation loop');

    // draw the background image to the canvas and set it to the position we set above
    backgroundLevel1.draw()
                // loop every collision block in this array
    collisionBlocks.forEach((collisionBlock) => {
        collisionBlock.draw()
    })
    
    player.velocity.x = 0
    if (keys.d.pressed){
        player.velocity.x = 5
    } else if (keys.a.pressed){
        player.velocity.x = -5
    }

    player.draw()
    player.update()

}

animate()
