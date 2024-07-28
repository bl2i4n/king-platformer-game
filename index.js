    // grab canvas element
    const canvas = document.querySelector('canvas');
    // getContext method on the canvas element
    // use 2d methods to draw on the canvas
    const c = canvas.getContext('2d');

    // aspect width
    canvas.width = 1024; // 64 * 16
    canvas.height = 576; // 64 * 9
    // important : canvas starts at the top left at 0,0

        //usually have a capital letter
    class Player {
        // set properties for the individual property
        constructor (){
            this.position = {
                x: 100,
                y: 100
            }   

            this.width = 100;
            this.height = 100;
        }

        draw () {
                //what a player should look like
            c.fillStyle = 'red';
            c.fillRect(this.position.x, this.position.y, this.width, this.height);
        }
    }
        // lower case P for player means this is an instantiation of the class we created
    const player = new Player()

    // let bottom = y + 100;
    // we need an animation loop to fall downward
    // this calls itself and keeps calling itself until we end this
    function animate() {
        //this keeps running until we tell it to stop
        window.requestAnimationFrame(animate);
        console.log('currently in animation loop');
        c.fillStyle = 'white';
        // x, y, width, height
        c.fillRect(0, 0, canvas.width, canvas.height);
        

        player.draw()
        // if (bottom < canvas.height) {
        //         y++
        //         bottom = y + 100;

        // }

    }

    animate()