import Desk from "./desk";
import { STATES } from "./constants/states"
import { COLORS } from "./constants/colors"

export default class Game {
    constructor() {
      this.state = Game.states[0]
      this.desk = new Desk()
      this.turn = COLORS.WHITE
      this.history = []
      this.killedFigures = []
      this.turnCount = 0
    }

    static get states() { return Object.keys(STATES).map((key) => STATES[key]) }

    get desk() { return this.desk }
    get turn() { return this.turn }
    get history() { return this.history }
    get killedFigures() { return this.killedFigures }
    get turnCount() { return this.turnCount }
    get state() { return this.state }

    selectFigure(coord) {
        return this._desk._coords[coord]
    }

    move(from, to) {
        let killed = this._desk.move(from, to)
        this._history.push(`${from}:${to}`)
        this._changeTurn()
        if (killed) this._killedFigures.push(killed)
    }

    _changeTurn() {
        if (this._turn === COLORS.WHITE) {
            this._turn = COLORS.BLACK
        } else {
            this._turn = COLORS.WHITE
        }
    }
}
