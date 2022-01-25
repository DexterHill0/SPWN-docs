import React from "react";
import { twMerge } from "tailwind-merge";

import { join } from "../../utils/Utils";

interface Props {
	children: React.ReactNode;

	href?: {
		link: string;
		openNew?: boolean;
	};
	inline?: boolean;
	className?: string;
	style?: React.CSSProperties;
	key?: any;
}

const Text: React.FC<Props> = (props: Props) => {

	const className = twMerge(join("lg:text-md md:text-bs sm:text-sm no-underline font-normal text-txt", props.inline ? "inline-block" : ""), props.className || "")

	return (
		<>
			{
				props.href ?
					<a key={props.key} href={props.href.link} target={props.href.openNew ? "_blank" : ""} rel="noreferrer" className={className} style={props.style}>
						{props.children}
					</a>
					:
					<div key={props.key} className={className} style={props.style}>{props.children}</div>
			}
		</>
	)
}

export default Text;