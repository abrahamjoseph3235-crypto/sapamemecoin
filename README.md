# SAPA Static Website

This is a static HTML/CSS/JavaScript website.

## Files

- index.html — main page
- styles.css — site styles
- script.js — menu, copy button, and situation interaction
- PNG files — site artwork
- _headers — Cloudflare Pages response headers
- 404.html — custom not-found page
- robots.txt — crawler instructions

## Cloudflare Pages

This project has no build step and can be deployed as a static site.

Recommended Pages settings:

- Production branch: main
- Build command: leave blank (or use `exit 0`)
- Build output directory: repository root
- Root directory: /

Cloudflare Pages supports static HTML sites directly.
