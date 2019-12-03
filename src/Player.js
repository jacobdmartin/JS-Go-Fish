class Player {
  constructor(name, hand, books) {
    this._name = name
    this._hand = hand
    this._books = books
  }

  name() {
    return this._name
  }

  hand() {
    return this._hand
  }

  books() {
    return this._books
  }

  number() {
    return this._number
  }

  createBots(number) {
    const times = x => f => {
      for (i = 0; i == number; i++) {
        new Bot
        times (x - 1) (f)
      }
    }
  }
}
