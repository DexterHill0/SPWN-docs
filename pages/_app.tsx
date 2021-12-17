import React from "react";
import { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

import "../styles/globals.css";

const _App = ({ Component, pageProps }: AppProps) => {

	return (
		<Component {...pageProps} />
	)
}

export default appWithTranslation(_App);