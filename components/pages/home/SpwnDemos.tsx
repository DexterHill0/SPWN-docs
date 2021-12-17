import React, { useEffect, useState } from "react";
import { Animate } from "react-move";
import Highlight from "react-highlight";
import { easePolyOut } from "d3-ease";

import AnimateOnEnter from "../../../utils/InView";

import styles from "../../../styles/components/SpwnDemos.module.scss";

interface Props {
	fadeEvery: number;
	className?: string;
	children?: React.ReactNode | React.ReactNode[];
}


const Fader: React.FC<Props> = (props: Props) => {
	let nextChild = 0;
	const fadeTime = 500;
	let loopTimeout: NodeJS.Timeout;

	const children = React.Children.toArray(props.children);

	const [currentChild, setCurrentChild] = useState({
		child: 0,
		direction: 1,
	});

	const fadeNext = (): void => {
		if ((currentChild.child + 1) > children.length) {
			currentChild.child = 0
		}

		queueNextFade(); //Queues the next fade which fades in the next child after the current child has faded out

		setCurrentChild({
			child: currentChild.child,
			direction: +!currentChild.direction, // `!currentChild.direction` inverts the direction (becomes boolean), `+` converts it to a number
		});

		nextChild = currentChild.child + 1;
	}

	const queueNextFade = (): void => {
		let t = setTimeout(() => {
			setCurrentChild(currentChild => ({
				child: nextChild,
				direction: +!currentChild.direction,
			}));

			clearTimeout(t);
		}, fadeTime);
	}

	useEffect(() => {
		loopTimeout = setInterval(() => {
			fadeNext();
		}, props.fadeEvery);

		return () => clearInterval(loopTimeout);
	}, [])

	return (
		<div className={props.className} style={{ width: "100%", height: "100%",}}>
			{
				React.Children.map(children, (child, i) => (
					<div key={i}
						style={{
							opacity: i === currentChild.child ? currentChild.direction : "0",
							transition: `opacity ${fadeTime}ms ease-in`,
							position: "absolute",
						}}
					>
						{child}
					</div>
				))
			}
		</div>
	)
};

// const GRID_X = 20;
// const GRID_Y = 10;

const SpwnDemos: React.FC = () => {

	return (
		<div className={styles.container}>

			<AnimateOnEnter>
				<Animate
					start={{
						left: -500,
					}}
					enter={{
						left: [0],
						timing: { duration: 1000, ease: easePolyOut },
					}}
				>
					{({ left }) =>
						<div className={styles.gridContainer} style={{ left }}>
							<div className={styles.gridLineContainer}>
								{/* {
									Array.from({ length: GRID_X }, (_, i) => i).map((_, i) => (
										<div
											className={styles.verticalGridLine}
											key={i}
											style={{
												left: i * 40,
											}}
										></div>
									))
								}
								{
									Array.from({ length: GRID_Y }, (_, i) => i).map((_, i) => (
										<div
											className={styles.horizontalGridLine}
											key={i}
											style={{
												top: i * 40,
											}}
										></div>
									))
								} */}
							</div>
						</div>
					}
				</Animate>
			</AnimateOnEnter>

			<AnimateOnEnter>
				<Animate
					start={{
						left: -900,
					}}
					enter={{
						left: [55],
						timing: { duration: 1500, delay: 100, ease: easePolyOut },
					}}
				>
					{({ left }) =>
						<div className={styles.codeContainer} style={{ left }}>
							<Fader fadeEvery={12000}>
								<Highlight className="language-cpp">
									{`GROUND.set(0, 0, 0)

// This is called a "trigger function", and they are defined like shown
// Any code in a trigger function is run using spawn triggers
pulse = !{
	GROUND.pulse(255, 0, 0)
}

pulse! // This is the syntax to call a trigger function
wait(1)
pulse!`}
								</Highlight>
								<Highlight className="language-cpp">
									{`GROUND.set(0, 0, 0)

// This is called a "trigger function", and they are defined like shown
// Any code in a trigger function is run using spawn triggers
pulse = !{
	GROUND.pulse(255, 0, 0)
}

pulse! // This is the syntax to call a trigger function
wait(1)
pulse!`}
								</Highlight>
							</Fader>
						</div>
					}
				</Animate>
			</AnimateOnEnter>
			
		</div>
	)
}


export default SpwnDemos;