import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import BackToTopButton from "./components/common/BacktoTopButton";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
    return (
        <div className="overflow-hidden">
            <Navbar />
            <Outlet />
            <Footer />
            <ScrollToTop />
            <BackToTopButton /> {/* Include the BackToTopButton here */}
        </div>
    );
}

export default App;
