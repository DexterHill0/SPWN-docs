import React from "react";

interface Props {
	width: string;
	height: string;

	style?: React.CSSProperties;
	onClick?: (event: any) => void;
	children?: React.ReactNode;
	className?: string;
}

const Button: React.FC<Props> = (props: Props) => {

	return (
		<button
			className={props.className}
			style={{
				cursor: "pointer",
				color: "white",
				width: props.width,
				height: props.height,
				border: "none",

				...props.style
			}}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	)
}

export default Button;