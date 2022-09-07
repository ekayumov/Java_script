import Desk from "../desk"
export default class BaseFigure {
    constructor(color, desk, cell) {
        this.color = color
        this.desk = desk
        this.cell = cell
    }

    get color() { return this.color }
    get desk() { return this.desk }
    get cell() { return this.cell }

    move(to) {
        this.cell = to
    }
}
