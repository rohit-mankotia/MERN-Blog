const mongoose = require('mongoose')
const url = process.env.URL

const connectDB = () => {
    mongoose.connect(url, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    })
    console.log('DB connected..!')
}

module.exports = connectDB