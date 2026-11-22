# Dan Jones: blog

A light blog for GitHub Pages at https://digidiplo.github.io. The homepage has
a short introduction, your latest short update in a speech bubble, and your
posts, newest first. Each post or update is a text file in `_posts/`. When you
add one, GitHub puts it on the site within a couple of minutes.

| To change | Edit |
|---|---|
| Homepage text and links | `_data/profile.yml` |
| A post | its file in `_posts/` |
| Images | upload to `assets/img/` |
| Colours and spacing | `style.css` |

## Put it live

1. Open the `digidiplo.github.io` repository on GitHub. If it doesn't exist,
   click **+**, then **New repository**, name it `digidiplo.github.io`, set it
   to **Public**, and click **Create repository**.
2. If the repository has files from an earlier version, delete them first.
3. Click **Add file**, then **Upload files**. Drag in everything inside this
   folder (not the folder itself), and click **Commit changes**.
4. Go to **Settings**, then **Pages**. Set **Source** to **Deploy from a
   branch**, choose `main` and `/ (root)`, and click **Save**.
5. Open the **Actions** tab. When the build shows a green tick, the site is
   live.

## Post a short update

A short update is a sentence or two with no title. The newest one appears in
the speech bubble beside your description, and the arrows step back through
the last five. They all stay on the Updates page (`/updates/`), grouped by
day, and they stay out of the Posts list.

1. In `_posts`, click **Add file**, then **Create new file**.
2. Name it with the date and a word or two, for example
   `2026-12-01-scoring.md`.
3. Paste this and replace the text:

   ```markdown
   ---
   short: true
   ---

   Got Claude scoring tender notices today. First run flagged 9 of 51.
   ```

4. Click **Commit changes**.

Links and bold work in short updates too. For two updates on the same day, add
a time so they appear in the right order: `date: 2026-12-01 15:30` under
`short: true`. Use a time that has already passed, or the update stays hidden
until the site next rebuilds after that time.

## Write a post

1. In the repository, open the `_posts` folder.
2. Click **Add file**, then **Create new file**.
3. Name the file with today's date and a short name, for example
   `2026-12-01-tender-radar-first-results.md`.
4. Paste this, then write your post under the second row of dashes:

   ```markdown
   ---
   title: "Tender radar: first results"
   ---

   Your update goes here.
   ```

5. Click **Commit changes**.

The post appears at the top of the homepage a minute or two later. The
homepage shows the first paragraph as a preview.

To format the text, use `## ` at the start of a line for a heading, `**bold**`,
and `- ` at the start of a line for a bullet. Leave a blank line between
paragraphs.

## Add a post image

A post image shows as a thumbnail beside the post on the homepage, at the top
of the post, and in the preview card when you share the link on LinkedIn.

1. Open the `assets/img` folder, click **Add file**, then **Upload files**.
   Drag in the image and click **Commit changes**.
2. In the post, add an `image` line between the dashes, using the exact file
   name:

   ```markdown
   ---
   title: "Tender radar: first results"
   image: /assets/img/tender-radar-results.jpg
   image_alt: "Screenshot of the tender list, filtered by category"
   ---
   ```

`image_alt` describes the image for screen readers. `image_caption` is
optional and shows under the image on the post page.

- Name image files in lower case with hyphens, no spaces. The site treats
  `Results.JPG` and `results.jpg` as different files.
- A landscape image about 1200 x 630 pixels works best, and suits LinkedIn
  previews.
- Keep each image under 1 MB so the page stays quick.

To put an image in the middle of a post instead, upload it the same way and
add `![What the image shows](/assets/img/file-name.png)` on its own line.

## Drafts

Add `published: false` under the title to keep a post off the site while you
work on it. Delete that line when it's ready. The repository is public, so
anyone can still read a draft's file on GitHub.

There is one draft already: `_posts/2026-11-22-first-post.md`. Write it,
delete the `published: false` line, or delete the file.

## Add your photo

Upload a square photo to `assets/img/`, then in `_data/profile.yml` set
`photo: "/assets/img/your-file-name.jpg"`. Until then the circle shows your
initials.

## If something doesn't appear

- **A post is missing:** check the file name starts with a date that isn't
  in the future, the two rows of three dashes are intact, and there is no
  `published: false` line.
- **The build fails:** the **Actions** tab names the file. It is usually
  indentation in `profile.yml` or a missing quote mark.
- **Nothing updates:** check that there is no `.nojekyll` file and that Pages
  uses `main` and `/ (root)`.
