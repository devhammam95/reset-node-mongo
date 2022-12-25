const express = require('express')
const connect = require('./config/connection')
require('dotenv').config({path: '.env'})
const morgan = require('morgan')
const app = express()
const globalError = require('./middlewares/ErrorMiddleware')
const APiError = require('./utils/ApiError')
const config = process.env


app.use(express.json());

connect();

if (process.env.NODE_ENV == "development") {
    app.use(morgan('dev'))
}

//routes
const categoryRoutes = require('./routes/category')

app.use('/api/v1/categories', categoryRoutes)


app.all('*', (req, res, next) => {
    next(new APiError())
})

app.use(globalError)

const server = app.listen(config.PORT,() => {
    console.log(config.APP_NAME)
})


process.on('unhandledRejection', (err) => {
    console.log('Unhandle rejection error'+ err)
    server.close(() => { 
        process.exit(1)
    })
});

 