import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Teacher from '../src/pages/Teacher/Teacher';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/teacher" element={<Teacher/>}/>
      </Routes>
    </Router>
  );
}

export default App;
