    // grab canvas element
    const canvas = document.querySelector('canvas');
    // getContext method on the canvas element
    // use 2d methods to draw on the canvas
    const c = canvas.getContext('2d');

    // aspect width
    canvas.width = 1024; // 64 * 16
    canvas.height = 576; // 64 * 9
    // important : canvas starts at the top left at 0,0

    // generic object to use what images we want to display in the screen
    class Sprite {
        constructor ({position, imageSrc}) {
            this.position = position
                        // native image object
            this.image = new Image()
            // load in an image from a source file
            this.image.src = imageSrc
            this.loaded = false
        }

        draw(){
            c.drawImage(this.image, this.position.x, this.position.y)
        }
    }

    const backgroundLevel1 = new Sprite({
        position: {
            // set sprite image to be drawn at the top left of our canvas
            x: 0,
            y: 0,
        },
        imageSrc: './img/backgroundLevel1.png',
    })

    // lower case P for player means this is an instantiation of the class we created
    const player = new Player()

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
        console.log('currently in animation loop');
        // x, y, width, height
        // c.fillRect(0, 0, canvas.width, canvas.height);

        console.log('Before calling draw')
        console.log(backgroundLevel1.draw());
        console.log('After calling draw')

        
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
