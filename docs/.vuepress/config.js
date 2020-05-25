module.exports = {
	locales: {
		"/": {
			lang: "en-US",
			title: "Docker Reverse Proxies",
			description: "Example reverse proxies on Docker with various scenarios"
		}
	},
	head: [
		["link", { rel: "icon", href: "/icon.ico", sizes: "32x32" }],
		["link", { rel: "icon", href: "/favicon-196.png", sizes: "196x196" }],
		["meta", { name: "theme-color", content: "#2855a1" }],
		['meta', { property: "og:type", content: "article" }],
	],
	themeConfig: {
		logo: "/logo.svg",
		repo: "azrikahar/docker-reverse-proxies",
		docsDir: 'docs',
		editLinks: true,
		locales: {
			"/": {
				// text for the language dropdown
				selectText: "Languages",
				// label for this locale in the language dropdown
				label: "English",
				// Custom text for edit link. Defaults to "Edit this page"
				editLinkText: "Edit this page on GitHub",
				// Custom navbar values
				// nav: [{ text: "Setup", link: "/setup/" }],
				sidebar: [
					"/",
					{
						collapsable: true,
						title: 'Basic',
						children: [
							['/basic/', 'Introduction'],
							['/basic/caddy', 'Caddy'],
						],
					},
				]
			}
		}
	},
}