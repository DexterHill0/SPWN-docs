import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";

import "../styles/globals.css";

const _App = ({ Component, pageProps }: AppProps) => {

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default appWithTranslation(_App);