class APiError extends Error {
    constructor(message, statusCode) {
        super(message)
        this.message = message || 'error, try again'
        this.statusCode = statusCode  || 'fail'
        this.stack = this.stack
    }
}

module.exports = APiError