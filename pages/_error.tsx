import React from "react";
import { useTranslation, Trans, } from "next-i18next";

import Text from "../components/primitive/Text";

import styles from "../styles/pages/Error.module.scss";

import { getLocaleTranslations } from "../locales/helper";
import Starfield from "../components/pages/_error/Starfield";

const getTextKey = (status: number, key: string): string => {
	const defined = [404, 500];
	return `errors.status_codes.${defined.includes(status) ? `${status}.` : ""}${key}`;
}

const Error = ({ statusCode }: { statusCode: number }) => {

	const { t } = useTranslation("common");

	return (
		<div className={styles.page}>
			<div className={styles.textFlexboxContainer}>
				<div className={styles.text}>
					<div className={styles.glitch} data-text={`Error ${statusCode}`}>Error {statusCode}</div>

					<Text weight={300} size="1.3rem">{t(getTextKey(statusCode, "title"))}</Text>

					<div>
						<Trans
							i18nKey={t(getTextKey(statusCode, "subtitle"))}
							t={t}
							components={[
								<Text inline href={{ link: "/" }} style={{ textDecoration: "underline dotted" }} weight={300} size="1.1rem">{t("words.home")}</Text>,
								<Text inline weight={300} size="1.1rem">{t(getTextKey(statusCode, "subtitle"))}</Text>
							]}
						></Trans>
					</div>
				</div>
			</div>

			<Starfield></Starfield>
		</div>
	)
}

export async function getServerSideProps(res: any) {
	return { props: { statusCode: res.res.statusCode, ...(await getLocaleTranslations(res)).props } };
}

export default Error;
