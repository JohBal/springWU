const tableEntry = document.querySelector('#tableEntry')
const table = document.querySelector('div.table')

for (let i=0; i < 13; i++) {
    const entry = document.importNode(tableEntry.content, true)
    table.appendChild(entry)
}