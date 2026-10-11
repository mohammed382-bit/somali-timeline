# Taxanaha Taariikhda Ummadda Soomaaliyeed — website

A bilingual (Somali / English) site for the YouTube series on the history of the Somali nation.
Plain HTML, CSS and JavaScript: no build step is needed to run it.

## Where things live

| File | What it holds |
| --- | --- |
| `data.js` | **All the text**: episodes, summaries, full scripts, About page, and the site settings (`siteConfig`) |
| `media.js` | The YouTube link, pictures and maps of each episode |
| `style.css` | The design |
| `index.html`, `timeline.html`, `episode.html`, `sources.html`, `about.html` | The pages |
| `tools/build.js` | Makes the share-preview pages (`share/`), `sitemap.xml` and `robots.txt` |

## Things to do as the series goes live

1. **Channel and trailer.** In `data.js`, find `siteConfig` and paste your YouTube channel link
   into `youtubeChannel` and the trailer link into `trailer`. The Subscribe button, the footer
   YouTube link and the trailer player appear automatically.
2. **Each new episode video.** In `media.js`, paste the YouTube link into that episode's `video: ""`.
   The "Coming" badge on the timeline turns into "Watch now".
3. **Each new episode script.** In `data.js`, add an `article: [...]` to that episode (copy the
   structure of episode 1). Reading time and the contents list are made automatically.
4. **Launch date.** `siteConfig.launchDate` is the first Sunday; every later episode is one week after it.
5. **Image credits.** Pictures marked "Image source being verified" in `media.js` need their real
   source and licence added.
6. After changing episode titles or summaries, run `node tools/build.js` (needs Node.js)
   to refresh the share pages and sitemap.

## Sharing an episode

The **Share** button on each episode uses `share/N.html`, a small page whose preview card shows the
series title and picture on WhatsApp, Facebook, Telegram and X, then opens the episode.

## If the site moves to a new address

Change `siteUrl` in `data.js` and the `https://mohammed382-bit.github.io/somali-timeline/` address in
the `<head>` of each `.html` file, then run `node tools/build.js`.
