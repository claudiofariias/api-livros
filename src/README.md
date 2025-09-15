# API de Livros em TypeScript

## Requisitos
- Node.js (>= 18)
- npm

## Instalação
```bash
npm install
```

## Execução em modo desenvolvimento
```bash
npm run dev
```

## Endpoints
- **GET** `http://localhost:8080/api/livros`  
  Retorna a lista de livros armazenados inicialmente vazio.
  
## Estrutura de Pastas
- `src/index.ts` -> ponto de entrada da aplicação  
- `src/routes/livros.ts` -> rotas da API  
- `package.json` -> dependências e scripts  
- `tsconfig.json` -> configuração do TypeScript  

## Workflow adotado
  Adotamos o GitHub Flow devido à sua simplicidade e eficiência no gerenciamento de desenvolvimento, garantindo que a branch master permaneça estável e pronta para produção. Cada nova funcionalidade é desenvolvida em uma branch separada (ex: feature/2-post-product), permitindo que o código seja isolado, revisado e testado antes de ser mesclado de volta à master por meio de Pull Requests. Esse fluxo facilita a colaboração, o controle de qualidade e a integração contínua no projeto.