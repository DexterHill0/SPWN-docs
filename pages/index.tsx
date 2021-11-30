import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import { Animate } from "react-move";
import { easePolyOut } from "d3-ease";

import Header from "../components/Header";
import Text from "../components/primitive/Text";
import AnimatedButton from "../components/AnimatedButton";
import LargeSpwnText from "../components/pages/home/SpwnLarge";
import InviteWidget from "../components/DiscordWidget";

import { getOS, join, open } from "../utils/Utils";
import AnimateOnEnter from "../utils/InView";

import styles from "../styles/pages/Home.module.scss";

export { getLocaleTranslations as getServerSideProps } from "../locales/helper";

const Home: React.FC = () => {
	const { t } = useTranslation("common");

	const anchor = useRef<HTMLDivElement>();

	const [os, setOS] = useState<string | undefined>(undefined);
	useEffect(() => {
		setOS(getOS());
	}, []);

	return (
		<>
			<title>SPWN - Home</title>
			<meta name="Description" content="SPWN — A language for Geometry Dash triggers, developed by Spu7Nix." />
			
			<div className={styles.topHalf}>
				<Header>
					<Text href={{ link: "learn" }} size="1.3rem">{t("header.learn")}</Text>
					<Text href={{ link: "docs" }} size="1.3rem">{t("header.docs")}</Text>
					<Text href={{ link: "https://spu7nix.net/spwn/try/", openNew: true }} size="1.3rem">{t("header.try")}</Text>
				</Header>

				<div className={styles.topHalfFlexContainer}>
					<div className={styles.topHalfFlexLeft}>
						<div>
							<Animate
								start={{
									opacity: 0,
									left: -(20 * 16),
								}}
								enter={{
									opacity: [1],
									left: [0],
									timing: { duration: 1200, delay: 0, ease: easePolyOut },
								}}
							>
								{({ opacity, left }) =>
									<LargeSpwnText style={{ opacity, left }}></LargeSpwnText>
								}
							</Animate>

							<AnimateOnEnter>
								<Animate
									start={{
										opacity: 0,
									}}
									enter={{
										opacity: [1],
										timing: { duration: 1000, delay: 300 },
									}}
								>
									{({ opacity }) =>
										<>
											<Text size="min(max(1.2rem, 3vw), 1.6rem)" weight={300} style={{ opacity }}>{t("front_page.short_desc")}</Text>
											<Text size="min(max(1rem, 3vw), 1.2rem)" weight={200} style={{ opacity: opacity - 0.5 }}>{t("front_page.short_credit")}</Text>
										</>
									}
								</Animate>
							</AnimateOnEnter>
						</div>

						<div className={styles.downloadContainer}>
							<div style={{ flex: "0 0 auto" }}>
								<>
									<Text weight={600} size="2rem">{t("front_page.get_started")} <Text inline style={{ opacity: 0.5 }}>{t("front_page.learn_more")}</Text></Text>
									{
										os === undefined ?
											<Text weight={400} italic size="0.9rem">{t("errors.unsupported_os")}</Text>
											: <></>
									}
								</>
							</div>
							<div style={{ flex: "0 0 auto", paddingTop: "2rem" }}>
								<AnimatedButton width="18rem" height="3rem"
									onClick={() => open("https://github.com/Spu7Nix/SPWN-language/releases")}
								>
									<Text>{t("front_page.download_now")}</Text>
								</AnimatedButton>
							</div>
						</div>
					</div>

					<div className={styles.topHalfFlexRight}></div>
				</div>

				<i
					className={join("gg-chevron-double-down", styles.topHalfDoubleChevron)}
					onClick={() => window.scroll({ top: (anchor.current?.getBoundingClientRect().top || 0) + window.scrollY, behavior: "smooth" })}
				></i>
			</div>
			<div className={styles.botHalf}>
				<div ref={r => { if (r) anchor.current = r }}></div>

				<div className={styles.botHalfFlexContainer}>
					<div className={styles.botHalfFlexLeft}></div>

					<div className={styles.botHalfFlexRight}>
						<AnimateOnEnter>
							<Animate
								start={{
									opacity: 0,
								}}
								enter={{
									opacity: [1],
									timing: { duration: 1000 },
								}}
							>
								{({ opacity }) =>
									<div className={styles.infoContainer} style={{ opacity }}>
										<Text size="2.2rem" weight={300} style={{ textDecoration: "underline", gridArea: "title" }}>About SPWN</Text>

										<Text size="1.1rem" style={{ gridArea: "text" }}>
											SPWN, developed by <Text size="1.1rem" style={{ textDecoration: "underline dotted" }} inline href={{ link: "https://www.youtube.com/c/Spu7Nix/featured", openNew: true }}>Spu7Nix</Text>, is a programming language that compiles straight to Geometry Dash levels.
											<br /><br />
											In simple terms, this means you can create levels not by placing objects in the level editor, but by typing characters into your favourite text editor!
											That means you can create levels by not only using the visual representation of triggers in the Geometry Dash Editor, but using a &quot;verbal&quot; and abstracted representation instead.
											This is especially useful when using triggers for complicated projects, since the in-game editor is not well suited for that, and doesn&apos;t provide the tools you would need to make it work properly, without many headaches.
											<br /><br />
											Click <Text weight={600} size="1.1rem" inline>Learn</Text> in the header to learn how to begin your adventure with SPWN.
											Otherwise, If you have any questions, or need help, check out the docs, or feel free to join us in the official SPWN Discord server!
										</Text>

										<div style={{ gridArea: "invite", justifySelf: "center" }}>
											<InviteWidget></InviteWidget>
										</div>
									</div>
								}
							</Animate>
						</AnimateOnEnter>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home;
