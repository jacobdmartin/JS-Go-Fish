class GoFishController {
  container() {
    return document.getElementById('main')
  }

  login() {
    const view = new LoginView(this.startGame.bind(this))
    view.draw(this.container())
    window.view = view
  }

  startGame(name, number) {
    const player = new Player(name)
    // const bots = new Bot(number)
    // const game = new GoFish([player])
    const view = new GameView(player)
    view.draw(this.container())
  }
}

window.controller = new GoFishController();
window.onload = controller.login.bind(window.controller)
