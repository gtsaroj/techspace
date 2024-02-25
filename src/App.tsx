import Home from "./Pages/Home/Home";
import { Bot } from "./components/Bot/Bot";
import { Footer } from "./components/Footer/Footer";
import AuthNav from "./components/Navbar/AuthNav";
import { RouterProvider, createBrowserRouter} from "react-router-dom"

function App() {

  const router = createBrowserRouter([{
    path: "/",
    element: <Home />,
  
  }])
  return (
    <div className="flex justify-center items-center">
      <div className="2xl:flex  2xl:flex-col w-full 2xl:w-auto">
      <AuthNav/>
     <RouterProvider router={router}/>
        <Footer />
        <Bot/>
      </div>
    </div>
  );
}

export default App;
