import request from "supertest"
import app from "../src/server"

describe("Rotas de livros", () => {
  it("Deve adicionar um novo livro (POST /livros)", async () => {
    const res = await request(app)
      .post("/api/livros")
      .send({ titulo: "O Hobbit" })

    expect(res.status).toBe(201)
    expect(res.body).toHaveProperty("id")
    expect(res.body.titulo).toBe("O Hobbit")
  })

  it("Deve listar livros (GET /livros)", async () => {
    const res = await request(app).get("/api/livros")
    expect(res.status).toBe(200)
    expect(Array.isArray(res.body)).toBe(true)
  })

  it("Deve remover um livro existente (DELETE /livros/:id)", async () => {
    const livro = await request(app)
      .post("/api/livros")
      .send({ titulo: "Livro para deletar" })

    const res = await request(app).delete(`/api/livros/${livro.body.id}`)
    expect(res.status).toBe(204)
  })

  it("Deve retornar 404 ao tentar deletar um livro inexistente", async () => {
    const res = await request(app).delete("/api/livros/999")
    expect(res.status).toBe(404)
  })
})

      .post("/api/livros")
      .send({ titulo: "Livro para deletar" })

    const res = await request(server).delete(`/api/livros/${livro.body.id}`)
    expect(res.status).toBe(204)
  })

  it("Deve retornar 404 ao tentar deletar um livro inexistente", async () => {
    const res = await request(server).delete("/api/livros/999")
    expect(res.status).toBe(404)
  })
})
