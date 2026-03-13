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
        console.log(tableEnties.length, tableEnties, particleName)
        particleName.innerHTML = particle.name.toUpperCase()
    }
}