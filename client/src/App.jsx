import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import "./index.css";
import CreateAccount from "./pages/Login/CreateAccount";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import InititateTask from "./pages/InititateTask";
import PdfUploader from "./pages/temp/PdfUploader";
import ScreenCapture from "./components/ScreenCapture";
import WordUploader from "./pages/temp/WordUploader";
import Screenshot from "./pages/temp/ScreenShot";
import InitiateTaskIni from "./pages/TaskForm/InitiateTaskIni";
import ReviewTask from "./pages/TaskForm/ReviewTask";
import DraftTask from "./pages/TaskForm/DraftTask";
import ExecuteTask from "./pages/TaskForm/ExecuteTask";
import ApproveTask from "./pages/TaskForm/ApproveTask";
import FileEditor from "./pages/temp/JoditEditor";
import FileEditor2 from "./pages/temp/AypryseEditor";
import Tiptap from "./pages/temp/Tiptap";
import TinyMCE from "./pages/temp/TinyMCE";
import TinyDemo from "./pages/temp/TinyDemo";
import EditView from "./pages/TaskFormPanel/InitiatePanel";
import InitiatePanel from "./pages/TaskFormPanel/InitiatePanel";
import ReviewPanel from "./pages/TaskFormPanel/ReviewPanel";
import DraftPanel from "./pages/TaskFormPanel/DraftPanel";
import ExecutePanel from "./pages/TaskFormPanel/ExecutePanel";
import ApprovePanel from "./pages/TaskFormPanel/ApprovePanel";
import OQForm from "./pages/temp/OQForm";
import OqSteps from "./pages/temp/OqSteps";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/create-account" element={<CreateAccount />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/header" element={<Header />} />
          {/* <Route exact path="/initiate-task" element={<InititateTask />} /> */}
          <Route exact path="/initiate-task" element={<InitiateTaskIni />} />
          <Route exact path="/review-task" element={<ReviewTask />} />
          <Route exact path="/draft-task" element={<DraftTask />} />
          <Route exact path="/execute-task" element={<ExecuteTask />} />
          <Route exact path="/approve-task" element={<ApproveTask />} />
          <Route path="/edit/:id" element={<EditView />} />
          <Route path="/initiate" element={<InitiatePanel />} />
          <Route path="/initiate/:id" element={<InitiatePanel />} />
          <Route path="/review/:id" element={<ReviewPanel />} />
          <Route path="/draft/:id" element={<DraftPanel />} />
          <Route path="/execute/:id" element={<ExecutePanel />} />
          <Route path="/approve/:id" element={<ApprovePanel />} />

          {/* Temporary */}
          <Route exact path="/pdf" element={<PdfUploader />} />
          <Route exact path="/ss" element={<Screenshot />} />
          <Route exact path="/ssc" element={<ScreenCapture />} />
          <Route exact path="/word" element={<WordUploader />} />
          <Route exact path="/file" element={<FileEditor />} />
          <Route exact path="/file2" element={<FileEditor2 />} />
          <Route exact path="/tiptap" element={<Tiptap />} />
          <Route exact path="/tiny" element={<TinyMCE />} />
          <Route exact path="/tinydemo" element={<TinyDemo />} />
          <Route exact path="/oq-form" element={<OQForm />} />
          <Route exact path="/oq-steps" element={<OqSteps />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
