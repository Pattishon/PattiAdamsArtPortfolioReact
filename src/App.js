import React from "react";
import "./App.css";
import Header from "./sections/Header";
import Navigation from "./navigation/Navigation";
import Main from "./sections/Main";
import Footer from "./sections/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="bg-main flex flex-col content-center overflow-x-hidden text-text">
        <Header />

        <hr className="line m-auto w-full sm:w-10/12" />

        <Navigation />

        <hr className="line m-auto w-full sm:w-10/12" />

        <Main />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
// <div className="bg-main min-h-screen">
// <Container>
//   <Row className="justify-content-md-center">
//     <Header />
//   </Row>
//   <hr className="line" />
//   {
//     <Row className="justify-content-md-center">
//       <Navigation />
//     </Row>
//   }
//   <hr className="line" />
//   <Row className="justify-content-md-center">
//     <Main />
//   </Row>
//   <Row className="justify-content-md-center">
//     <Footer />
//   </Row>
// </Container>
// </div>

// <div className="bg-main flex flex-col content-center">
// <Header />

// <hr className="line m-auto w-10/12" />

// <Navigation />

// <hr className="line" />

// <Main />

// <Footer />
// </div>
