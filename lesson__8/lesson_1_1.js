class MyPromise {
  constructor(executor) {
    this.state = 'pending'
    this.result = undefined
    this.thenCallBacks = []
    this.catchCallBacks = []

    try {
      executor(this.resolve.bind(this), this._reject.bind(this))
    } catch(error) {
      this.catch(error)
    }

  }

  static resolve(value) {
    return new CustomPromise(resolve => resolve(value))
  }

  static reject(value) {
    return new CustomPromise((resolve, reject) => reject(value))
  }

  resolve(value) {
    if (this.state === 'pending'){
      if (value instanceof CustomPromise) {
        value.then(this.resolve.bind(this), this._reject.bind(this))
        return
      }
      this.state = 'fulfilled'
      this.result = value
      this.thenCallBacks.forEach((callback) => callback(value))
    }
  }

  rejected(value) {
    if (this.state === 'pending'){
      if (value instanceof CustomPromise) {
        value.then(this.resolve.bind(this), this._reject.bind(this))
        return
      }
      this.state = 'rejected'
      this.result = value
      this.catchCallBacks.forEach((callback) => callback(value))
    }
  }

  then(thenCallback, catchCallback) {
    return new CustomPromise((resolve, reject) => {
      if (this.#state === 'pending') {
        this.thenCallbacks.push(result => {
          if (thenCallback == null) {
            resolve(result)
            return
          }
          try {
            resolve(thenCallback(result))
          } catch (error) {
            reject(error)
          }
        })

        this.catchCallbacks.push(result => {
          if (catchCallback == null) {
            reject(result)
            return
          }
          try {
            resolve(catchCallback(result))
          } catch (error) {
            reject(error)
          }
        })
      }

      if (thenCallback && this.state === 'fulfilled') {
				try {
					resolve(thenCallback(this.result))
				} catch (error) {
					reject(error)
				}
			}

			if (catchCallback && this.state === 'rejected') {
				try {
					reject(catchCallback(this.result))
				} catch (error) {
					reject(error)
				}
			}
    })
  }

  catch(catchCallback) {
		return this.then(null, catchCallback)
	}
}
