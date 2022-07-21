
const pixel_container = document.getElementById('pixel-container')


function getRandomColor() {
    var letters = '0123457689ABCDEF'
    var color = '#'
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
}

function newGrid(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div')
        pixel_container.appendChild(row)
        for (let j = 0; j < size; j++) {
            const pixel = document.createElement('div')
            pixel.className = 'pixel'
            pixel.style.width = 500 / size + "px"
            pixel.style.height = pixel.style.width
            row.appendChild(pixel)
            pixel.addEventListener('mouseenter', function (e) {
                pixel.style.backgroundColor = getRandomColor()
            })
        }
    }
}

function deleteGrid() {
    pixel_container.innerHTML = ''
}

newGrid(16)

// button functionality

const new_grid_button = document.getElementById('grid-button')

new_grid_button.addEventListener('click', function (e) {
    deleteGrid()
    var grid_length = prompt('Size of new grid')
    newGrid(grid_length)
})
