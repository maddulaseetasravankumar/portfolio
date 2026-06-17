import React, { Suspense, lazy, memo } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

const SplineScene = memo(() => {
  return (
    <div className="spline-box">
      <Suspense fallback={<div className="spline-loader">Loading...</div>}>
        <Spline scene="https://prod.spline.design/fP0LH65i8bXQDQjZ/scene.splinecode" />
      </Suspense>
    </div>
  );
});

export default SplineScene;