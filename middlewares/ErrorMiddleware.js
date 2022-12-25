const globalError = (err, req, res, next) => {

    if(process.env.NODE_ENV == 'development') {
        res.status(err.status || 404).json({
            error: err.message || 'error',
            status: err.status || 500,
            stack: err.stack
        })
    } else {
        res.status({
            error: err.message || 'error',
            status: err.status || 500
        })
    }
    
}

module.exports = globalError