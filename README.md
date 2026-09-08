# Cervejaria Ratoeira — Restaurante & Cervejaria na Marinha Grande

Website oficial da Cervejaria Ratoeira (Marinha Grande, Portugal), desenvolvido em React 19, TypeScript, Tailwind CSS e Vite.

## Por que ocorria a "tela branca" no GitHub Pages?

1. **Caminhos absolutos sem base configurada:** No Vite, o padrão é usar caminhos absolutos como `/assets/index.js`. No GitHub Pages, onde o repositório fica em um subdiretório (`https://vermeulegustavo95-droid.github.io/-Ratoeira/`), o navegador tentava carregar os arquivos a partir da raiz do domínio (`/assets/...`), resultando em erro 404.
2. **Envio de arquivos TypeScript sem build:** O GitHub Pages é um servidor de arquivos estáticos simples. Ele não executa arquivos `.tsx` ou TypeScript diretamente. É necessário gerar a compilação com `npm run build` (pasta `dist/`).
3. **Script de fetch com erro no Window:** Havia uma tentativa de redefinir `window.fetch` que disparava o erro `TypeError: Cannot set property fetch of #<Window> which has only a getter`.

---

## Como publicar no GitHub Pages sem erros

### Opção 1: Automático via GitHub Actions (Recomendado)

Já incluímos o fluxo automatizado em `.github/workflows/deploy.yml`. Para ativar:

1. No repositório do GitHub (`https://github.com/vermeulegustavo95-droid/-Ratoeira`), vá em **Settings** > **Pages**.
2. Em **Build and deployment** > **Source**, selecione **GitHub Actions**.
3. Envie (push) os arquivos do projeto para a branch `main`.
4. O GitHub Actions executará o build e publicará o site automaticamente!

---

### Opção 2: Publicação Direta da pasta `dist/`

Se preferir enviar os arquivos compilados diretamente:

1. Execute:
   ```bash
   npm run build
   ```
2. A pasta `dist/` conterá o `index.html` compilado, a pasta `assets/` e as imagens.
3. Copie o **conteúdo** de `dist/` diretamente para o seu branch do GitHub Pages (ou suba os arquivos de `dist/` para a raiz do repositório/branch `gh-pages`).
