export default class View {
    _loginForm = document.querySelector('#login')

    constructor() {
        this._loginForm.addEventListener('submit', (e) => this._login(e))
    }

    _login(event) {
        event.preventDefault()
    }
}
