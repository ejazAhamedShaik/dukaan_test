// App.jsx

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  GridContainer,
  MainContentContainer,
  NavbarContainer,
} from "./App.styles";
import Navbar from "./components/navbar/Navbar";
import PaymentsPage from "./pages/paymentsPage/PaymentsPage.jsx"; // Assuming you have a PaymentsPage component

function App() {
  return (
    <Router>
      <GridContainer>
        <NavbarContainer>
          <Navbar />
        </NavbarContainer>
        <MainContentContainer>
          <Routes>
            <Route path="/payments" element={<PaymentsPage />} />
            <Route
              path="*"
              element={<h3>Page not found. Go to Payments Page</h3>}
            />
          </Routes>
        </MainContentContainer>
      </GridContainer>
    </Router>
  );
}

export default App;
