const tableEntry = document.querySelector('#tableEntry')
const table = document.querySelector('div.table')

const particles = [
    {name: 'Up', type: 'quark'},
    {name: 'Charm', type: 'quark'},
    {name: 'Top', type: 'quark'},
    {name: 'Gluon', type: 'quark'},
    {name: 'Higgs', type: 'quark'},

    {name: 'Down', type: 'quark'},
    {name: 'Strange', type: 'quark'},
    {name: 'Bottom', type: 'quark'},
    {name: 'Photon', type: 'boson'},
    {},

    {name: 'Electron', type: 'fermion'},
    {name: 'Muon', type: 'fermion'},
    {name: 'Tau', type: 'fermion'},
    {name: 'Z boson', type: 'boson'},
    {},

    {name: 'Electron neutrino', type: 'fermion'},
    {name: 'Muon neutrino', type: 'fermion'},
    {name: 'Tau neutrino', type: 'fermion'},
    {name: 'W bozon', type: 'boson'}
]

for (const particle of particles) {
    const newEntry = document.importNode(tableEntry.content, true)
    table.appendChild(newEntry)
    const tableEnties = table.children
    const entry = tableEnties[tableEnties.length - 1]

    if (Object.keys(particle).length == 0) {
        entry.style.setProperty('opacity', '0')
    } else {
        entry.classList.add(particle.type)
        const particleName = entry.querySelector('.particle-name')
        //console.log(tableEnties.length, tableEnties, particleName)
        particleName.innerHTML = particle.name.toUpperCase()

        const particleAddr = entry.querySelector('.particle-addr')
        particleAddr.innerHTML = particle.name[0].toUpperCase()
    }
}

/*Sync scroll*/

const particleDataLists = document.querySelectorAll('.particle-details > section')
const lists = []
particleDataLists.forEach((list) => {
    lists.push(list)
})

function getParentFromQuery(child, query) {
    let parent = child
    while (parent.parentNode) {
        let found = false
        const parents = parent.parentNode.querySelectorAll(query)
        parents.forEach((possibleParent) => {
            if (parent.isSameNode(possibleParent)) {
                found = true
            }
        })
        if (found) { break }
        parent = parent.parentNode
    }
    return parent
}

window.addEventListener('scroll', (e) => {
    const container = getParentFromQuery(e.target, 'section')
    if (lists.includes(container)) {
        for (const list of lists) {
            if (container != list) {
                list.querySelector('.details-list').scrollTo({top: e.target.scrollTop})
            }
        }
    }
}, {capture: true})

const scrollers = document.querySelectorAll('.hide-scroll')

scrollers.forEach((scroller) => {
    console.log(scroller)
    let e = []
    const elems = scroller.querySelectorAll('li')

    const obs = new IntersectionObserver((entries) => {
        for (let entry of entries) {
            console.log(entry)
            if (entry.target && !entry.intersection && entry.isIntersecting && entry.intersectionRatio > .1) {
                
                let t = scroller.parentElement.lastElementChild.children[e.indexOf(entry.target)]
                console.log(e.indexOf(entry.target))
                for (let child of scroller.parentElement.lastElementChild.children) {
                    child.style.setProperty('background-color', null)  
                }
                t.style.setProperty('background-color', 'rgb(0 0 0 / .8)')

            }
        }
    }, {root: scroller, threshold: [0, 1], trackVisibility: true, delay: 500})

    let n = 0
    elems.forEach((elem) => {
        e.push(elem)
        console.log(elem)
        obs.observe(elem)
    })
})