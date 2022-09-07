export default class KilledFiguresView {
    _killedWhitesContainer = document.querySelector('#killed-whites')
    _killedBlacksContainer = document.querySelector('#killed-blacks')

    constructor() {}

    add(figureType, color) {
        let element = document.createElement('div')
        element.classList.add('figure-killed', `${figureType}-killed`, `${color}`)

        switch(color) {
            case 'white':
                this._killedWhitesContainer.appendChild(element)
                break
            case 'black':
                this._killedBlacksContainer.appendChild(element)
        }
    }
}
