import React from "react";

interface Props {
	width: string;
	height: string;

	placeholder?: string;
	iconName?: string;
	style?: React.CSSProperties;
	onChange?: (inp: string) => void;
}

const Input: React.FC<Props> = (props: Props) => {

	return (
		<div
			style={{
				width: props.width,
				height: props.height,
				backgroundColor: "var(--search-background-color)",
				...props.style
			}}
		>
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					alignItems: "center"
				}}
			>
				<div style={{ width: "4rem", display: "flex", justifyContent: "center" }}>
					{
						props.iconName ?
							<i className={props.iconName} style={{ color: "var(--mono-tint3)" }}></i>
							: <></>
					}
				</div>
				<input
					style={{
						border: "none",
						width: "inherit",
						height: "100%",
						backgroundColor: "var(--search-background-color)",
						color: "white",
						fontStyle: "bold",
						fontSize: "15px",
					}}
					placeholder={props.placeholder}
					type="search"
					onChange={(e) => props.onChange && props.onChange(e.target.value)}
				></input>
				{

				}
			</div>
		</div>
	)
}

export default Input;