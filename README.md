# Krish Goyal — Portfolio

My portfolio website: a 3D room rendered with Three.js, with a working
retro desktop ("KrishOS") on the computer monitor. The desktop holds my
showcase (about, experience, projects, skills & achievements, contact),
a small Wordle clone and credits.

## Structure

```
portfolio_website/
├── room/          3D scene (Three.js + webpack) and the Express server
│   ├── src/       scene, camera, audio and loading-screen code
│   ├── static/    models, textures, audio (the OS build is copied to static/os)
│   └── server/    Express server: serves the build and the contact-form API
├── inner-site/    the OS shown on the monitor (React, Create React App)
│   └── src/components/showcase/   portfolio pages
├── scripts/       build helpers
└── package.json   root scripts that build both apps together
```

The monitor loads the OS from `/os/index.html`, so `inner-site` is built
first and copied into `room/static/os/` before the room is built or served.

## Running locally

Requires Node.js 18 or newer.

```bash
# 1. Install dependencies for both apps
npm run install:all

# 2. Build the OS and start the dev server (prints the local URL)
npm run dev
```

## Production build

```bash
# Builds inner-site, copies it into the room, then builds the room into room/public/
npm run build

# Serves room/public/ and the contact-form API on port 8080
npm start
```

The contact form sends mail through Gmail SMTP from the Express server. Set
these environment variables before `npm start`:

| Variable         | Purpose                                                |
| ---------------- | ------------------------------------------------------ |
| `FOLIO_EMAIL`    | Gmail address the server sends from                    |
| `FOLIO_PASSWORD` | Gmail app password for that address                    |
| `FOLIO_TO`       | Where messages go (defaults to krishgoyal745@gmail.com) |

Under `npm run dev` there is no server, so the form shows an error asking
visitors to email directly.
