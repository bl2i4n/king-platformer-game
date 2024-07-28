    // grab canvas element
    const canvas = document.querySelector('canvas');
    // getContext method on the canvas element
    // use 2d methods to draw on the canvas
    const c = canvas.getContext('2d');

    // aspect width
    canvas.width = 1024; // 64 * 16
    canvas.height = 576; // 64 * 9
    // important : canvas starts at the top left at 0,0

        // lower case P for player means this is an instantiation of the class we created
    const player = new Player()

    // let bottom = y + 100;
    // we need an animation loop to fall downward
    // this calls itself and keeps calling itself until we end this
    function animate() {
        //this keeps running until we tell it to stop
                //requestAnimationFrame takes a callback and the callback we are passing in is animate
                //this is a recursive call loop
        window.requestAnimationFrame(animate);
        console.log('currently in animation loop');
        c.fillStyle = 'white';
        // x, y, width, height
        c.fillRect(0, 0, canvas.width, canvas.height);
        
        player.draw()
        player.update()

    }

    animate()


    //listen for what key is getting press
                        // whenever we press down on the keyboard anything that is in the arrow function will happen
    window.addEventListener('keydown', (event) => {
        // we are using the keydown event object and we can use any properties with the keydown event object
        // console.log(event)
        switch (event.key){
            case 'w':
                if (player.velocity.y === 0) player.velocity.y = -20
                break
            case 'a':
                player.velocity.x = -4
                break
            case 'd':
                player.velocity.x = 4
                break
        }
    })

    window.addEventListener('keyup', (event) => {
        switch (event.key){
            case 'a':
                player.velocity.x = 0
                break
            case 'd':
                player.velocity.x = 0
                break
        }
    })