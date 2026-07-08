## Content authoring (blog posts)

Full authoring rules, widget API, and a copy-pasteable prompt for external AI
tools live in [docs/new-post-prompt.md](docs/new-post-prompt.md). Read it
before writing or editing any file under `src/content/`. Key points:

- New posts go in `src/content/hobby/{slug}.mdx` or `src/content/study/{slug}.mdx`.
  Frontmatter: `title`, `description`, `date` (YYYY-MM-DD), `tags` (array).
- Only use the three existing widgets from `src/components/widgets/`
  (`Quiz`, `Tabs`, `Stepper`) inside post content — don't invent new ones
  without being asked. Import path from a content file is
  `../../components/widgets/{Name}.astro`.
- Never write markdown `**bold**` immediately followed by a Korean particle
  (e.g. `**주축**과`) — CommonMark's flanking-delimiter rule breaks in that
  case and the `**` renders literally. Use `<strong>text</strong>` instead.
- Don't touch layouts, components, or the ad slot when the task is just
  "write a new post."

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
