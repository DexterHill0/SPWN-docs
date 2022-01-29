import React from "react";
import { Trans } from "next-i18next";

import Text from "../../primitive/Text";
import Starfield from "./Starfield";

import { join } from "../../../utils/Utils";

import styles from "../../../styles/pages/Error.module.scss";


const getTextKey = (status: number, key: string): string => {
	const defined = [404, 500];
	return `errors.status_codes.${defined.includes(status) ? `${status}.` : ""}${key}`;
}

interface Props {
	status: number;
	t: any;
}

/**
 * Re-useable error page so the error pages can be statically exported.
 */
const Error: React.FC<Props> = ({ status, t }: Props) => {

	return (
		<div className="w-full h-full overflow-hidden">
			<div className="absolute flex flex-col items-center justify-center w-full h-full gap-4">
				<div className="inline-flex flex-col items-center gap-5 px-7">
					<Text
						className={join(styles.glitch, "text-center no-underline select-none whitespace-nowrap lg:text-xlg md:text-lg sm:text-md")}
						data-text={`Error ${status}`}
					>Error {status}
					</Text>

					<Text className="font-light lg:text-md md:text-md sm:text-sm text-txt">{t(getTextKey(status, "title"))}</Text>

					<Text className="font-light text-txt lg:text-md md:text-md sm:text-sm">
						<Trans
							i18nKey={t(getTextKey(status, "subtitle"))}
							t={t}
							components={[
								<Text href={{ link: "/" }} className="underline lg:text-md md:text-md sm:text-md" key={1}>{t("words.home")}</Text>,
							]}
						></Trans>
					</Text>
				</div>
			</div>

			<Starfield></Starfield>
		</div>
	)
}

export default Error;
