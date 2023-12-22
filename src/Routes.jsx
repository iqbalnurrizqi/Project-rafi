import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NotFound from "pages/NotFound";
import Program from "pages/BERANDADESKTOPThree/Beranda";
import DaftarPage from "pages/DAFTARPILARSEKARANGDESKTOP/DaftarPage";
import FasilitasPage from "pages/FASILITASDESKTOP/FasilitasPage";
import ProgramPage from "pages/PROGRAMDESKTOP/ProgramPage";
import Recruiter from "pages/MenjadiPembimbingKamiDESKTOP/Recruiter";

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Program />} />
          <Route path="/fasilitaspage" element={<FasilitasPage />} />
          <Route path="/DaftarPage" element={<DaftarPage />} />
          <Route path="/ProgramPage" element={<ProgramPage />} />
          <Route path="/Recruiter" element={<Recruiter />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
