"use client";

import dynamic from "next/dynamic";

const StarsScene = dynamic(() => import("./StarsScene"), {
  ssr: false,
});

export default function StarBackground() {
  return <StarsScene />;
}
