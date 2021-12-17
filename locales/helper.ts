import { serverSideTranslations } from "next-i18next/serverSideTranslations";

enum Locales {
	en = "en",
	ru = "ru",
	it = "it",
}

const defaultLocale = Locales.en;

const isLocaleSupported = (locale: string | undefined): boolean => {
	return Object.keys(Locales).includes(locale || "");
}

export async function getLocaleTranslations({ query: { lang } }: { query: { lang: string } }) {
	const lcl = isLocaleSupported(lang) ? lang : defaultLocale.toString();

	return {
		props: {
			...(await serverSideTranslations(lcl, ["common"])),
		},
	};
}