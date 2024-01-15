import {
  Error,
  Navbar,
  Products,
  Product,
  Cart,
} from "./Components/Components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <main>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/product/:pid" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </main>
    </>
  );
};

export default App;
