// tests/server.test.ts
import request from "supertest"
import { Express } from "express"

describe("Teste de integração com servidor real", () => {
  let app: Express

  beforeEach(() => {
    jest.resetModules()
    app = require("../src/server").default
  })

  it("Deve responder na rota GET /api/livros", async () => {
    const res = await request(app).get("/api/livros")
    expect(res.status).toBe(200)
    expect(Array.isArray(res.body)).toBe(true)
  })

  it("Deve criar um novo livro via POST /api/livros", async () => {
    const res = await request(app)
      .post("/api/livros")
      .send({ titulo: "1984" })
    expect(res.status).toBe(201)
    expect(res.body.titulo).toBe("1984")
  })

  it("Deve deletar o livro criado via DELETE /api/livros/:id", async () => {
    const novoLivro = await request(app)
      .post("/api/livros")
      .send({ titulo: "Livro para deletar" })

    const res = await request(app).delete(`/api/livros/${novoLivro.body.id}`)
    expect(res.status).toBe(204)
  })

  it("Deve retornar 404 ao deletar livro inexistente", async () => {
    const res = await request(app).delete("/api/livros/999")
    expect(res.status).toBe(404)
  })
})
