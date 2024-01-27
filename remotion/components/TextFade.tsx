import { interpolate } from "remotion";
import { useCurrentFrame } from "remotion";
import React from "react";

export const TextFade = ({ params }: { params: { slug: string } }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [20, 40], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <div
      // @ts-ignore
      style={{ opacity, color: titleColor }}
      className="text-5xl font-bold h-screen flex items-center justify-center"
    >
      {params.slug}
    </div>
  );
};
