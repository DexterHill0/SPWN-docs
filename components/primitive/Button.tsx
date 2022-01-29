import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
	onClick?: (event: any) => void;
	children?: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
}

const Button: React.FC<Props> = (props: Props) => {

	const styles = twMerge("text-txt border-0 cursor-pointer", props.className);

	return (
		<button
			className={styles}
			onClick={props.onClick}
			style={props.style}
		>
			{props.children}
		</button>
	)
}

export default Button;