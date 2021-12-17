import React, { useEffect, useState } from "react";
import Image from "next/image";

import styles from "../styles/components/LoadingScreen.module.scss";

const Loading: React.FC = () => {

	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		setLoaded(true);

		return () => setLoaded(false);
	}, []);

	return (
		<div className={styles.container}>
			<div style={{ position: "absolute", transform: `scale(${loaded ? 1 : 0})`, transition: "transform 0.5s" }}>
				<Image src="/assets/logo_large_gray.png" alt="Loading..." width="128" height="128"></Image>
			</div>

			<div
				className={styles.imgContainer}
				style={{
					transform: `scale(${loaded ? 1 : 0})`,
				}}
			>
				<Image src="assets/logo_large.png" alt="Loading..." width="128" height="128"></Image>
			</div>

			<div className={styles.text}>
				SPWN
			</div>
		</div>
	)
}

export default Loading;

//to stop the loading screen from flashing if the content loads quickly
//this adds a little bit of artificial delay (waits for spwn logo to "fill")
// let finishedLoading = (_: boolean) => {
// 	hasLoaded = true;
// }
// let timeout = setTimeout(() => {
// 	if (hasLoaded) setIsLoading(false);
// 	clearTimeout(timeout);

// 	finishedLoading = setIsLoading;
// }, 2000);

// Promise.all([mdget(CONTENT.sidebarToc)]).then((resp) => {
//setIsLoading(false);