import Home from "./Pages/Home/Home";
import { Footer } from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Bot from "./components/bot/Bot";

function App() {
 

  return (
    <div className="relative">
      <Navbar />
      <Home />
      <Footer />
      <Bot/>
    </div>
  );
}

export default App;
