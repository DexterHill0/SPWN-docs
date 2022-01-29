import React, { useRef } from "react";
import { useTranslation } from "next-i18next";
import { Animate } from "react-move";
import { easePolyOut } from "d3-ease";

import Header from "../components/Header";
import Text from "../components/primitive/Text";
import AnimatedButton from "../components/AnimatedButton";
import LargeSpwnText from "../components/pages/home/SpwnLarge";
import InviteWidget from "../components/DiscordWidget";

import { open } from "../utils/Utils";
import AnimateOnEnter from "../utils/InView";

import styles from "../styles/pages/Home.module.scss";
import LanguageSelector from "../components/LanguageSelect";
import SpwnDemos from "../components/pages/home/SpwnDemos";

export { getLocaleTranslations as getServerSideProps } from "../locales/helper";

const Home: React.FC = () => {
	const { t } = useTranslation("common");

	return (
		<>
			<title>SPWN - Home</title>
			<meta name="Description" content="SPWN — A language for Geometry Dash triggers, developed by Spu7Nix." />

			<div className="w-screen h-screen overflow-hidden bg-dark-900">
				<Header>
					<Text href={{ link: "learn" }}>{t("header.learn")}</Text>
					<Text href={{ link: "docs" }}>{t("header.docs")}</Text>
					<Text href={{ link: "https://spu7nix.net/spwn/try/", openNew: true }}>{t("header.try")}</Text>
				</Header>

				<div className="absolute right-10 sm:right-5">
					<LanguageSelector></LanguageSelector>
				</div>

				<div className="flex flex-wrap h-full px-3">
					<div className="flex flex-col w-auto sm:w-full sm:items-center md:ml-12 lg:ml-20">
						<div className="sm:text-center">
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
									<div className="text-left sm:text-center">
										<LargeSpwnText style={{ opacity, left }}></LargeSpwnText>
									</div>
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
											<Text className="font-light" style={{ opacity }}>{t("front_page.short_desc")}</Text>
											<Text className="font-light" style={{ opacity: opacity - 0.5 }}>{t("front_page.short_credit")}</Text>
										</>
									}
								</Animate>
							</AnimateOnEnter>
						</div>

						<div className="flex flex-col pt-20 text-left sm:text-center sm:pt-8">
							<div>
								<Text className="font-bold sm:text-sm">{t("front_page.get_started")}
									&nbsp;<Text className="text-sm opacity-50 lg:text-xsm" inline>{t("front_page.learn_more")}</Text>
								</Text>
							</div>
							<div className="flex justify-start pt-8 sm:justify-center">
								<AnimatedButton width="18rem" height="3rem"
									onClick={() => open("https://github.com/Spu7Nix/SPWN-language/releases")}
								>
									<Text className="text-sm md:text-sm lg:text-sm">{t("front_page.download_now")}</Text>
								</AnimatedButton>
							</div>
						</div>
					</div>
				</div>
				{/* <div className="animate-bounce scale-200 text-txt absolute -translate-y-1/2 -translate-x-1/2 left-1/2 bottom-2.5 cursor-pointer">
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M7.75735 5.63605L6.34314 7.05026L12 12.7071L17.6569 7.05029L16.2427 5.63608L12 9.87872L7.75735 5.63605Z"
							fill="currentColor"
						/>
						<path
							d="M6.34314 12.7071L7.75735 11.2929L12 15.5356L16.2427 11.2929L17.6569 12.7071L12 18.364L6.34314 12.7071Z"
							fill="currentColor"
						/>
					</svg>
				</div> */}
			</div>
			<div className="w-screen h-screen overflow-x-hidden bg-dark-900">
				{/* <div className="w-full h-20 bg-transparent"></div>
				<div ref={r => { if (r) anchor.current = r }}></div> */}

				<div className="flex">
					<div className="flex-[3_1_auto] flex items-center h-full">
						<SpwnDemos></SpwnDemos>
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
									<div className="grid grid-cols-1 grid-rows-3 m-3 gap-7" style={{ opacity }}>
										<Text className="font-light underline">About SPWN</Text>

										<Text className="font-light lg:text-md">
											SPWN, developed by <Text inline className="font-light underline lg:text-md" href={{ link: "https://www.youtube.com/c/Spu7Nix/featured", openNew: true }}>Spu7Nix</Text>, and named after the spawn trigger, is a programming language that compiles straight to Geometry Dash levels.
											<br /><br />
											In simple terms, this means you can create levels not by placing objects in the level editor, but by typing characters into your favourite text editor!
											<br />
											SPWN is a &quot;verbal&quot; and abstracted representation of Geometry Dash triggers which is especially useful when using triggers for complicated projects, since the in-game editor is not well suited for that, and doesn&apos;t provide the tools you would need to make it work properly, without many headaches.
											<br /><br />
											Click <Text inline className="lg:text-md">Learn</Text> in the header to learn how to begin your adventure with SPWN.
											Otherwise, If you have any questions, or need help, check out the docs, or feel free to reach out to us in the official SPWN Discord server!
										</Text>

										<div className="justify-self-center">
											<InviteWidget></InviteWidget>
										</div>

										<Text className="font-light lg:text-md">
											In the meantime, check out some of the SPWN demos, and their trigger representations, on the left!
										</Text>
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
