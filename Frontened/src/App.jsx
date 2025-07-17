import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/landing";
import VideoMeetComponent from "./pages/VideoMeet";
import Authentication from "./pages/authentication";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth" element={<Authentication />}></Route>
            <Route path="/:url" element={<VideoMeetComponent/>}></Route>
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
