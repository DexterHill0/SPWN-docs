import React from "react";

import Button from "./primitive/Button";

import { join } from "../utils/Utils";

import styles from "../styles/components/AnimatedButton.module.scss";

interface Props {
	width: string;
	height: string;

	onClick?: (event: any) => void;
	children?: React.ReactNode;
}

const AnimatedButton: React.FC<Props> = (props: Props) => {

	const constant = "absolute block";

	return (
		<div
			className="relative flex items-center justify-center overflow-hidden group opacity-80 hover:opacity-100 active:opacity-80"
			style={{ width: props.width, height: props.height }}
		>
			<Button
				onClick={props.onClick}
				className={join(`w-[${props.width}] h-[${props.height}]`, "absolute bg-transparent text-bs border-0")}
			>
				{props.children}
			</Button>

			<span
				className={join(constant, "top-0 h-[3px] w-full bg-spwn-g-light group-hover:shadow-[0_5px_10px_0_#05c286] -translate-x-[115%]", styles.child1)}
			></span>
			<span
				className={join(constant, "right-0 w-[3px] h-full bg-spwn-g-light group-hover:shadow-[-5px_0_10px_0_#05c286] -translate-y-[105%]", styles.child2)}
			></span>
			<span
				className={join(constant, "bottom-0 h-[3px] w-full bg-spwn-p-light group-hover:shadow-[0_-5px_10px_0_#e421a6] translate-x-[100%]", styles.child3)}
			></span>
			<span
				className={join(constant, "left-0 w-[3px] h-full bg-spwn-p-light group-hover:shadow-[5px_0_10px_0_#e421a6] translate-y-[100%]", styles.child4)}
			></span>
		</div>
	)
}

export default AnimatedButton;