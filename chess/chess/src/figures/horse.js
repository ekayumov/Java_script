import BaseFigure from "./base"
import Desk from "../desk"

export default class Horse extends BaseFigure {
    constructor(color, desk, cell) {
        super(color, desk, cell)
    }

    type() {return 'horse'}

    moves() {
        const coords = []
        const cellX = Desk.x.indexOf(this.cell[0])
        const cellY = Desk.y.indexOf(this.cell[1])

        // ходы вверх
        for (let i = -2; i <= 2; i++) {
            for (let j = -2; j <= 2; j++) {
                if (
                    (([-1, 1].includes(i)) && ([-2, 2].includes(j))) ||
                    (([-2, 2].includes(i)) && ([-1,1].includes(j)))
                ) {
                    let c = `${Desk.x[cellX + i]}${Desk.y[cellY + j]}`

                    if (
                        this.desk.coords[c] === null ||
                        (this.desk.coords[c] && this.desk.coords[c].color != this.color)
                    ) {
                        coords.push(c)
                    }

                }
            }
        }

        return coords
    }
}
