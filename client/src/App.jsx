import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import "./index.css";
import CreateAccount from "./pages/Login/CreateAccount";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/create-account" element={<CreateAccount />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/header" element={<Header />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
