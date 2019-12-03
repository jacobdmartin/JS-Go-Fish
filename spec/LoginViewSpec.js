describe("Login Form", () => {
  it("submits for with correct data", () => {
    let data
    const setData = (name, number) => { data = {name, number } }
    const view = new LoginView(setData)
    const container = document.createElement('div')
    document.body.appendChild(container)
    view.draw(container)
    view.nameInput().value = "Eliot"
    view.numberInput().value = 2

    const button = document.querySelector('input[type="submit"]')
    button.click()

    expect(data).toEqual({name: "Eliot", number: 2})
    container.remove()
  })
})
