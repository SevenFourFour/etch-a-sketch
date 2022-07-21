// Creates a 16x16 grid of square divs

const pixel_container = document.getElementById('pixel-container')


for (let i = 0; i < 16; i++) {
    const row = document.createElement('div')
    pixel_container.appendChild(row)
    for (let j = 0; j < 16; j++) {
        const pixel = document.createElement('div')
        pixel.className = 'pixel'
        row.appendChild(pixel)
        pixel.addEventListener('mouseenter', function (e) {
            pixel.classList.add('hovered-pixel')
        })
    }
}

