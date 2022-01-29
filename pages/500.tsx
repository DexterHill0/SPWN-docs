import React from "react";
import { useTranslation } from "next-i18next";

export { getLocaleTranslations as getStaticProps } from "../locales/helper";

import Error from "../components/pages/_error/Error";

const Page500: React.FC = () => {

	const { t } = useTranslation("common");

	return (
		<Error status={500} t={t}></Error>
	)
}

export default Page500;
