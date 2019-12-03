class Bot extends Player {
  constructor(name) {
    super()
    this._name = name
  }

  name() {
    return this._name
  }
}
