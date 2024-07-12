import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import "./index.css";
import CreateAccount from "./pages/Login/CreateAccount";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import InititateTask from "./pages/InititateTask";
import PdfUploader from "./pages/temp/PdfUploader";
import ScreenCapture from "./pages/temp/ScreenCapture";
import WordUploader from "./pages/temp/WordUploader";
import Screenshot from "./pages/temp/ScreenShot";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/create-account" element={<CreateAccount />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/header" element={<Header />} />
          <Route exact path="/initiate-task" element={<InititateTask />} />
          {/* Temporary */}
          <Route exact path="/pdf" element={<PdfUploader />} />
          <Route exact path="/ss" element={<Screenshot />} />
          <Route exact path="/ssc" element={<ScreenCapture />} />
          <Route exact path="/word" element={<WordUploader />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
