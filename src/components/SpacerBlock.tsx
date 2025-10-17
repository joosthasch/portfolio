import React from "react";

export default function SpacerBlock({ height = 256 }: { height?: number }) {
  return (
    <div
      style={{ height: `${height}px`, background: "#141414", width: "100%" }}
      className="w-full"
    />
  );
}