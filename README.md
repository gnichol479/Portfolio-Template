# Portfolio Starter

This is a beginner-friendly one-page React portfolio for the college workshop.
Copy the project, replace the placeholder content, adjust the colors, and deploy
it to Vercel when you are ready.

## 1. Install the required tools

Install these before the workshop:

- [Node.js LTS](https://nodejs.org/)
- [Git](https://git-scm.com/downloads)
- [Visual Studio Code](https://code.visualstudio.com/)

You also need accounts at:

- [GitHub](https://github.com/)
- [Vercel](https://vercel.com/)

Check that Node and npm work:

```bash
node --version
npm --version
```

## 2. Install and start the site

Open a terminal in this folder and run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## 3. Personalize your portfolio

Edit exactly this file first:

```text
src/data/portfolioData.js
```

Replace `NAME`, the headline, introduction, About text, email, skills, and
projects. The example values are intentionally fictional and do not claim real
awards, jobs, or performance metrics.

The page hides optional buttons and sections when their values are empty. Keep a
URL empty until you have a real URL to use; do not replace it with `#`.

## 4. Change colors and fonts

Open:

```text
src/styles.css
```

The first block, `:root`, contains the main customization settings. Start with
these variables:

- `--color-background`
- `--color-surface`
- `--color-text`
- `--color-muted`
- `--color-accent`
- `--content-width`
- `--border-radius`
- `--font-family`

The project uses system fonts, so it does not need an external font service.

## 5. Add or remove a project

Projects live in the `projects` array in `src/data/portfolioData.js`.

To add one, copy a complete project object, add a comma after the previous
object, and replace the title, description, technologies, and links. To remove
one, delete its entire object, including the comma that belongs to it.

Each project supports:

- `title`
- `description`
- `technologies`
- optional `image`
- optional `imageAlt`
- optional `githubUrl`
- optional `liveDemoUrl`

## 6. Add a photo or project screenshot

Put image files in:

```text
public/images/
```

For example, if the file is `public/images/example.png`, reference it in the
data file as:

```js
image: "/images/example.png"
```

Do not write `public/images/example.png` in the browser path. Files in `public`
are served from the site root. A profile image uses the same path format in
`profileImage`.

If an image is not ready, leave the field empty. The card will still have a
complete project preview area.

## 7. Add a resume PDF

Put the PDF directly in `public/`, for example:

```text
public/resume.pdf
```

Then set this value in `src/data/portfolioData.js`:

```js
resumePath: "/resume.pdf"
```

The Resume button stays hidden while `resumePath` is empty.

## 8. Folder structure

```text
public/
  images/
    .gitkeep
src/
  components/
    Header.jsx
    Hero.jsx
    About.jsx
    Skills.jsx
    Projects.jsx
    Contact.jsx
    Footer.jsx
  data/
    portfolioData.js
  App.jsx
  main.jsx
  styles.css
index.html
package.json
README.md
.gitignore
```

The components control layout. `portfolioData.js` controls student-specific
content. `styles.css` controls appearance. `index.html` contains the page title
and description used by browsers and search previews.

To edit the browser title and description, update the `<title>` and
`<meta name="description">` values in `index.html` after you update your name.

## 9. Test a production build

Run:

```bash
npm run build
npm run preview
```

The build command creates `dist/`. The preview command lets you check the
production version locally.

## 10. Deploy with Vercel

1. Push this project to a GitHub repository.
2. Sign in to Vercel.
3. Choose **Add New...** and **Project**.
4. Import the GitHub repository.
5. If this folder is its own repository, leave the Root Directory as `.`.
6. If you are deploying from the parent MuleSuits repository, set the Root
   Directory to `portfolio-starter`.
7. Keep the framework preset as Vite if Vercel asks for one.
8. Choose **Deploy**.

There are no environment variables, API keys, backend services, or databases
in this starter.

## 11. Publish future updates

After changing the site:

```bash
git add .
git commit -m "Update portfolio"
git push
```

Vercel will build and publish the new commit automatically when the GitHub
repository is connected.

## Five-minute customization checklist

1. Replace `NAME` in `src/data/portfolioData.js`.
2. Rewrite the headline and short introduction.
3. Replace the About text.
4. Add three real skills.
5. Replace the three example projects with your own work.
6. Add your email and at least one real professional link.
7. Change `--color-accent` in `src/styles.css`.
8. Update the `<title>` in `index.html`.

## Optional challenges

If you finish early, try one of these:

1. Add a fourth project with a screenshot from `public/images/`.
2. Add a short “Currently learning” section by creating a new component.
3. Add a light/dark color variation by changing the CSS variables and testing
   the contrast of your links and buttons.
