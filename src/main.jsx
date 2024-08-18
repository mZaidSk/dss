import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Sectors from "./pages/Sectors.jsx";
import Clients from "./pages/Clients.jsx";
import Contact from "./pages/Contact.jsx";
import IfmsServise from "./pages/IfmsServise.jsx";
import PsmgService from "./pages/PsmgService.jsx";
import OtherService from "./pages/OtherService.jsx";
import IndustrialSector from "./pages/IndustrialSector.jsx";
import RetailSector from "./pages/RetailSector.jsx";
import OtherSector from "./pages/OtherSector.jsx";
import PrivateSecuritySector from "./pages/PrivateSecuritySector.jsx";

// routes
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/services",
                element: <Services />,
            },
            {
                path: "/sectors",
                element: <Sectors />,
            },
            {
                path: "/clients",
                element: <Clients />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/ifms-service",
                element: <IfmsServise />,
            },
            {
                path: "/psmg-service",
                element: <PsmgService />,
            },
            {
                path: "/other-service",
                element: <OtherService />,
            },
            {
                path: "/industrial-sector",
                element: <IndustrialSector />,
            },
            {
                path: "/retail-sector",
                element: <RetailSector />,
            },
            {
                path: "/other-sector",
                element: <OtherSector />,
            },
            {
                path: "/private-security-sector",
                element: <PrivateSecuritySector />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
