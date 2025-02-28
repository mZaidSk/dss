import React, { Suspense } from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

// Lazy loading pages for better performance
const App = React.lazy(() => import("./App.jsx"));
const Home = React.lazy(() => import("./pages/Home.jsx"));
const About = React.lazy(() => import("./pages/About.jsx"));
const Services = React.lazy(() => import("./pages/Services.jsx"));
const Sectors = React.lazy(() => import("./pages/Sectors.jsx"));
const Clients = React.lazy(() => import("./pages/Clients.jsx"));
const Contact = React.lazy(() => import("./pages/Contact.jsx"));
const IfmsService = React.lazy(() => import("./pages/IfmsServise.jsx"));
const PsmgService = React.lazy(() => import("./pages/PsmgService.jsx"));
const OtherService = React.lazy(() => import("./pages/OtherService.jsx"));
const IndustrialSector = React.lazy(() =>
    import("./pages/IndustrialSector.jsx")
);
const RetailSector = React.lazy(() => import("./pages/RetailSector.jsx"));
const OtherSector = React.lazy(() => import("./pages/OtherSector.jsx"));
const PrivateSecuritySector = React.lazy(() =>
    import("./pages/PrivateSecuritySector.jsx")
);

// Loader for suspense fallback
const loader = (
    <div className="flex items-center justify-center h-screen w-screen p-4 bg-gray-100">
        <div className="p-4 max-w-sm w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                <div className="flex-1 space-y-6 py-1">
                    <div className="h-2 bg-slate-700 rounded"></div>
                    <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                            <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                        </div>
                        <div className="h-2 bg-slate-700 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Router>
            <Suspense fallback={loader}>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="services" element={<Services />} />
                        <Route path="sectors" element={<Sectors />} />
                        <Route path="clients" element={<Clients />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="ifms-service" element={<IfmsService />} />
                        <Route path="psmg-service" element={<PsmgService />} />
                        <Route
                            path="other-service"
                            element={<OtherService />}
                        />
                        <Route
                            path="industrial-sector"
                            element={<IndustrialSector />}
                        />
                        <Route
                            path="retail-sector"
                            element={<RetailSector />}
                        />
                        <Route path="other-sector" element={<OtherSector />} />
                        <Route
                            path="private-security-sector"
                            element={<PrivateSecuritySector />}
                        />
                    </Route>
                </Routes>
            </Suspense>
        </Router>
    </StrictMode>
);
