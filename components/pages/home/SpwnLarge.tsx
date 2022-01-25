import React from "react";

import Text from "../../primitive/Text";

import { join } from "../../../utils/Utils";

import styles from "../../../styles/components/SpwnLarge.module.css";

const LargeSpwnText: React.FC<{ style: React.CSSProperties }> = ({ style }) => {

	const shared = "font-ital-black row-start-1 col-start-1 lg:text-[13rem] md:text-[10rem] sm:text-[7rem]";

	//originally this was done with 4 animated text shadows however, not only was that horrible in terms of performace (25 - 40% gpu usage), it caused weird artifacts
	//on mobile too, so this is a much better way, even though the code is uglier.
	return (
		<div
			className={join("select-none relative grid grid-cols-1", styles.container)}
			style={style}
		>
			<Text className={join(shared, "text-transparent lg:webkit-stroke-[4px_#d9d6f4] md:webkit-stroke-[3px_#d9d6f4] sm:webkit-stroke-[2px_#d9d6f4] z-[4]")}> SPWN </Text>
			<Text className={join(shared, "text-spwn-g-light z-[3]", styles.child1)}> SPWN </Text>
			<Text className={join(shared, "text-spwn-g/90 z-[2]", styles.child2)}> SPWN </Text>
			<Text className={join(shared, "text-spwn-p-light/70 z-[1]", styles.child3)}> SPWN </Text>
			<Text className={join(shared, "text-spwn-p/50 z-[]", styles.child4)}> SPWN </Text>
		</div>
	)
}

export default LargeSpwnText;