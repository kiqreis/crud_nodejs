require('dotenv').config()

const express = require('express')
const app = express()
const { routes } = require('./routes/routes.js')
const port = process.env.PORT

require('./database')

app.use(express.json())
app.use(routes)

app.listen(port, () => console.log(`Server is running in port: http://localhost:${port}`))