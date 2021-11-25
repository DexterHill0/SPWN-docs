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
}

const Text: React.FC<Props> = (props: Props) => {

	const style = {
		fontSize: props.size || "1rem",
		fontVariationSettings: `'wght' ${props.weight || 400}, 'ital' ${props.italic ? "1" : ""}`,
		display: props.inline ? "inline-block" : "",
		color: "white",
		textDecoration: "none",
		...props.style,
	}

	return (
		<>
			{
				props.href ?
					<a style={style} href={props.href.link} target={props.href.openNew ? "_blank" : ""} rel="noreferrer">{props.children}</a>
					:
					<div style={style}>{props.children}</div>
			}
		</>
	)
}

export default Text;