// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Dashboard from "./pages/user/dashboard/dashboard";
// import Menu from "./pages/user/menu/menuitem";
// import CheckoutPage from "./pages/user/checkout/checkout";
// import "./App.css";
// import "./assets/css/style.css";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/" element={<Menu />} />
//         <Route path="/checkout" element={<CheckoutPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import Dashboard from "./pages/user/dashboard/dashboard";
import Menu from "./pages/user/menu/menuitem";
import CheckoutPage from "./pages/user/checkout/checkout";
import Login from "./pages/user/dashboard/login";

import "./App.css";
import "./assets/css/style.css";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const handleShow = () => setShowLogin(true);
  const handleClose = () => setShowLogin(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Dashboard handleShow={handleShow} />
              <Login show={showLogin} handleClose={handleClose} />
            </>
          }
        />
        <Route path="/menu" element={<Menu />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
