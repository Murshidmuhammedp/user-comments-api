import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './Routes/userRoutes.js'

dotenv.config()
const app = express()

app.use(express.json())

app.use('/user/api/v1', userRoutes)

mongoose.connect(process.env.DB)
    .then(() => console.log("Database Connected"))
    .catch((error) => console.log(error));

const PORT = process.env.PORT || 8523

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});