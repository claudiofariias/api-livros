import { Router } from "express"

const router = Router()
const livros: { id: number; titulo: string }[] = []

router.get("/", (req, res) => {
  res.json(livros)
})

router.post("/", (req, res) => {
  const { titulo } = req.body
  const novoLivro = { id: livros.length + 1, titulo }
  livros.push(novoLivro)
  res.status(201).json(novoLivro)
})

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id)
  const index = livros.findIndex((livro) => livro.id === id)

  if (index === -1) {
    return res.status(404).json({ mensagem: "Livro não encontrado" })
  }

  livros.splice(index, 1)
  return res.status(204).send()
})

export default router
