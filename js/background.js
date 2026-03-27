const circleGroups = document.querySelectorAll('div.circle')

function randomSign() {
    return Math.round(Math.random()*2 - 1)
}

let n = 0
function animate(circle, x, y, s) {
    let targetX = Math.random()*document.body.clientWidth
    let targetY = Math.random()*document.body.clientHeight

    circle.style.setProperty('transform', `translate(${x}px, ${y + 100}px)`)

    setTimeout(animate, 10, circle, x, y, s)
    n = (n+1)/10^4
}

circleGroups.forEach((circleGroup) => {
    animate(circleGroup, 0, 0, 1)
})

const sections = document.querySelectorAll('#wrapper > section:not(:first-of-type)')
window.addEventListener('scroll', (e) => {
    if (e.target == document) {
        sections.forEach((section) => {
            section.style.setProperty('--hidden-pos', '20px')
            //console.log(section.getBoundingClientRect().top + 20, window.innerHeight)

            if (section.getBoundingClientRect().top + 20 < window.innerHeight) {
                section.classList.add('show')
            } else {
                section.classList.remove('show')
            }
        })
    }
}, {passive: true})