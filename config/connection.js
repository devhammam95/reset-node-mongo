require('dotenv').config({path: '.env'})

const config = process.env

const { default: mongoose } = require('mongoose')

const connect = () => {
    mongoose.connect(`${config.DB_URL}`, {
    useNewUrlParser: true,
}).then((conn) => {
    useUnifiedTopology: true,
console.log('connected')
}).catch((err) => {
    console.log(err)
})
}

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "))
db.once("open", function () {
  console.log("Connected successfully");
})

module.exports = connect