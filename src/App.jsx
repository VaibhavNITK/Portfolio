import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import { Footer, Navbar } from "./components";
import { About, Contact, Home, Projects } from "./pages";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <main className='min-h-screen flex flex-col justify-between transition-colors duration-300'>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route
              path='/*'
              element={
                <>
                  <Routes>
                    <Route path='/about' element={<About />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/contact' element={<Contact />} />
                  </Routes>
                  <Footer />
                </>
              }
            />
          </Routes>
        </Router>
        <Analytics />
      </main>
    </ThemeProvider>
  );
};

export default App;
