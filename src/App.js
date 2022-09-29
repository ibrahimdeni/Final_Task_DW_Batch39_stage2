import { Routes, Route } from "react-router-dom";
// import Layout from "./widget/layout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Detail from "./pages/DetailJourney";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Routes>
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
