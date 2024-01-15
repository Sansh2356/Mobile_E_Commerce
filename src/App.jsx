import { Error, Navbar, Products } from "./Components/Components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <main>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </main>
    </>
  );
};

export default App;
