# espaker/mysite

Portfólio pessoal de **Espaker Kaminski** — desenvolvedor full-stack autodidata.

**Live:** https://espaker.netlify.app

---

## Stack

| Camada | Tecnologia |
|---|---|
| UI | React 18 + TypeScript |
| Bundler | Vite |
| Componentes | Ant Design v5 |
| Ícones | Lucide React |
| Fonte | Poppins (Google Fonts) |
| Data | Day.js |
| Deploy | Netlify |

---

## Funcionalidades

- **Single Page Application** com scroll suave entre seções
- **Tema claro/escuro** — detecta `prefers-color-scheme` do SO, escuta mudanças em tempo real e persiste preferência manual no `localStorage`
- **Favicon dinâmico** — `favLight.svg` / `favDark.svg` alternados conforme o tema
- **i18n sem lib externa** — pt-BR e en-US detectados via `navigator.language`, botão de alternância com bandeira, preferência persistida no `localStorage`
- **Animações de entrada** via `IntersectionObserver` puro (sem libs)
- **Idade calculada dinamicamente** com Day.js a partir de `02/01/1997`
- **Responsivo** — mobile-first, menu hamburguer no mobile via Drawer do antd

---

## Seções

| # | Seção | Descrição |
|---|---|---|
| 1 | **Hero** | Foto, nome, cargo, subtítulo e botões GitHub / LinkedIn / Skills |
| 2 | **Sobre mim** | Bio completa com age dinâmica |
| 3 | **Habilidades** | Cards por categoria com tags de tecnologias |
| 4 | **Como aprendo** | Callout filosofia de aprendizado |
| 5 | **Contato / Footer** | GitHub, LinkedIn, email, telefone, localização |

### Categorias de habilidades

- Linguagens
- Backend
- Frontend
- Bancos de Dados
- Telefonia & Telecom
- IA & Integrações
- DevOps & Infra
- Linux
- Desktop
- Tooling

---

## Estrutura do projeto

```
mysite/
├── index.html              # Entry point do Vite
├── netlify.toml            # Config de build e redirects para Netlify
├── vite.config.ts          # base: './' para deploy estático
├── tsconfig.json           # References para app e node
├── tsconfig.app.json
├── tsconfig.node.json
├── public/
│   ├── profile.png         # Foto de perfil
│   ├── favLight.svg        # Favicon tema claro
│   └── favDark.svg         # Favicon tema escuro
└── src/
    ├── main.tsx            # Ponto de entrada React
    ├── App.tsx             # ConfigProvider antd + composição de seções
    ├── index.css           # CSS global (variáveis, reset, layout, responsivo)
    ├── types.ts            # Tipo ThemeMode
    ├── vite-env.d.ts       # Tipos do Vite (import de .css, etc.)
    ├── hooks/
    │   ├── useTheme.ts     # Detecta SO, escuta mudanças, persiste no localStorage
    │   └── useTranslation.ts # Detecta navigator.language, persiste locale
    ├── i18n/
    │   ├── pt-BR.ts        # Traduções em português
    │   └── en-US.ts        # Traduções em inglês
    ├── utils/
    │   └── age.ts          # getAge() via Day.js
    └── components/
        ├── Header.tsx      # Navbar fixa, logo SVG por tema, hamburguer mobile
        ├── Hero.tsx        # Avatar, nome, cargo, botões
        ├── About.tsx       # Parágrafo com {age} substituído em runtime
        ├── Skills.tsx      # Grid de cards por categoria
        ├── HowILearn.tsx   # Blockquote de destaque
        └── Footer.tsx      # GitHub, LinkedIn, email, telefone, localização
```

---

## Rodar localmente

Requer Node.js 20+ e pnpm.

```bash
pnpm install
pnpm dev
```

Acesse `http://localhost:5173`.

## Build de produção

```bash
pnpm build
pnpm preview   # testar o build localmente
```

O output fica em `dist/`.

---

## Deploy (Netlify)

O repositório está conectado ao Netlify. O `netlify.toml` define:

```toml
[build]
  command = "pnpm build"
  publish = "dist"

[[redirects]]
  from   = "/*"
  to     = "/index.html"
  status = 200
```

Qualquer push para a branch `master` dispara um novo deploy automaticamente.

---

## Decisões de projeto

- **Sem lib de i18n** — sistema próprio com um objeto de traduções e hook `useTranslation`, zero overhead
- **Sem lib de animação** — `IntersectionObserver` puro para fade-in das seções
- **Sem lib de roteamento** — SPA de scroll único, sem React Router
- **antd theming nativo** — `theme.defaultAlgorithm` / `theme.darkAlgorithm` via `ConfigProvider`, sem CSS override manual de dark mode
- **Favicon por tema** — dois `<link rel="icon" media="...">` no HTML + `useEffect` no App que sincroniza com o toggle manual do usuário
