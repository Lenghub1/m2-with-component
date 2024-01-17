import Home from "./Page/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Message from "./Page/Message.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Message" element={<Message />} />
      </Routes>
    </Router>
  );
}

export default App;
