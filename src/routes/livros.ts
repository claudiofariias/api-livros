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

export default router
