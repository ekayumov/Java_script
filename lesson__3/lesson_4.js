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
  const сoncerts = {}

  this.createEvent = (сoncert, price) => {
    сoncerts[сoncert] = {tickets_sold: [], price: price}
  }

  function getRandomInt(con) {
    const min = Math.ceil(0);
    const max = Math.floor(999999);
    number = Math.floor(Math.random() * (max - min) + min)

    if (сoncerts[con].tickets_sold.some(elem => elem === number)) {
      getRandomInt(con)
    }
    else {
      return number
    }
  }

  this.buyTicket = (сoncert) => {
    var n = getRandomInt(сoncert)
    сoncerts[сoncert].tickets_sold.push(n)
  }

  this.returnTicket = (сoncert, ticket) => {
    const ticketsCold = сoncerts[сoncert].tickets_sold
    const tiketIndex = ticketsCold.indexOf(ticket);

    if (tiketIndex !== -1) {
        ticketsCold.splice(tiketIndex, 1);
        boxOffice -= сoncerts[сoncert].price
    }
  }
}
