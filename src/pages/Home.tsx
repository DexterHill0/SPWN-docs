import React, { useRef } from "react";

import { Animate } from "react-move";
import { easePolyOut } from "d3-ease";

import Header from "../components/Header";
import Text from "../components/primitive/Text";
import AnimatedButton from "../components/AnimatedButton";
import LargeSpwnText from "../components/home/SpwnLarge";
import InviteWidget from "../components/DiscordWidget";

import { getOS, join, open } from "../utils/Utils";
import AnimateOnEnter from "../utils/InView";

import styles from "./css/Home.module.scss";

const Home: React.FC = () => {

	const anchor = useRef<HTMLDivElement>();

	return (
		<>
			<div className={styles.topHalf}>
				<Header>
					<Text href={{ link: "learn" }} size="1.3rem">Learn</Text>
					<Text href={{ link: "docs" }} size="1.3rem">Docs</Text>
					<Text href={{ link: "https://spu7nix.net/spwn/try/", openNew: true }} size="1.3rem">Try</Text>
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
											<Text size="min(max(1.1rem, 3vw), 1.6rem)" weight={300} style={{ opacity }}>A language for Geometry Dash triggers</Text>
											<Text size="min(max(0.8rem, 3vw), 1.2rem)" weight={200} style={{ opacity: opacity - 0.5 }}>By Spu7Nix</Text>
										</>
									}
								</Animate>
							</AnimateOnEnter>
						</div>

						<div className={styles.downloadContainer}>
							<div style={{ flex: "0 0 auto" }}>
								<>
									<Text weight={600} size="2rem">Get Started! <Text inline style={{ opacity: 0.5 }}>(or learn more about SPWN below)</Text></Text>
									{
										getOS() === undefined ?
											<Text weight={400} italic size="0.9rem">This OS is not currently supported by SPWN - maybe in the future!</Text>
											: <></>
									}
								</>
							</div>
							<div style={{ flex: "0 0 auto", paddingTop: "2rem" }}>
								<AnimatedButton width="18rem" height="4rem"
									onClick={() => open("https://github.com/Spu7Nix/SPWN-language/releases")}
								>
									<Text>D O W N L O A D &nbsp;&nbsp;N O W</Text>
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
					<div className={styles.botHalfFlexLeft}>

					</div>

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
											That means you can create levels by not only using the visual representation of triggers in the Geometry Dash Editor, but using a "verbal" and abstracted representation instead.
											This is especially useful when using triggers for complicated projects, since the in-game editor is not well suited for that, and doesn't provide the tools you would need to make it work properly, without many headaches.
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
