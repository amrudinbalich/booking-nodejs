How it's laid out, matching your "Prisma only after" instruction:

1. npm install → cp .env.example .env → npm run dev — this gets you a working Express + TS + EJS site on localhost:3000 with zero DB involvement.
2. Once that's confirmed, fill in DATABASE_URL in .env, then npm run prisma:generate and npm run prisma:migrate to bring Prisma online.
3. src/lib/prisma.ts holds a singleton client — import it into any controller when you're ready to query.

# Express + TypeScript + EJS + Prisma Starter

## Structure

```
src/
  controllers/    route handlers
  routes/         express routers
  views/          .ejs templates
  public/         static assets (css, js, images)
  lib/prisma.ts   Prisma client singleton
  app.ts          express app config
  server.ts       entry point
prisma/
  schema.prisma   your data models
```

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy the env file and fill in your DB connection string:
   ```bash
   cp .env.example .env
   ```

3. Run the app **without** the DB first (base Express + TS + EJS layer):
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000

4. Once that's confirmed working, wire up Prisma:
   ```bash
   npm run prisma:generate
   npm run prisma:migrate
   ```

5. Import `prisma` from `src/lib/prisma.ts` in any controller once you're ready to query the DB, e.g.:
   ```ts
   import prisma from "../lib/prisma";
   const users = await prisma.user.findMany();
   ```

## Scripts

- `npm run dev` — dev server with hot reload
- `npm run build` — compile TypeScript
- `npm start` — run compiled build
- `npm run prisma:generate` — regenerate Prisma client
- `npm run prisma:migrate` — run migrations
- `npm run prisma:studio` — open Prisma Studio GUI
