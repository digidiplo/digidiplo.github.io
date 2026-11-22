# Blog cheatsheet

A quick reference for writing posts on digidiplo.github.io. Copy a snippet and
change the words. Everything here works on your site as it is now, once you've
uploaded the updated `style.css`.

## Start a post

In `_posts`, click **Add file**, then **Create new file**. Name it with the
date and a short name, in lower case with hyphens:

```
2026-12-01-tender-radar-first-results.md
```

The post's web address comes from the file name:
`digidiplo.github.io/2026/12/01/tender-radar-first-results/`

Start every post with its settings between two rows of dashes. Only `title` is
required. Delete any line you don't need.

```
---
title: "Tender radar: first results"
description: "One line for the homepage preview and link previews"
image: /assets/img/tender-radar.jpg
image_alt: "Bar chart of notices found each day"
image_caption: "Notices found in the first week"
published: false
---
```

| Setting | What it does |
|---|---|
| `title` | The post title |
| `description` | Replaces the first paragraph as the homepage preview |
| `image` | Post image: homepage thumbnail, top of the post, and LinkedIn preview |
| `image_alt` | Describes the post image for screen readers |
| `image_caption` | Small text under the post image |
| `published: false` | Keeps the post off the site. Delete the line to publish |
| `short: true` | Makes it a short update instead of a post (see below) |

## Short updates

For a quick update with no title, like a tweet. The newest appears in the
speech bubble on your homepage, where the arrows step back through the last
five. All of them stay on the Updates page, grouped by day.

```
---
short: true
---

Got Claude scoring tender notices today. First run flagged 9 of 51.
```

Name the file like a post, for example `2026-12-01-scoring.md`. For two on the
same day, add a time under `short: true`, such as `date: 2026-12-01 15:30`.
Use a time that has already passed, or the update stays hidden.

Keep them to a sentence or two. Links, bold, and a small image all work.

## Text

| Type this | You get |
|---|---|
| A blank line between paragraphs | A new paragraph |
| `## What I built` | A section heading |
| `### Week one` | A smaller heading |
| `**bold**` | **bold** |
| `*italic*` | *italic* |
| `~~struck out~~` | ~~struck out~~ |
| `<mark>highlighted</mark>` | A green highlight |
| `<br>` at the end of a line | A line break without a new paragraph |

Don't use `#` (one hash) for headings. The post title is already the top
heading.

## Links

```
[Find a Tender](https://www.find-tender.service.gov.uk/)
[my first post](/2026/11/22/why-im-writing-this/)
[the slides (PDF)](/assets/slides.pdf)
[Find a Tender](https://www.find-tender.service.gov.uk/){:target="_blank"}
```

The last one opens in a new tab. To link to another post, use its web address
without `digidiplo.github.io`.

## Lists

```
- A bullet
- Another bullet
  - An indented bullet (two spaces first)

1. A numbered step
2. The next step

- [x] Pull notices from the API
- [ ] Score them with Claude
```

The last list shows as ticked and unticked boxes.

## Images

**Upload first.** Open `assets/img`, click **Add file**, then **Upload files**,
drag the image in, and click **Commit changes**. Then use one of these in your
post, on its own line, with a blank line above and below.

A plain image:

```
![The filtered tender list](/assets/img/tender-list.png)
```

The words in the square brackets describe the image for people who can't see
it. Always fill them in.

Start the path with a slash: `/assets/img/...`. The site also copes without
it, but GitHub's **Preview** tab only finds the image when the slash is there.
Without it, the Preview looks inside `_posts`.

If the file name has spaces, such as a Mac screenshot, wrap the path in angle
brackets so the Preview shows it too:

```
![The filtered tender list](</assets/img/Screenshot 2026-11-22 at 16.41.32.png>)
```

An image with a caption:

```html
<figure>
  <img src="/assets/img/tender-list.png" alt="The filtered tender list">
  <figcaption>The list after one week.</figcaption>
</figure>
```

Two images side by side (they stack on phones):

```html
<div class="pair">
  <img src="/assets/img/before.png" alt="The map before">
  <img src="/assets/img/after.png" alt="The map after">
</div>
```

A smaller image:

```
![The filtered tender list](/assets/img/tender-list.png){: width="320"}
```

An image without a border, for logos or diagrams on white:

```
![Process diagram](/assets/img/process.png){: .plain}
```

An image that opens full size when clicked:

```
[![The full stakeholder map](/assets/img/map.png)](/assets/img/map.png)
```

Image tips:

- Name files in lower case with hyphens and no spaces before you upload, for
  example `tender-list.png`. `Map.PNG` and `map.png` are different files to the
  site.
- Keep images under 1 MB. Screenshots save smaller as PNG; photos as JPG.
- Check the path matches the file name exactly, including `.png` or `.jpg`.

## Quotes and highlighted boxes

A quote:

```
> The best tool is the one you still open in week three.
```

A highlighted box, for a result or a key point. Put `{: .note}` on the line
straight after the paragraph:

```
**Result:** it caught every notice I'd have found by hand.
{: .note}
```

## Code

Inline code: wrap it in backticks, like `` `pip install requests` ``.

A block of code: put three backticks and the language on the line above, and
three backticks on the line below:

````
```python
response = requests.get(url, params={"limit": 100})
```
````

Languages include `python`, `javascript`, `bash`, `json`, `yaml`, `html` and
`sql`. Leave the language off for plain text, such as a prompt.

If your code contains `{{` or `{%`, the site tries to process it and the build
fails. Put `{% raw %}` on the line before the code block and `{% endraw %}` on
the line after.

## Tables

```
| Week | Notices found | Useful |
|---|---:|---:|
| 1 | 48 | 6 |
| 2 | 51 | 9 |
```

The `---:` lines right-align the number columns. The columns don't need to line
up in your text.

## Collapsible section

Good for a long prompt or output that most readers will skip:

```html
<details markdown="1">
<summary>Show the full prompt</summary>

Your text here. **Markdown** works inside.

</details>
```

Keep the blank lines inside.

## Footnotes

```
The API returns 100 notices per page.[^1]

[^1]: You can ask for fewer, but not more.
```

Footnotes appear at the bottom of the post, numbered automatically.

## Video and embeds

A YouTube video. Copy the ID from the video's address (the part after `v=`):

```html
<div class="video">
  <iframe src="https://www.youtube-nocookie.com/embed/VIDEO_ID" title="Demo of the tender radar" allowfullscreen></iframe>
</div>
```

A short video file. Upload it to `assets/img` like an image. Files uploaded
through the GitHub website must be under 25 MB, so use YouTube for anything
longer than a minute or two.

```html
<video src="/assets/img/demo.mp4" controls></video>
```

A LinkedIn post. On LinkedIn, click **...** on the post, then **Embed this
post**, copy the code, and paste it into your post on its own line.

## Files to download

Upload the file to `assets`, then link to it:

```
[Download the slides (PDF)](/assets/slides.pdf)
```

## Divider

```
***
```

Use three asterisks with a blank line above and below. Three dashes straight
under a line of text turn that text into a heading instead.

## Things that won't work

- Diagrams written as code (Mermaid). Draw the diagram, save it as an image,
  and upload it.
- A post dated in the future. It stays hidden until that date and a new
  commit.
