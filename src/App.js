import "./App.css";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Work from "./components/Work";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home></Home>
      <About></About>
      <Work></Work>
      <Contact></Contact>
    </div>
  );
}

export default App;
