import React from "react";

const Waves: React.FC = () => {

	return (
		<div style={{
			position: "absolute",
			width: "100%",
			bottom: 0,
		}}>
			<svg style={{
				height: "15vh",
				minHeight: "100px",
				maxHeight: "150px",
				width: "100%",
				marginBottom: "-7px",
			}} className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
				viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
				<defs>
					<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
				</defs>
				<g>
					<use style={{
						animation: "parallax-waves 25s cubic-bezier(.55,.5,.45,.5) infinite",
						animationDelay: "-2s",
						animationDuration: "7s",
					}} xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(var(--spwn-purple), 0.6)" />
					<use style={{
						animation: "parallax-waves 25s cubic-bezier(.55,.5,.45,.5) infinite",
						animationDelay: "-4s",
						animationDuration: "15s",
					}} xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(var(--spwn-green-light), 0.7)" />
					<use style={{
						animation: "parallax-waves 25s cubic-bezier(.55,.5,.45,.5) infinite",
						animationDelay: "-2s",
						animationDuration: "20s",
					}} xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(var(--spwn-purple-light), 0.8)" />
					<use style={{
						animation: "parallax-waves 25s cubic-bezier(.55,.5,.45,.5) infinite",
						animationDelay: "-2s",
						animationDuration: "10s",
					}} xlinkHref="#gentle-wave" x="48" y="15" fill="rgba(var(--spwn-green), 0.9)" />
				</g>
			</svg>
		</div>
	)
}

export default Waves;