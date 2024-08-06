Array.prototype.parse2D = function () {
    const rows = []                 // each row is 16 cells
    for (let i = 0; i < this.length; i+=16) {
                // where should we start slicing and up to where?
        rows.push(this.slice(i, i + 16))
    }

    return rows
}

Array.prototype.createObjectsFrom2D = function(){
    const objects = []
    // THIS references the array that we are calling the code on
    this.forEach((row, y) => {
        row.forEach((symbol, x) => {
            if (symbol === 292) {
                // push a new collision into collisionblocks array
                objects.push(
                    new CollisionBlock({
                        position: {
                            x: x * 64,
                            y: y * 64,
                        }
    
                    }))
            }
        })
    })

    return objects
}