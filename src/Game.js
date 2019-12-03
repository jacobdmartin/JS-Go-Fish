class Game {
  constructor(player, number) {
    this._player = player
    this._players = []
    this._players.push(player)
    this.createBots(number)
  }

  players() {
    return this._players
  }

  createBots(number) {
    for (var i = 0; i < number; i++) {
      this._players.push(new Bot("Bot"))
    }
  }
}
