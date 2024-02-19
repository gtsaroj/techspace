import Home from "./Pages/Home/Home";
import { Footer } from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
 

  return (
    <div className="relative">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
