const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const cardRoutes = require('./routes/cards')

const app = express()
dotenv.config()
app.use(express.json({limit:'30mb', extended: true}))
app.use(express.urlencoded({limit:'30mb',extended: true}))
app.use(cors())
app.use('/cards', cardRoutes)

app.get('/', (req, res) => {
    res.send("Timer App")
})

const PORT = process.env.PORT || 300

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(() => app.listen(PORT, console.log(`Server Running On PORT ${PORT}`)))
    .catch((error) => console.log(error))

mongoose.set('useFindAndModify', false)

