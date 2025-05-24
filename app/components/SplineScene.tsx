import React from "react";
import Spline from "@splinetool/react-spline";

const SplineScene: React.FC = () => {
  return (
    <div className="w-full h-[500px]">
      <Spline scene="https://prod.spline.design/YOUR-SCENE-URL/scene.splinecode" />
    </div>
  );
};

export default SplineScene;

