import React, { useEffect, useRef, useState } from "react";

const random = (min: number, max: number): number => {
	return Math.floor(min + (Math.random() * (max - min)));
}

const map = (value: number, inMin: number, inMax: number, outMin: number, outMax: number): number => {
	return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

const starCount = 350;
const mouseMMultiplier = 0.1;

const Starfield: React.FC = () => {

	const canvas = useRef<HTMLCanvasElement>();

	let frame: number = 0;
	let width: number = 0;
	let height: number = 0;
	let center: { x: number, y: number } = { x: 0, y: 0 };
	let stars: Star[] = [];
	let ctx: CanvasRenderingContext2D;

	class Star {
		pz: number;
		x: number;
		y: number;
		z: number;
		speed: number;

		constructor() {
			this.x = random(-center.x, center.x);
			this.y = random(-center.y, center.y);
			this.z = random(0, center.x);
			this.speed = random(0.05, 5);
			this.pz = this.z;
		}

		update() {
			this.pz = this.z;
			this.z -= this.speed;

			if (this.z < 1) {
				this.x = random(-center.x, center.x);
				this.y = random(-center.y, center.y);
				this.z = center.x;
				this.pz = this.z;
			}
		}

		draw(ctx: CanvasRenderingContext2D) {
			const scaleX = map(this.x / this.z, 0, 1, center.x, center.x * 2);
			const scaleY = map(this.y / this.z, 0, 1, center.y, center.y * 2);

			const scalePX = map(this.x / this.pz, 0, 1, center.x, center.x * 2);
			const scalePY = map(this.y / this.pz, 0, 1, center.y, center.y * 2 );

			const radius = map(this.z, 0, center.x, 5, 0);

			ctx.strokeStyle = "rgba(250, 250, 250, 0.3)";
			ctx.lineWidth = radius;

			ctx.beginPath();
			ctx.moveTo(scalePX, scalePY);
			ctx.lineTo(scaleX, scaleY);
			ctx.stroke();
		}
	}

	const setup = () => {
		cancelAnimationFrame(frame);
		if (!canvas.current) return;

		width = canvas.current.width = window.innerWidth;
		height = canvas.current.height = window.innerHeight;
		center = { x: width / 2, y: height / 2 };
	}

	useEffect(() => {
		const onResize = () => {
			setup();
			draw();
		}

		window.addEventListener("resize", onResize);

		return () => {
			cancelAnimationFrame(frame);
			window.removeEventListener("resize", onResize);
		}
	}, []);

	useEffect(() => {
		let c = canvas.current?.getContext("2d");

		if (c) { 
			ctx = c;

			setup();
			for (let i = 0; i < starCount; i++) stars.push(new Star());
			draw();
		}

	}, [canvas]);

	const draw = () => {
		frame = requestAnimationFrame(draw);

		ctx.clearRect(0, 0, width, height);

		stars.forEach((s) => {
			s.draw(ctx);
			s.update();
		})
	}

	return (
		<div style={{ background: "black", overflow: "hidden" }}>
			<canvas ref={(r) => { if (r) canvas.current = r; }} style={{ background: "black" }}></canvas>
		</div>
	)
}

export default Starfield;