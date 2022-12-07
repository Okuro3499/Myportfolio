import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Pages/Main";
// import Footer from "./components/Footer";
// import About from "./pages/About";
// import Thanks from "./pages/Thanks";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
       <Route exact path="/" element={<Main/>} />
       </Routes>
      {/*<Route path="/about" component={About} />
      <Route path="/thanks" component={Thanks} /> */}

      {/* <Footer /> */}
    </Router>
  );
}

export default App;