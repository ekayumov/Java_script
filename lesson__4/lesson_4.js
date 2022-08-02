// Реализовать 2 разных типа верфей, каждая из которых должна будет специализироваться на своем типе кораблей

// Для моторных кораблей доступны следующие специфичные характеристики:
// Мощность двигателя
// Материал корпуса

// Для парусных кораблей доступны следующие специфичные характеристики:
// Количество мачт
// Общая площадь парусов

// Что можно делать в верфи:
// Строить корабли - только своего типа
// Ремонтировать корабли - Должен проверяться тип корабля, работать только с кораблями своего типа
// Перекрашивать корабли - Можно красить любые корабли
// Обменивать старый корабль на новый - Можно обменивать только корабли того же типа

// Главное требование: Чистый код, весь дублирующийся код для кораблей и верфей должен быть вынесен в их прототипы.
// Задание потребует воспользоваться гуглом для решения.

// Верфи и корабли должны создаваться с помощью функций-конструкторов.


const Ship = function( ucollor) {
  this.unbroken = true // true / false сломан / не сломан
  this.collor = collor // цвет
}

const MotorShip = function(params) {
  this.enginePower = params[:enginePower] // Мощность двигателя
  this.frameMaterial = params[:frameMaterial] // Материал корпуса
}

const SailShip = function(params) {
  this.mastCount = params[:mastCount] // Количество мачт
  this.sailArea = params[:sailArea] // Общая площадь парусов
}

MotorShip.prototype = new Ship("красный")
SailShip.prototype = new Ship("синий")

const Shipyard = function() {

  this.paint = function(ship, color) {
    ship.color = color
    return ship
  }

  this.repair = function(ship) {
    ship.unbroken = true
    return ship
  }

  this.swap = function(ship) {
    switch (true) {
      case ship instanceof MotorShip:
        return new MotorShip(ship.engineHp, ship.frameMaterial)
      case ship instanceof SailShip:
        return new SailShip(ship.mastCount, ship.sailArea)
    }
  }
}

const MotorShipyard = function() {
  this.build = function(params) {
    return new MotorShip(params)
  }

  this.repair = function(ship) {
    if (ship instanceof MotorShip) {
      return Object.getPrototypeOf(this).repair(ship)
    }
    else {
      return "не тот тип корабля"
    }
  }
}

const SailShipyard = function() {
  this.build = function(params) {
    return new SailShip(params)
  }

  this.repair = function(ship) {
    if (ship instanceof SailShip) {
      return Object.getPrototypeOf(this).repair(ship)
    }
    else {
      return "не тот тип корабля"
    }
  }
}

MotorShipyard.prototype = new Shipyard()
SailShipyard.prototype = new Shipyard()

motorShipyard = new MotorShipyard()
sailShipyard = new Shipyard()
