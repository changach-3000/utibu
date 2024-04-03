import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./layout/RootLayout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { AuthProvider } from "./context/AuthContext";
import { MedicationProvider } from "./context/MedicationContext";
import AddMedication from "./pages/AddMedication";
import Medications from "./pages/Medications";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AuthProvider>
        <MedicationProvider>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/addmedication" element={<AddMedication />} />
            <Route path="/medication" element={<Medications/>} />
          </Route>
        </Routes>
        </MedicationProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
