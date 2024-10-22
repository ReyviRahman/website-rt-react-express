const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const port = 3001

const sequelize = require('./db.config')
sequelize.sync().then(() => console.log('database Ready'))

const userEndpoint = require('./routes/users')
const absensiEndpoint = require('./routes/absensi')

const app = express()
app.use(cors({
  origin: 'http://localhost:3000', // Ganti dengan URL front-end Anda
  credentials: true // Izinkan pengiriman cookie
}))
app.use(express.json())
app.use(cookieParser())


app.use('/users', userEndpoint)
app.use('/absensi', absensiEndpoint)
app.use('/uploads', express.static('uploads'))

app.listen(port, () => console.log(`running server on port ${port}`))