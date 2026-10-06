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
│   └── server/    optional Express server for self-hosting (`npm start`)
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
```

`room/public/` is a fully static site. It is deployed on Vercel using the
settings in [vercel.json](vercel.json).

## Contact form

The form posts to [Web3Forms](https://web3forms.com), which forwards each
message to my email. The access key is read at build time from
`REACT_APP_WEB3FORMS_KEY`:

- On Vercel, set it under Project → Settings → Environment Variables.
- Locally, put `REACT_APP_WEB3FORMS_KEY=<key>` in `inner-site/.env.local`.

Without the key the form shows an error asking visitors to email directly.
