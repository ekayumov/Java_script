import { COLORS } from "../chess_engine/constants/colors"
import Game from "../chess_engine/game"
import DeskView from "./desk_view"
import History from "./history"
import KilledFiguresView from "./killed_figures_view"

export default class GameView {
    /** @type { HTMLElement } */
    _loginForm = document.querySelector('#login')
    /** @type { HTMLElement } */
    _turnLabel = document.querySelector('#turn')

    _player1 = null
    _player2 = null

    /** @type { Game } */
    _gameEngine = null

    /** @type { DeskView } */
    _deskView = null

    /** @type { HistoryView } */
    _historyView = null

    /** @type { KilledFiguresView } */
    _killedFiguresView = null

    /** @type { HTMLElement } */
    _changePawnPanel = document.querySelector('#changePawnPanel')

    constructor() {
        this._loginForm.addEventListener('submit', (e) => this._register(e))
        this._changePawnPanel.querySelectorAll('input').forEach(input => {
            input.addEventListener('click', (e) => this.changePawn(e.target.value))
        })
    }

    /**
     * @param { Event } e
     */
    _register(e) {
        e.preventDefault()
        this._player1 = e.target.querySelector('#login_player1').value
        this._player2 = e.target.querySelector('#login_player2').value
        this._startGame()
    }

    _startGame() {
        this._loginForm.hidden = true
        this._gameEngine = new Game()
        this._deskView = new DeskView(this, this._gameEngine)
        this._historyView = new History()
        this._killedFiguresView = new KilledFiguresView()
    }

    update() {
        this._updateTurn()
        this._updateHistory()
        this._updateKilledFigures()
    }

    showChangePawnPanel() {
        const game = document.querySelector('.game-divider')
        game.classList.add('hidden')
        this._changePawnPanel.classList.remove('hidden')
    }

    changePawn(figureType) {
        this._deskView.changePawn(figureType)
        this._changePawnPanel.classList.add('hidden')
        const game = document.querySelector('.game-divider')
        game.classList.remove('hidden')
    }

    _updateTurn() {
        if (this._gameEngine.turn === COLORS.WHITE) {
            this._turnLabel.textContent = 'Ход белых'
        } else {
            this._turnLabel.textContent = 'Ход черных'
        }
    }

    _updateHistory() {
        this._historyView.fill(this._gameEngine.history)
    }

    _updateKilledFigures() {
        this._killedFiguresView.fill(this._gameEngine.killedFigures)
    }
}
Footer
© 2022 GitHub, Inc.
