import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Nav from "./components/Nav";
import Details from "./pages/Details";
import Edit from "./pages/Edit";
function App() {
  return (
    <div className="App">
      {/* <Nav/> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/details/:id" element={<Details />} />
        <Route exact path="/edit/:id" element={<Edit />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
