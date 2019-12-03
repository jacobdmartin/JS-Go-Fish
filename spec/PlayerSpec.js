describe("Player", () => {

  describe("#name", () => {
    it("should display a players name", () => {
      const player = new Player("Eliot")
      expect(player.name()).toEqual("Eliot")
    })
  })

  describe("#hand", ()=> {
    it("should return a players hand", () => {
      const player = new Player("Eliot", ["card1", "card2"])
      expect(player.hand()).toEqual(["card1", "card2"])
    })
  })

  describe("#books", ()=> {
    it("should return a players books", () => {
      const player = new Player("Eliot", ["card1", "card2"], ["K"])
      expect(player.books()).toEqual(["K"])
    })
  })
})
