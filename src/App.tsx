import Ability from "./components/Ability";
import Blog from "./components/Blog";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <Navbar />

      <Home />
      <Ability />
     
      <Services />
      <Blog />
    </div>
  );
}

export default App;
