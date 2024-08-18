import React, { Suspense } from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const App = React.lazy(() => import("./App.jsx"));
const Home = React.lazy(() => import("./pages/Home.jsx"));
const About = React.lazy(() => import("./pages/About.jsx"));
const Services = React.lazy(() => import("./pages/Services.jsx"));
const Sectors = React.lazy(() => import("./pages/Sectors.jsx"));
const Clients = React.lazy(() => import("./pages/Clients.jsx"));
const Contact = React.lazy(() => import("./pages/Contact.jsx"));
const IfmsServise = React.lazy(() => import("./pages/IfmsServise.jsx"));
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

const loader = (
    <div className="flex items-start justify-start h-screen w-screen p-4 bg-gray-100">
        <div className=" p-4 max-w-sm w-full mx-0">
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

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={loader}>
                <App />
            </Suspense>
        ),
        children: [
            {
                path: "/",
                element: (
                    <Suspense fallback={loader}>
                        <Home />
                    </Suspense>
                ),
            },
            {
                path: "/about",
                element: (
                    <Suspense fallback={loader}>
                        <About />
                    </Suspense>
                ),
            },
            {
                path: "/services",
                element: (
                    <Suspense fallback={loader}>
                        <Services />
                    </Suspense>
                ),
            },
            {
                path: "/sectors",
                element: (
                    <Suspense fallback={loader}>
                        <Sectors />
                    </Suspense>
                ),
            },
            {
                path: "/clients",
                element: (
                    <Suspense fallback={loader}>
                        <Clients />
                    </Suspense>
                ),
            },
            {
                path: "/contact",
                element: (
                    <Suspense fallback={loader}>
                        <Contact />
                    </Suspense>
                ),
            },
            {
                path: "/ifms-service",
                element: (
                    <Suspense fallback={loader}>
                        <IfmsServise />
                    </Suspense>
                ),
            },
            {
                path: "/psmg-service",
                element: (
                    <Suspense fallback={loader}>
                        <PsmgService />
                    </Suspense>
                ),
            },
            {
                path: "/other-service",
                element: (
                    <Suspense fallback={loader}>
                        <OtherService />
                    </Suspense>
                ),
            },
            {
                path: "/industrial-sector",
                element: (
                    <Suspense fallback={loader}>
                        <IndustrialSector />
                    </Suspense>
                ),
            },
            {
                path: "/retail-sector",
                element: (
                    <Suspense fallback={loader}>
                        <RetailSector />
                    </Suspense>
                ),
            },
            {
                path: "/other-sector",
                element: (
                    <Suspense fallback={loader}>
                        <OtherSector />
                    </Suspense>
                ),
            },
            {
                path: "/private-security-sector",
                element: (
                    <Suspense fallback={loader}>
                        <PrivateSecuritySector />
                    </Suspense>
                ),
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
