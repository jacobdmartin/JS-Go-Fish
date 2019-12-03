class GameView {
  constructor(players) {
    this._players = players
  }

  players() {
    this.players
  }

  draw(container) {
    container.innerHTML = this.markup()
  }

  markup(players) {
    return `<p>Players:</p>
    <p>players.forEach(listPlayers)</p>`
  }

  listPlayers() {
    return document.getElementById("demo").innerHTML += player.name() + "<br>";
  }
}
