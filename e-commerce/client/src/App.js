import { Route, Routes } from "react-router-dom";
import HomePAge from "./pages/HomePAge";
import Contact from "./pages/Contact";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import Policy from "./pages/Policy";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePAge />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
        <Route path="/policy" element={<Policy />}></Route>
      </Routes>
    </>
  );
}

export default App;
