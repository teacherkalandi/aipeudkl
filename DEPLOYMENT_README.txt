AIPEU DHENKANAL — COMPLETE UPDATED WEBSITE

This package contains the complete source code, images, Firebase configuration,
and the tested production build in dist/. node_modules and Git history are excluded.

OPTION 1 — VERCEL (SOURCE PROJECT)
1. Extract this ZIP.
2. Upload all project files to your GitHub repository, preserving the folder paths.
3. Import or redeploy that repository in Vercel.
4. Framework: Vite. Install command: npm install --legacy-peer-deps
5. Build command: npm run build. Output directory: dist
The included vercel.json supplies these settings.
Use Node.js 24 (the version used to build this package).

OPTION 2 — STATIC HOSTING (READY BUILD)
Upload the CONTENTS of dist/ to your hosting web root, or upload the separate
AIPEUDHENKANAL_Ready_to_Deploy.zip to a host that accepts static-site uploads.
index.html must be at the root of the published directory.
Host at the domain root (/), since the application uses root-relative asset paths.
Use HTTPS for the installable mobile/PWA features.

LOCAL DEVELOPMENT
npm install --legacy-peer-deps
npm run dev

LOCAL BUILD
npm run lint
npm run build

INCLUDED CHANGES
- User Portal Executive Directory & Contacts reads the same live Office Bearers
  list as the main directory, rather than an old fixed list of six people.
- Firebase changes propagate through a real-time subscription.
- Additions, edits, deletions and an empty member list are supported.
- User Portal has moved from the title bar into Menu; the language bar link remains.
- The website title has a full-width row on mobile.

EXISTING SERVICES
The existing Firebase project configuration is preserved. Continue using its current
Firestore database and permissions for Office Bearers and other dynamic content.
A new Firebase project requires its own configuration and deployed rules.
The original Blogger /api/posts endpoint is implemented as a Vite development
middleware; these files do not add a production server endpoint. Static production
hosting uses the existing bundled/Firestore fallback when that endpoint is absent.

VALIDATION
TypeScript and production build passed. Mocked data subscription checks passed.
Browser visual checks were not completed because the browser download failed.
The legacy-peer-deps install setting handles the repository's existing npm peer
version conflict without changing its application dependency versions.

These files have not been pushed to GitHub or deployed.

MY APPS — HTML UPLOAD
---------------------
Deploy the updated website AND publish firestore.rules to the configured Firebase
project/database. GitHub/Vercel website deployment alone does not publish rules.
Admin Portal > My Apps: enter an app name, select a self-contained .html/.htm
file (maximum 700 KB), optionally enter category/description, then Publish App.
Home menu > My Apps displays shared cards; clicking an HTML app opens the app
in a full-screen isolated frame. Close App returns to the cards. URL shortcuts
continue to open separately. Deleting an app removes its card for all visitors.
Uploads/deletes report database failures rather than claiming success.
Existing browser-only custom shortcuts are not automatically published.

Compatibility: inline HTML/CSS/JavaScript works; separate local assets must be
embedded. External resources need internet. The isolated frame intentionally
cannot access the host website's login/storage, navigate the top-level page,
or open popups. Apps requiring localStorage, service workers, or directory
picker APIs require a separately hosted origin rather than this HTML viewer.

Access model: portalApps rules follow this repository's existing unauthenticated
write model. The current admin login is browser-side only, not Firebase Auth.
These rules validate data but do not restrict writes to administrators. Before
using this on a public production site, implement Firebase Auth and restrict
portalApps writes to verified admin identities. Do not treat the admin password
screen as database authorization.

Validation: npm run lint; npm run build; node --test tests/portalApps.test.mjs.
Live Firebase and browser end-to-end upload tests were not performed.
