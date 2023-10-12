import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const FrameThree = React.lazy(() => import("pages/FrameThree"));
const PwaThree = React.lazy(() => import("pages/PwaThree"));
const PwaTwo = React.lazy(() => import("pages/PwaTwo"));
const PwaOne = React.lazy(() => import("pages/PwaOne"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/pwaone" element={<PwaOne />} />
          <Route path="/pwatwo" element={<PwaTwo />} />
          <Route path="/pwathree" element={<PwaThree />} />
          <Route path="/framethree" element={<FrameThree />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
