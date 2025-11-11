import app from "./server"

if (process.env.NODE_ENV !== "test") {
  app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080")
  })
}
