import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Nav from "./components/Nav";
import Details from "./pages/Details";
import Edit from "./pages/Edit";
import Add from "./pages/Add";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
function App() {
  return (
    <div className="App">
      {/* <Nav/> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/add" element={<Add />} />
        <Route exact path="/details/:id" element={<Details />} />
        <Route exact path="/edit/:id" element={<Edit />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
