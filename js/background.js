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

function a() {
    console.log('A')
    return 1
}

async function sleep(delay) {
    await new Promise((res, rej) => {
        setTimeout(() => {
            res()
        }, delay)
    })
}

async function updateSectionPos(delay) {
    const sectionIterator = sections.values()
    for (let i = 0; i < sections.length; i++) {
        
        await sleep(delay)
        
        const section = sectionIterator.next().value
        section.style.setProperty('transition', 'transform .5s') //Set transition property
        if (section.getBoundingClientRect().top < window.innerHeight) {
            section.classList.add('show')
        } else {
            section.classList.remove('show')
        }
    }
}

const sections = document.querySelectorAll('#wrapper > section:not(:first-of-type)')
sections.forEach((section) => {
    section.style.setProperty('--hidden-pos', '40px')
})

updateSectionPos(100)

window.addEventListener('scroll', (e) => {
    if (e.target == document) {
        updateSectionPos(200)
    }
}, {passive: true})