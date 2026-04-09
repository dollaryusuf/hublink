/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import Artisans from "./pages/Artisans";
import { AuthProvider } from "./contexts/AuthContext";
import { ErrorBoundary } from "./components/shared/ErrorBoundary";

export default function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/properties" element={<Properties />} />
                <Route path="/artisans" element={<Artisans />} />
              </Routes>
            </main>
            <Footer />
            <Toaster position="top-center" />
          </div>
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  );
}
