import express from 'express'
import { config } from 'dotenv'
import compression from 'compression'

config()

const app = express()
const PORT = process.env.PORT || 8000

app.use(compression())

app.listen(8000, () => {
    console.log(`server is running`)
})