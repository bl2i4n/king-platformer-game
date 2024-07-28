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
            keys.a.pressed = true
            break
        case 'd':
            keys.d.pressed = true
            break
    }
})

window.addEventListener('keyup', (event) => {
    switch (event.key){
        case 'a':
            keys.a.pressed = false
            break
        case 'd':
            keys.d.pressed = false
            break
    }
})