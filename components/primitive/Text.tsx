import React from "react";

interface Props {
	children: React.ReactNode;

	size?: string;
	weight?: number;
	italic?: boolean;
	href?: {
		link: string;
		openNew?: boolean;
	};
	inline?: boolean;
	style?: React.CSSProperties;
	className?: string;
}

const Text: React.FC<Props> = (props: Props) => {

	const style = {
		fontSize: props.size || "1rem",
		fontVariationSettings: `'wght' ${props.weight || 400}, 'ital' ${props.italic ? "1" : "0"}`,
		display: props.inline ? "inline-block" : "",
		color: "white",
		textDecoration: "none",
		...props.style,
	}

	return (
		<>
			{
				props.href ?
					<a style={style} href={props.href.link} target={props.href.openNew ? "_blank" : ""} rel="noreferrer" className={props.className}>{props.children}</a>
					:
					<div style={style} className={props.className}>{props.children}</div>
			}
		</>
	)
}

export default Text;