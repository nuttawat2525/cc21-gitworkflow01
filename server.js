import express from 'express'
import { config } from 'dotenv'
import helmet from 'helmet'

config()

const app = express()
const PORT = process.env.PORT || 8000

app.use(helmet())

app.listen(8000, () => {
    console.log(`server is running`)
})