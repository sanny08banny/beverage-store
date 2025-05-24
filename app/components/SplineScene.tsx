import React from "react";
import Spline from "@splinetool/react-spline";

const SplineScene: React.FC = () => {
  return (
    <div className="w-full h-[800px]">
      <Spline scene="https://prod.spline.design/YGQilcF08shjZfeS/scene.splinecode" />
    </div>
  );
};

export default SplineScene;

