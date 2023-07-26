import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/loginPage";
import Signup from "./components/signup";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
