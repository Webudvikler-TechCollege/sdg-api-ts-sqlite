# Sustainable Development Goals API

Dette API fungerer som datagrundlag for React-projektet om FN's verdensmål.

API'et er bygget med **Node.js, Express, TypeScript, Prisma og SQLite** og indeholder de data, der skal bruges på verdensmålsitet.

Du skal hente API'et fra det udleverede repository, installere det og køre det lokalt. Herefter kan dit React-projekt hente data fra API'et med eksempelvis `fetch` eller `axios`.

API'et indeholder blandt andet data om:

- FN's 17 verdensmål
- Delmål (targets)
- Temaer
- Undervisning
- FAQ
- Brugere
- Kommentarer

API'et indeholder også endpoints til login og authentication.

Når API'et kører lokalt, kan det som udgangspunkt tilgås på:

`http://localhost:4000/api`

Du kan bruge API'et som datakilde gennem hele React-projektet og arbejde med blandt andet data fetching, dynamiske routes, formularer, authentication og custom hooks.

Du kan tilpasse API'et, hvis det bliver nødvendigt i din løsning.

---

## Kom i gang

### 1. Klon repo og installér afhængigheder

```bash
git clone [REPO-URL]

cd [MAPPE-NAVN]
```

### 2. Kopier eller omdøb `.env.example` til `.env`

```bash
cp .env.example .env
```

### 3. Installer pakker

```bash
npm install
```

### 4. Start serveren

```bash
npm run dev
```

### 5. Få overblik over data

```bash
npx prisma studio
```

Nu skulle du gerne kunne se en oversigt over dine modeller og data i din browser. Det er Prismas admin-panel til din database.

Klik på en af modellerne til venstre hvis du vil se og redigere data.

# sdg-api-ts-sqlite

### Postman Docs

Du kan hente dokumentation og teste API'et via Postman fra nedenstående link.

[[https://documenter.getpostman.com/view/6540576/TVemBVNN\](https://documenter.getpostman.com/view/6540576/TVemBVNN)](https://documenter.getpostman.com/view/6540576/TVemBVNN]\(https://documenter.getpostman.com/view/6540576/TVemBVNN\))