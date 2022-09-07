export default class History {
    constructor() {
      this.history = document.querySelector('#history')
    }

    add(from, to) {
        let moveElement = document.createElement('div')
        moveElement.classList.add('history-move')
        moveElement.textContent = `${from}:${to}`
        this._historyContainer.append(moveElement)
    }
}
