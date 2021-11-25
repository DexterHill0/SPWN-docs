import React, { useEffect, useRef } from "react";

import styles from "./css/Header.module.scss";

interface Props {
	children: React.ReactNode[] | React.ReactNode;
}

const height = 3.7;

const Header: React.FC<Props> = (props: Props) => {
	const ref = useRef<HTMLDivElement>();

	const onScroll = (_: any) => {
		if (window.scrollY > (height * 16) && ref.current) {
			ref.current.classList.add(styles.anim);
		}
		else if (window.scrollY === 0 && ref.current) {
			ref.current.classList.remove(styles.anim);
		}
	}

	useEffect(() => {
		document.addEventListener("scroll", onScroll);

		return () => {
			document.removeEventListener("scroll", onScroll);
		}
	}, []);

	return (
		<div className={styles.headerContainer} ref={(r) => { if (r) ref.current = r; }}>
			<img src="assets/spwn_logo_small.png" alt="" width={35} height={35} style={{
				paddingLeft: "0.5rem",
			}}></img>

			<div className={styles.headerLinkContainer}>
				{
					React.Children.toArray(props.children).map((c, i) =>
						<div key={i} className={styles.headerLink}>
							{c}
						</div>
					)
				}
			</div>
		</div>
	)
}

export default Header;