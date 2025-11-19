import express from 'express'
import { config } from 'dotenv'

config()

const app = express()

const PORT = process.env.PORT || 8000
app.get('/',(req, res ) =>{
    res.send('Hello, World!')
})

app.listen(8000, () => {
    console.log(`server is running`)
})