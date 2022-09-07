import BaseFigure from "./base"
import Desk from "../desk"

export default class Queen extends BaseFigure {
    constructor(color, desk, cell) {
        super(color, desk, cell)
    }

    type() {return 'queen'}

    moves() {
        const coords = []
        const cellX = Desk.x.indexOf(this.cell[0])
        const cellY = Desk.y.indexOf(this.cell[1])

        for(let i = cellY + 1; i < Desk.y.length; i++) {
            let c = `${Desk.x[cellX]}${Desk.y[i]}`
            if (this.desk.coords[c] === null) {
                coords.push(c)
            } else if (this.desk.coords[c] && this.desk.coords[c].color !== this.color) {
                coords.push(c)
                break
            } else {
                break
            }
        }

        for(let i = cellY - 1; i >= 0; i--) {
            let c = `${Desk.x[cellX]}${Desk.y[i]}`
            if (this.desk.coords[c] === null) {
                coords.push(c)
            } else if (this.desk.coords[c] && this.desk.coords[c].color !== this.color) {
                coords.push(c)
                break
            } else {
                break
            }
        }

        for(let i = cellX + 1; i < Desk.x.length; i++) {
            let c = `${Desk.x[i]}${Desk.y[cellY]}`
            if (this.desk.coords[c] === null) {
                coords.push(c)
            } else if (this.desk.coords[c] && this.desk.coords[c].color !== this.color) {
                coords.push(c)
                break
            } else {
                break
            }
        }

        for(let i = cellX - 1; i >= 0; i--) {
            let c = `${Desk.x[i]}${Desk.y[cellY]}`
            if (this.desk.coords[c] === null) {
                coords.push(c)
            } else if (this.desk.coords[c] && this.desk.coords[c].color !== this.color) {
                coords.push(c)
                break
            } else {
                break
            }
        }

        let canLeft = true;
        let canRight = true;

        for (let i = cellY + 1, j = 1; i < Desk.y.length; i++, j++) {
            let cLeft = `${Desk.x[cellX - j]}${Desk.y[i]}`
            let cRight = `${Desk.x[cellX + j]}${Desk.y[i]}`

            if (canLeft) {
                if (this.desk.coords[cLeft] === null) {
                    coords.push(`${Desk.x[cellX - j]}${Desk.y[i]}`)
                } else if (this.desk.coords[cLeft] && this.desk.coords[cLeft].color !== this.color) {
                    coords.push(`${Desk.x[cellX - j]}${Desk.y[i]}`)
                    canLeft = false
                } else {
                    canLeft = false
                }
            }

            if (canRight) {
                if (this.desk.coords[cRight] === null) {
                    coords.push(`${Desk.x[cellX + j]}${Desk.y[i]}`)
                } else if (this.desk.coords[cRight] && this.desk.coords[cRight].color !== this.color) {
                    coords.push(`${Desk.x[cellX + j]}${Desk.y[i]}`)
                    canRight = false
                } else {
                    canRight = false
                }
            }
        }

        canLeft = true;
        canRight = true;

        for (let i = cellY - 1, j = 1; i >= 0; i--, j++) {
            let cLeft = `${Desk.x[cellX - j]}${Desk.y[i]}`
            let cRight = `${Desk.x[cellX + j]}${Desk.y[i]}`

            if (canLeft) {
                if (this.desk.coords[cLeft] === null) {
                    coords.push(`${Desk.x[cellX - j]}${Desk.y[i]}`)
                } else if (this.desk.coords[cLeft] && this.desk.coords[cLeft].color !== this.color) {
                    coords.push(`${Desk.x[cellX - j]}${Desk.y[i]}`)
                    canLeft = false
                } else {
                    canLeft = false
                }
            }

            if (canRight) {
                if (this.desk.coords[cRight] === null) {
                    coords.push(`${Desk.x[cellX + j]}${Desk.y[i]}`)
                } else if (this.desk.coords[cRight] && this.desk.coords[cRight].color !== this.color) {
                    coords.push(`${Desk.x[cellX + j]}${Desk.y[i]}`)
                    canRight = false
                } else {
                    canRight = false
                }
            }
        }

        return coords
    }
}
