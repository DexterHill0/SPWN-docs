const { i18n } = require('./next-i18next.config');

/** @type {import("next").NextConfig} */
module.exports = {
	reactStrictMode: true,
	images: {
		domains: ["cdn.discordapp.com"],
		formats: ["image/webp"],
	},
	i18n,
}
