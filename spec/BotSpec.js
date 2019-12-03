describe("Bot", () => {

  describe("#number", () => {
    it("should return the number of bots to be created", () => {
      const bot = new Bot(2)
      bot.createBots()
      expect(bot.length).toEqual(2)
    })
  })

  // describe("#name", () => {
  //   it("should display a players name", () => {
  //   })
  // })
  //
  // describe("#hand", ()=> {
  //   it("should return a players hand", () => {
  //   })
  // })
  //
  // describe("#books", ()=> {
  //   it("should return a players books", () => {
  //   })
  // })
})
