class LoginView {
  constructor(startGame) {
    this._startGame = startGame
  }

  draw(container) {
    container.innerHTML = this.markup()
    this.loggedIn()
  }

  loggedIn(container) {
    const form = document.getElementById('formId')
    form.onsubmit = this.onLogin.bind(this)
  }

  onLogin(event) {
    event.preventDefault()
    const name = this.nameInput().value
    const playerNum = parseInt(this.numberInput().value)
    this._startGame(name, playerNum)
  }

  nameInput() {
    return document.getElementById('Name')
  }

  numberInput() {
    return document.getElementById('PlayerNum')
  }

  markup() {
    return `<form id="formId">
    <div id="NameDiv" class=".col-md-6 .col-md-offset-3">
      <p>Enter Your Name:</p>
      <input id="Name" name="InsertName">
    </div>
    <div id="PlayerNumDiv" class=".col-md-6 .col-md-offset-3">
      <p>How Many Players to Play Against:</p>
      <input id="PlayerNum" type="number">
    </div>
    <input type="submit" value="Submit"/>
    </form>`
  }
}
