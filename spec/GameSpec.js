describe("Game", () => {

  describe("players", () => {
    it("should return the players", () => {
      const player = new Player("Spencer")
      const game = new Game(player)
      expect(game.players()).toEqual([player])
    })
  })

  describe("#createBots", () => {
    it("should create a certain number of bots based on a given number", () => {
      const player = new Player("Spencer")
      const number = 3
      const game = new Game(player, number)
      game.createBots(number)
      expect(game.players().length).toEqual(4)
    })
  })
})
