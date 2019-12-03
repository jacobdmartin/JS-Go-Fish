class GameView {
  constructor(game) {
    this._game = game
  }

  draw(container) {
    this.container = container
    container.innerHTML = this.markup()
    this.playerList(this._game.players())
  }

  playerList(players) {
    const list = document.createElement('ul')
    players.forEach(player => {
      const listItem = document.createElement('li')
      const text = document.createTextNode(player.name())
      listItem.appendChild(text)
      
      list.appendChild(listItem)
    })
    this.container.appendChild(list)
  }

  markup() {
    return `<ol>Players:</ol>
    <li id="playerName"></li>`
  }

  listPlayers() {
    return document.getElementById("demo").innerHTML += player.name() + "<br>";
  }
}
