import React from "react";

import Button from "./primitive/Button";

import styles from "../styles/components/AnimatedButton.module.scss";

interface Props {
	width: string;
	height: string;

	onClick?: (event: any) => void;
	children?: React.ReactNode;
}

const AnimatedButton: React.FC<Props> = (props: Props) => {

	return (
		<div className={styles.buttonContainer} style={{
			width: props.width,
			height: props.height
		}}>
			<Button
				width={props.width}
				height={props.height}
				onClick={props.onClick}

				className={styles.button}
			>
				{props.children}
			</Button>

			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
	)
}

export default AnimatedButton;