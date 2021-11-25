import React from "react";
import Text from "../primitive/Text";

import styles from "../css/SpwnLarge.module.scss";

const LargeSpwnText: React.FC<{style: React.CSSProperties}> = ({style}) => {

	//originally this was done with 4 animated text shadows however, not only was that horrible in terms of performace (25 - 40% gpu usage), it caused weird artifacts
	//on mobile too, so this is a much better way, even though the code is uglier.
	return (
		<div style={style} className={styles.container}>
			<Text> SPWN </Text>
			<Text> SPWN </Text>
			<Text> SPWN </Text>
			<Text> SPWN </Text>
			<Text> SPWN </Text>
		</div>
	)
}

export default LargeSpwnText;