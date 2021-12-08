import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { routes } from "./routes/routes";
import { Header, Footer, ScrollToTop } from "./components";

function App() {
    return (
        <div className="wrapper">
            <Router>
                <Header />
                {renderRoutes(routes)}
                <Footer />
                <ScrollToTop />
            </Router>
        </div>
    );
}

export default App;
