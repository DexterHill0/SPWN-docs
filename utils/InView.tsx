import React from "react";

import { InView } from "react-intersection-observer";

interface Props {
	children: React.ReactElement;
}

const AnimateOnEnter: React.FC<Props> = (props: Props) => {

	return (
		<InView triggerOnce>
			{({ ref, inView }) =>
				<div ref={ref} style={{width: "100%", height: "100%"}}>{React.cloneElement(props.children, { show: inView })}</div>
			}
		</InView>
	)
}

export default AnimateOnEnter;