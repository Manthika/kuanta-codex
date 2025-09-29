# Kuanta Multilingual Marketing Site

This project is a customised Astro build of the Kuanta marketing site. It renders fully translated English and Korean content, supports locale-aware routing, and serves blog posts from language-specific feeds.

## ✨ Highlights

- 🌐 **Two fully translated locales** (`/en/`, `/ko/`) with automatic redirects from `/` to `/en/`.
- 🧭 Locale-aware navigation, headers, and footers sourced from the central i18n configuration.
- 📰 Blog index and post routes scoped by language, with dedicated RSS output for English content.
- 🧱 Reusable home and use-case components fed by translation data for each language.
- 🧩 Content collections with schema validation for translated markdown/MDX blog posts.

## 📁 Project Structure

```text
├── public/
├── src/
│   ├── components/        # Shared + locale-aware UI components
│   ├── content/
│   │   └── blog/          # Blog posts with `lang` and `slug` frontmatter
│   ├── i18n/              # Translation config & helpers
│   ├── layouts/
│   └── pages/
│       ├── index.astro    # Redirects to default locale
│       └── [lang]/        # Locale-scoped routes (home, use-cases, blog, posts)
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Blog posts live in `src/content/blog`. English articles may sit at the root of this directory, while Korean posts are grouped in `src/content/blog/ko`. Each file must declare:

```yaml
---
title: '...'
description: '...'
pubDate: 'Jan 01 2024'
lang: en        # or `ko`
slug: 'post-slug'
---
```

The `lang` flag and `slug` field are used at build time to generate locale-specific routes.

## 🌐 Adding a New Locale

1. Extend the `LangCode` union and `LANGUAGES` map in `src/i18n/config.ts` with the new language code, labels, and metadata.
2. Provide translations for `header`, `footer`, `home`, `useCases`, `blog`, and `blogPost` inside the `translations` object in the same file.
3. Create content under `src/pages/<new-lang>/` as needed (copy the `[lang]` templates if you want custom pages).
4. Author blog posts with `lang: <new-lang>` so they appear on the correct index and in language switcher paths.

## 🧞 Commands

All commands run from the project root:

| Command | Description |
| --- | --- |
| `npm install` | Install dependencies. *(Fails in locked-down environments; ensure you have access to the configured registry.)* |
| `npm run dev` | Start the local dev server at `http://localhost:4321`. |
| `npm run build` | Build the production site into `./dist`. |
| `npm run preview` | Preview the production build locally. |
| `npm run astro …` | Run Astro CLI commands such as `astro check`. |

## 🚧 Troubleshooting

- **403 Forbidden during `npm install`** – The environment may be configured with a restricted npm registry (see the warning about `http-proxy`). Update your `.npmrc` or registry credentials before installing.
- **Locale routing issues** – Verify that every page component calls `getStaticPaths()` with `LANGUAGES` and that post frontmatter includes the `lang` and `slug` fields.

## 📚 Further Reading

- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Astro Internationalisation Guide](https://docs.astro.build/en/guides/internationalization/)

