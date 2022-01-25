import React, { useEffect, useRef } from "react";

import styles from "../styles/components/Header.module.scss";

interface Props {
	children: React.ReactNode[] | React.ReactNode;
}

const height = 4;

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
		<div className="grid">
			<div className="w-full h-20 bg-transparent"></div>
			<div
				ref={(r) => { if (r) ref.current = r; }}
				className="absolute z-[999] flex items-center w-full h-16 border-b-2 bg-dark-900 border-dark-800"
			>
				<img className="pl-4" src="/assets/spwn_logo_small.png" alt="" width={50} height={50}></img>

				<div className="flex items-center justify-end w-full pl-4 pr-4">
					{
						React.Children.toArray(props.children).map((c, i) =>
							<div key={i} className="flex justify-end pr-4 flex-[0.2_2_auto]">
								{c}
							</div>
						)
					}
				</div>
			</div>
		</div>
	)
}

export default Header;