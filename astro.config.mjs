// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
	i18n: {
		// list your languages
		locales: ["en", "ko"],
		// which one is the default
		defaultLocale: "en",
		// keep default language at root ("/"), others get prefixed ("/ko")
		routing: {
		prefixDefaultLocale: false,      // "/about", "/ko/about"
		// redirect "/" -> "/en" only when you set prefixDefaultLocale:true
		// redirectToDefaultLocale: false // (keep default behavior)
		},
		// optional: per-locale fallbacks or custom codes/domains later
	},
});
