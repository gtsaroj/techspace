import Home from "./Pages/Home/Home";
import { Footer } from "./components/Footer/Footer";
import AuthNav from "./components/Navbar/AuthNav";

function App() {
  return (
    <div className="flex justify-center items-center">
      <div className="2xl:flex  2xl:flex-col w-full 2xl:w-auto">
      <AuthNav/>
      <Home />
      <Footer />
</div>
    </div>
  );
}

export default App;
