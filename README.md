# underthelights.github.io

Personal academic homepage of **Kyuhwan Shim** — built with Jekyll, served on GitHub Pages.

🎓 Master's student at the [Graduate School of AI](https://gsai.snu.ac.kr), Seoul National University, advised by [Prof. Byoung-Tak Zhang](https://bi.snu.ac.kr/~btzhang). Research Scientist Intern at the Physical Intelligence Lab, [LG AI Research](https://www.lgresearch.ai).

🤖 Broadly interested in **robotics**, **multimodal learning**, and **physical intelligence** — developing **vision-language-action (VLA)** models toward generalist robot policies that perceive, reason, and act in the real world.

📫 kyuhwan.shim (at) snu (dot) ac (dot) kr · [Website](https://underthelights.github.io) · [CV](https://underthelights.github.io/cv.pdf)

## Structure

| Path | What it is |
|---|---|
| `index.html` | Home — bio, education, experience, selected awards, publication list |
| `cv/` | Full CV page (`cv.pdf` at repo root is the PDF version) |
| `_publication/` | One markdown file per paper (collection); rendered on home, `/publication`, and `/cv` |
| `_data/` | YAML data: `news.yml`, `project.yml`, `people.yml` (author info), `publication-category.yml` (filter tabs) |
| `blog/`, `_posts/` | Blog — posts are imported from Notion (see below) |
| `news/`, `project/`, `music/`, `artwork/`, `oconnect/` | Section pages |
| `_layouts/`, `_includes/` | Templates (this repo is a fork of the minima theme — see `underthelights.gemspec`) |

### Adding a publication

Create `_publication/<venue><yy>_<slug>.md` with frontmatter (`title`, `year`, `month`, `authors`, `venue`, `category: International|Domestic`, optional `paper`/`page`/`github`/`award`/`abstract`/`bibtex`). The title link prefers `page` (project page) → `paper` (arXiv) → internal detail page. Set `pdf: false` when there is no paper link.

## Development

Requires Ruby 3.3 (matches CI; `brew install ruby@3.3` on macOS).

```bash
export PATH="/opt/homebrew/opt/ruby@3.3/bin:$PATH"   # keg-only
bundle install
bundle exec jekyll serve -w -l    # http://localhost:4000, or: npm start
```

## Deployment

- `.github/workflows/pages-deploy.yml` runs on `repository_dispatch` (type `RUN_WORKFLOW_DISPATCH`): imports blog posts from Notion via `_scripts/notion-import.js` (secrets `NOTION_TOKEN`, `DATABASE_ID`), then builds and deploys to GitHub Pages.
- Regular pushes to `main` deploy via GitHub Pages directly.
