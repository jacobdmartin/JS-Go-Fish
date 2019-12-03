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
}
