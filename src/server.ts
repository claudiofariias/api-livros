import express from "express"
import livrosRouter from "./routes/livros"

const app = express()
app.use(express.json())
app.use("/api/livros", livrosRouter)

export default app