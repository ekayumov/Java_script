describe('TicketWindow::', () => {
  const ticketWindow = () => new TicketWindow()
  let tw = ticketWindow()

  it('creates a new event', () => {
    const ticketWindow = () => new TicketWindow()
      assert.equal(ticketWindow.createEvent('КИШ', 500), 500)
  })

  it('can show how much monay is collected', () => {
      const ticketWindow = () => new TicketWindow()
      ticketWindow.createEvent('КИШ', 500)
      ticketWindow.buyTicket('КИШ')
      ticketWindow.buyTicket('КИШ')
      assert.equal(
          ticketWindow.buyTicket('КИШ'),
          1500
      );
  });

  it('can sell and return ticket', () => {
      const ticketWindow = () => new TicketWindow()
      ticketWindow.createEvent('КИШ', 500)
      ticketWindow.buyTicket('КИШ')
      ticketWindow.returnTicke("ACDC", 1977')
      assert.equal(
          ticketWindow.returnTicke("ACDC", 1977'),
          300
      );
  });
});
