'use client';
import React, { useEffect } from "react";
import dynamic from 'next/dynamic'

var gradient = dynamic(() => (import("@/app/lib/gradient.js")), { ssr: false })

export default function Canv({ children }) {
  useEffect(() => {
    gradient.then((module) => {
      const Gradient = module.default;
      const grad = new Gradient();
      grad.initGradient("#gradient-canvas");
    });
  }, []);
  return(
    <div id='gradient-canvas'>{children}</div>
  )
}