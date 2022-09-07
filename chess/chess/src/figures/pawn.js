import BaseFigure from "./base"
import { COLORS } from "../constants/colors"
import Desk from "../desk"

export default class Pawn extends BaseFigure {
    constructor(color, desk, cell) {
        super(color, desk, cell)
        this.doubleMove = true
    }

    type() {return 'pawn'}

    canEvolve() {
        switch(this.color) {
            case COLORS.WHITE:
                return Desk.y.indexOf(this.cell[1]) === 7
            case COLORS.BLACK:
                return Desk.y.indexOf(this.cell[1]) === 0
        }
    }

    move(to) {
        super.move(to)
        this.doubleMove = false
    }

    moves() {
        const coords = []
        const cellX = Desk.x.indexOf(this.cell[0])
        const cellY = Desk.y.indexOf(this.cell[1])


        for (let y = -2; y <= 2; y++) {
            let cY = `${Desk.x[cellX]}${Desk.y[cellY + y]}`
            let cXLeft = `${Desk.x[cellX - 1]}${Desk.y[cellY + y]}`
            let cXRight = `${Desk.x[cellX + 1]}${Desk.y[cellY + y]}`

            if (
                (this.color === COLORS.WHITE && (y === 1 || (y === 2 && this.doubleMove)) && !this.desk.coords[cY])
                ||
                (this.color === COLORS.BLACK && (y === -1 || (y === -2 && this.doubleMove)) && !this.desk.coords[cY])
            ) {
                coords.push(cY)
            }

            // возможность рубить по диагонали
            if (
                (this.color === COLORS.WHITE &&
                    (y === 1 &&
                        (
                            this.desk.coords[cXRight] && this.desk.coords[cXRight].color != this.color ||
                            this.desk.coords[cXLeft] && this.desk.coords[cXLeft].color != this.color
                        )
                    )
                )
                ||
                (this.color === COLORS.BLACK &&
                    (y === -1 &&
                        (
                            this.desk.coords[cXRight] && this.desk.coords[cXRight].color != this.color ||
                            this.desk.coords[cXLeft] && this.desk.coords[cXLeft].color != this.color
                        )
                    )
                )
            ) {
                if (this.desk.coords[cXRight] && this.desk.coords[cXRight].color != this.color) coords.push(cXRight)
                if (this.desk.coords[cXLeft] && this.desk.coords[cXLeft].color != this.color) coords.push(cXLeft)
            }
        }

        return coords
    }
}
