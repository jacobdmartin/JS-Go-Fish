class LoginView {
  constructor(startGame) {
    this._startGame = startGame
  }

  startGame() {
    this.startGame
  }

  draw(container) {
    return container.innerHTML = this.markup()
  }

  submit() {
    const name = document.getElementById('Name').value()
    const playerNum = document.getElementById('PlayerNum').value()
    const form = document.getElementsByName('formClass').submit()
    return this.startGame(name, playerNum)
  }

  loggedIn(container) {
    const name = document.getElementById('Name').value
    const playerNum = document.getElementById('PlayerNum').value
    const form = document.getElementsByName('formClass')
    return this.startGame(name, playerNum)
  }

  markup() {
    return `<form action="#" method="post" name="formName" id="formId" class="formClass">
      <div id="NameDiv">
        <p>Enter Your Name:</p>
        <input id="Name" name="InsertName">
      </div>
      <div id="PlayerNumDiv">
        <p>Select the Number of Players:</p>
        <input id="PlayerNum" type=number>
      </div>
      <input type="button" name="submit()" id="btn" value="Submit" onclick="return submit()"/>
    </form>`
  }
}

// <form id="myForm" class=".login-form" onsubmit="loggedIn">
// <button type="submit" id="loggedIn" onclick="loggedIn()">Play</button>
