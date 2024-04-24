'use client';

import React, { useRef, useEffect, ReactNode } from "react";
import styles from "@/styles/home.module.css";
import { Gradient } from "@/app/lib/StripeGradient";

const Canvas = (props) => {
	const canvasRef2 = useRef(null);
	const gradient = new Gradient();

	useEffect(() => {
		gradient.initGradient("#gradient-canvas");
	}, []);

	return (
		<canvas
			className={styles.canvas}
			id="gradient-canvas"
			ref={canvasRef2}
			{...props}
			data-transition-in
		>
			{props.children}
		</canvas>
	);
};

export default Canvas;
