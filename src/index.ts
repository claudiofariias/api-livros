import express from "express"
import livrosRouter from "./routes/livros"

const app = express()
app.use(express.json())
app.use("/api/livros", livrosRouter)

app.listen(8080, () => {
  console.log("Servidor rodando na porta 8080")
})
