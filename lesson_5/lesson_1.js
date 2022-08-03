Фигура
class Figure {
    constructor(color, cell) {
        this._color = color
        this._cell = cell
        this._killed = false
    }
}

// полную информацию о возможных ходах не стал реализовывать так как это уже будет реализацией процесс игры
//
// кратно опишу процесс
//
//для этого потребуется текущее положение фигуры, возможные направления векторов хода,
// при добавлении возможного хода необходимо проверять свободнали кледтка для хода, чтобы отсеч ненужные ходы
// это нужно для королефы слона  ладьи
//
// для фигур типа пешка и король необходимо следить за историей игровой сессии
// так как в начале пешки могут ходить на 2 хода вперед
// король модет сделать ракировку, при условии что определенные поля свободны
//
// для ходов короля нужно добавлять доп проверку "угроза мата"
//
// c пешками реализуется проверка на "может съесть фигуру или нет"

class Pawn extends Figure {
    constructor(color, desk, cell) {
        super(color, desk, cell)
        let vector = [0,1]
    }

    _doubleMove = true
    _canEvolve = false

    get canEvolve() { return this._canEvolve }

    moves() {
        return vector
    }
}

class Horse extends Figure {
    constructor(color, desk, cell) {
        super(color, desk, cell)
        let vector = [[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[-1,2],[1,-2],[-1,-2]]
    }

    moves() {
        return vector
    }
}

class Bishop extends Figure {
    constructor(color, desk, cell) {
        super(color, desk, cell)
        let vector = [[8,8],[8,-8],[-8,8],[-8,-8]]
    }

    moves() {
        return vector
    }
}

class Rook extends Figure {
    constructor(color, desk, cell) {
        super(color, desk, cell)
        let vector = [[0,8],[0,-8],[8,0],[-8,0]]
    }

    moves() {
        return vector
    }
}

class Queen extends Figure {
    constructor(color, desk, cell) {
        super(color, desk, cell)
        let vector =[[8,8],[8,-8],[8,8],[-8,8],[8,8],[8,-8],[-8,8],[-8,-8]]
    }

    moves() {
        return vector
    }
}

class King extends Figure {
    constructor(color, desk, cell) {
        super(color, desk, cell)
        let vector =[[1,1],[1,-1],[1,1],[-1,1],[1,1],[1,-1],[-1,1],[-1,-1]]
    }

    moves() {
        return vector
    }
}


class Desk {
    constructor() {
        let coords = {}

        Desk.x.forEach(function(x) {
            return Desk.y.forEach(function(y) {
                return coords[`${x}${y}`] = null
            })
        })
        //Заполнение  самих фигур опустим

        this._coords = coords
    }

    _coords = {}

    static get y() { return [1, 2, 3, 4, 5, 6, 7, 8] }
    static get x() { return ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'] }

    get coords() { return this._coords }
}

// игра
class Game {
    constructor() {}

    _state = Game.states[0]
    _desk = new Desk()
    _turn = 'white'
    _history = []
    _killedFigures = []
    _turnCount = 0

    static get states() { return ['continue', 'white wins', 'black wins'] }

    get desk() { return this._desk }
    get turn() { return this._turn }
    get history() { return this._history }
    get killedFigures() { return this._killedFigures }
    get turnCount() { return this._turnCount }
    get state() { return this._state }
}

let game = new Game()
let desk = game.desk
