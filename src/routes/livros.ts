import { Router } from "express"

const router = Router()
const livros: { id: number; titulo: string }[] = []

router.get("/", (req, res) => {
  res.json(livros)
})

export default router
