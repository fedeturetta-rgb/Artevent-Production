import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CorporateVerona from "./pages/CorporateVerona";
import CorporateVicenza from "./pages/CorporateVicenza";
import CorporatePadova from "./pages/CorporatePadova";
import CorporateTreviso from "./pages/CorporateTreviso";
import CorporateVenezia from "./pages/CorporateVenezia";
import CorporateBelluno from "./pages/CorporateBelluno";
import CorporateRovigo from "./pages/CorporateRovigo";
import CorporateAsiago from "./pages/CorporateAsiago";
import CorporateTrento from "./pages/CorporateTrento";
import CorporateBolzano from "./pages/CorporateBolzano";

import DroneVerona from "./pages/DroneVerona";
import DroneVicenza from "./pages/DroneVicenza";
import DronePadova from "./pages/DronePadova";
import DroneTreviso from "./pages/DroneTreviso";
import DroneVenezia from "./pages/DroneVenezia";
import DroneBelluno from "./pages/DroneBelluno";
import DroneRovigo from "./pages/DroneRovigo";
import DroneAsiago from "./pages/DroneAsiago";
import DroneTrento from "./pages/DroneTrento";
import DroneBolzano from "./pages/DroneBolzano";

function App() {
  return (
    <Router>
      <Routes>

        {/* HOME (placeholder come prima) */}
        <Route path="/" element={<div>HOME</div>} />

        {/* CORPORATE */}
        <Route path="/produzione-video-corporate-verona" element={<CorporateVerona />} />
        <Route path="/produzione-video-corporate-vicenza" element={<CorporateVicenza />} />
        <Route path="/produzione-video-corporate-padova" element={<CorporatePadova />} />
        <Route path="/produzione-video-corporate-treviso" element={<CorporateTreviso />} />
        <Route path="/produzione-video-corporate-venezia" element={<CorporateVenezia />} />
        <Route path="/produzione-video-corporate-belluno" element={<CorporateBelluno />} />
        <Route path="/produzione-video-corporate-rovigo" element={<CorporateRovigo />} />
        <Route path="/produzione-video-corporate-asiago" element={<CorporateAsiago />} />
        <Route path="/produzione-video-corporate-trento" element={<CorporateTrento />} />
        <Route path="/produzione-video-corporate-bolzano" element={<CorporateBolzano />} />

        {/* DRONE */}
        <Route path="/riprese-drone-verona" element={<DroneVerona />} />
        <Route path="/riprese-drone-vicenza" element={<DroneVicenza />} />
        <Route path="/riprese-drone-padova" element={<DronePadova />} />
        <Route path="/riprese-drone-treviso" element={<DroneTreviso />} />
        <Route path="/riprese-drone-venezia" element={<DroneVenezia />} />
        <Route path="/riprese-drone-belluno" element={<DroneBelluno />} />
        <Route path="/riprese-drone-rovigo" element={<DroneRovigo />} />
        <Route path="/riprese-drone-asiago" element={<DroneAsiago />} />
        <Route path="/riprese-drone-trento" element={<DroneTrento />} />
        <Route path="/riprese-drone-bolzano" element={<DroneBolzano />} />

      </Routes>
    </Router>
  );
}

export default App;