describe("Bot", () => {

  describe("#name", () => {
    it("should display the bots name", () => {
      const bot = new Bot("Bot1")
      expect(bot.name()).toEqual("Bot1")
    })
  })
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
