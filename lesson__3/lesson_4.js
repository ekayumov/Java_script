// 4. Система продажи билетов
//
// Реализовать систему продажи билетов, которая позволит продавать билеты и возвращать их
// ticketWindow.createEvent('Concert', 500) // создаем концерт и указываем цену билетов
// ticketWindow.buyTicket('Concert') /* Добавляем сумму за билет в кассу, возвращаем
// случайный шестизначный ID билета, создать ID можно любым способом */
//
// ticketWindow.returnTicket('123456') /* Возвращаем билет, если в системе такой id записан
// как проданный, он должен быть удален из списка проданных и из кассы должна быть
// вычтена соответствующая его цене сумма */

const tiWi = function () {
  let boxOffice = 0
  let сoncertArray = {}

  this.createEvent = (сoncert, price) => {
    сoncertArray[сoncert] = {tickets_sold: [], price: price}
  }
  this.concertArr = () => {
    return сoncertArray
  }

  function getRandomInt(con) {
    var min = Math.ceil(0);
    var max = Math.floor(999999);
    number = Math.floor(Math.random() * (max - min) + min)
    if (сoncertArray[con].tickets_sold.some(elem => elem === number)) {
      getRandomInt(con)
    }
    else {
      return number
    }
  }

  this.buyTicket = (сoncert) => {
    var n = getRandomInt(сoncert)
    сoncertArray[сoncert].tickets_sold.push(n)
  }

  this.returnTicket = (сoncert, ticket) => {
    var myArray = сoncertArray[сoncert].tickets_sold
    var tiketIndex = myArray.indexOf(ticket);
    if (tiketIndex !== -1) {
        myArray.splice(tiketIndex, 1);
        boxOffice -= сoncertArray[сoncert].price
    }
  }
}
