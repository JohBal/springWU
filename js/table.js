const tableEntry = document.querySelector('#tableEntry')
const table = document.querySelector('div.table')

const particles = [
    {name: 'Up'},
    {name: 'Charm'},
    {name: 'Top'},
    {name: 'Gluon'},
    {name: 'Higgs'},

    {name: 'Down'},
    {name: 'Strange'},
    {name: 'Bottom'},
    {name: 'Photon'},
    {},

    {name: 'Electron'},
    {name: 'Muon'},
    {name: 'Tau'},
    {name: 'Z boson'},
    {},

    {name: 'Electron neutrino'},
    {name: 'Muon neutrino'},
    {name: 'Tau neutrino'},
    {name: 'W bozon'}
]

for (const particle of particles) {
    const newEntry = document.importNode(tableEntry.content, true)
    table.appendChild(newEntry)
    const tableEnties = table.children
    const entry = tableEnties[tableEnties.length - 1]

    if (Object.keys(particle).length == 0) {
        entry.style.setProperty('opacity', '0')
    } else {
        const particleName = entry.querySelector('.particle-name')
        //console.log(tableEnties.length, tableEnties, particleName)
        particleName.innerHTML = particle.name.toUpperCase()
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



const statusCont = document.querySelector('#status')
const statusTitle = statusCont.querySelector('.title')
const statusDesc = statusCont.querySelector('.desc')
const statusIcon = statusCont.querySelector('.icon')

statusCont.style.setProperty('--trans-time', '.2s')

let statusQuene = []
function showStatus(type, title, msg) {
    if (statusCont.classList.contains('show')) {
        statusQuene.push([type, title, msg])
    } else {
        statusTitle.innerHTML = title
        statusDesc.innerHTML = msg
        statusCont.classList.add('show')
        if (statusQuene.length > 0) { statusQuene.splice(0, 1) }
        setTimeout(() => {
            statusCont.classList.remove('show')
            if (statusQuene.length > 0) {
                setTimeout(showStatus, 300, statusQuene[0][0], statusQuene[0][1], statusQuene[0][2]) 
            }
        }, 200 * msg.length + 5000)
    }
}

showStatus(1, 'Message', 'A status update')
showStatus(1, 'Message', 'A status update 1')
showStatus(1, 'Message', 'A status update 2')