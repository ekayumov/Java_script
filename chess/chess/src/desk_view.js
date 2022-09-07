import Game from "./game"
import GameView from "./game_view"

export default class DeskView {
    _desk = document.querySelector('#desk')
    _cells = this._desk.querySelectorAll('.cell')
    _isFigureSelected = false

    /** @type { Game } */
    _gameEngine = null

    /** @type { GameView } */
    _gameView = null

    constructor(gameView, gameEngine) {
        this._gameView = gameView
        this._gameEngine = gameEngine
        this._resetSelectListeners()
    }

    changePawn(figureType) {
        const figure = this._gameEngine.desk.changePawn(figureType)
        const cell = document.querySelector(`#${figure.cell}`)

        const viewFigure = document.createElement('div')
        viewFigure.classList.add('figure', figure.type(), figure.color)

        cell.textContent = ''
        cell.append(viewFigure)
    }

    _perfomCell(e) {
        const selected = e.target
        let cellCoord = null

        if (this._isFigureSelected) {
            if (selected.classList.contains('figure')) {
                if (selected.classList[2] === this._selectedFigure.classList[2]) {
                    this._clearSelection()
                    this._isFigureSelected = false
                    this._selectedFigure = null
                    this._clickOnFigure(selected)
                    return
                }
                cellCoord = selected.parentElement.id
            } else {
                cellCoord = selected.id
            }

            if (!document.querySelector(`#${cellCoord}`).classList.contains('available')) {
                return
            }

            this._move(selected, cellCoord)
        } else {
            if (!this._canTouch(selected)) return

            this._clickOnFigure(selected)
        }
    }

    _move(selected, to) {
        if (this._gameEngine.desk.canMove(this._selectedFigure.parentElement.id, to)) {
            this._gameEngine.move(this._selectedFigure.parentElement.id, to)

            if (selected.classList.contains('figure') && selected.classList[2] !== this._selectedFigure.classList[2]) {
                selected.parentElement.append(this._selectedFigure)
                selected.remove()
                // помещаем в список убитых
            } else {
                selected.append(this._selectedFigure)
            }

            this._selectedFigure = null
            this._isFigureSelected = false
            this._clearSelection()
            this._gameView.update()

            if (this._gameEngine.desk.canEvolvePawn()) {
                this._gameView.showChangePawnPanel()
            }
        }
    }

    _clearSelection() {
        this._cells.forEach(cell => cell.classList.remove('available'))
        document.querySelectorAll('.figure').forEach(elem => elem.classList.remove('selected'))
    }

    _clickOnFigure(selected) {
        if (selected.className.includes('figure')) {
            // запрашиваем из движка достыпные ходы для фигуры
            const availableMoves = this._gameEngine.selectFigure(selected.parentElement.id).moves()
            let availableCells = Array.prototype.slice.call(this._cells).filter(cell => availableMoves.includes(cell.id))
            selected.classList.add('selected')
            availableCells.forEach(cell => cell.classList.add('available'))
            this._isFigureSelected = true
            this._selectedFigure = selected
        }
    }

    _resetSelectListeners() {
        this._cells.forEach(cell => {
            cell.addEventListener('click', (e) => this._perfomCell(e))
        })
    }

    _canTouch(figure) {
        return this._gameEngine.turn === figure.classList[2]
    }
}
