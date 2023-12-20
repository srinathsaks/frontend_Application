import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Option1Basic = React.lazy(() => import("pages/Option1Basic"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Option1Basic />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
