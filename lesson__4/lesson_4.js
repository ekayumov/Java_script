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


const Ship = function(full, collor) {
  this.full = full // true / false
  this.collor = collor
}

const MotorShip = function(enginePower, frameMaterial) {
  this.enginePower = enginePower // Мощность двигателя
  this.frameMaterial = frameMaterial // Материал корпуса
}

const SailShip = function(mastCount, sailArea) {
  this.mastCount = mastCount // Количество мачт
  this.sailArea = sailArea // Общая площадь парусов
}

MotorShip.prototype = new Ship(true, "красный")
SailShip.prototype = new Ship(true, "синий")

const Shipyard = function(type) {
  const typeShipyard = type // MotorShip / SailShip

  this.paint = function(ship, color) {
    ship.color = color
    return ship
  }

  this.repair = function(ship) {
    if (ship instanceof typeShipyard) {
      ship.full = true
      return ship
    }
    else {
      return "не корректный тип коробля"
    }
  }

  // сделано примитивно, просто передается массив параметров, хотя лучше реализовать через хэш
  // это позволило бы не ограничиваться только двумя типами фверфей и двумя параметрами для ввода
  this.build = function(params) {
    return new typeShipyard(params[0], params[1])
  }

  this.swap = function(ship) {
    switch (true) {
      case typeShipyard === MotorShip:
          return new MotorShip(ship.engineHp, ship.frameMaterial)
      case typeShipyard === SailShip:
          return new SailShip(ship.mastCount, ship.sailArea)
    }
  }
}

motorShipyard = new Shipyard(MotorShip)
sailShipyard = new Shipyard(SailShip)
