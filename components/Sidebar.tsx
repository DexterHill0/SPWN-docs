import React, { useEffect, useState } from "react";
import Image from "next/image";
import Markdown from "markdown-to-jsx";

// import Button from "./primitive/Button";

// import useMediaQuery from "../utils/MediaQuery";

// import styles from "../styles/components/Sidebar.module.scss";


// interface HeaderProps {
// 	l: string;
// 	href: string;
// 	children: React.ReactNode;
// 	selected?: string;
// }

// const title: React.FC<HeaderProps> = ({ l, href, children, selected }) => {

// 	const isSelected = selected === href;
// 	const level = parseInt(l);

// 	return (
// 		<div>
// 			<a
// 				className={styles.titleA}
// 				style={{
// 					paddingLeft: `${level * 1.8}rem`,
// 					paddingTop: `${1.9 / level}rem`,
// 					fontWeight: level === 1 ? 200 : "initial",
// 					fontSize: level === 1 ? "22px" : "15px",
// 					color: isSelected ? "var(--sidebar-selected-color)" : `var(--title${level}-color)`,
// 				}}
// 				href={href}
// 			>
// 				{
// 					React.Children.toArray(children).map((c) => c)
// 				}
// 				{
// 					(level > 1 && isSelected) ?
// 						<div className={styles.titleSelected}></div>
// 						: <></>
// 				}
// 			</a>
// 		</div>
// 	)
// }


interface Props {
	width: string;
	toc?: string;
	selected?: string;
}

const Sidebar: React.FC<Props> = (props: Props) => {

	// //hides the sidebar if window width <900px
	// const query = useMediaQuery("(min-width: 900px)");
	// const [isOpen, setIsOpen] = useState(query);

	// useEffect(() => {
	// 	setIsOpen(query)
	// }, [query]);

	// return (
	// 	<div>
	// 		<div
	// 			className={styles.sidebarContainer}
	// 			style={{
	// 				transform: `translateX(${isOpen ? props.width : "0rem"})`,
	// 			}}
	// 		>
	// 			<Button
	// 				width="2rem"
	// 				height="2.2rem"
	// 				className={styles.sidebarButton}
	// 				onClick={() => setIsOpen(!isOpen)}
	// 			>
	// 				{
	// 					isOpen ?
	// 						<i className="gg-chevron-left" style={{ color: "white" }}></i>
	// 						:
	// 						<i className="gg-chevron-right" style={{ color: "white" }}></i>
	// 				}
	// 			</Button>
	// 		</div>
	// 		<div
	// 			className={styles.sidebarContentContainer}
	// 			style={{
	// 				width: props.width,
	// 				left: `-${isOpen ? 0 : props.width}`,
	// 				borderRight: `${isOpen ? "1" : "0"}px solid var(--border-color)`,
	// 			}}
	// 		>
	// 			<Image src="/assets/logo_large_name.png" alt="Sidebar SPWN Logo" width="256" height="128"></Image>

	// 			<div style={{ color: "white" }}>
	// 				<Markdown
	// 					options={{
	// 						overrides: {
	// 							t: { component: title, props: { selected: props.selected } },
	// 						},
	// 					}}
	// 				>
	// 					{props.toc || "Failed to load"}
	// 				</Markdown>
	// 			</div>
	// 		</div>
	// 	</div>
	// )

	return (
		<></>
	)
}

export default Sidebar;