import React from "react";
import Link from "next/link";
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

	const className = twMerge(join("lg:text-lg md:text-md sm:text-sm no-underline font-normal text-txt", props.inline ? "inline-block" : ""), props.className);

	return (
		<>
			{
				props.href ?
					<Link key={props.key} href={props.href.link} >
						<a className={className} style={props.style} rel="noreferrer" target={props.href.openNew ? "_blank" : ""}>
							{props.children}
						</a>
					</Link>
					:
					<div key={props.key} className={className} style={props.style}>
						{props.children}
					</div>
			}
		</>
	)
}

export default Text;