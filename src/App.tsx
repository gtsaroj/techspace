import path from "path";
import Cost from "./Pages/CalculateTheCost/Cost";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import { ServicesPages } from "./Pages/Services/ServicesPages";
import { Bot } from "./components/Bot/Bot";
import { Footer } from "./components/Footer/Footer";
import AuthNav from "./components/Navbar/AuthNav";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Static from "./QueryPage/Static";
import Ecommerce from "./QueryPage/Ecommerce";
import CMS from "./QueryPage/CMS";
import CustomApp from "./QueryPage/CustomApp";

const Homelayout = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="2xl:flex  2xl:flex-col w-full 2xl:w-full">
        <AuthNav />
        <Outlet />
        <Footer />
        <Bot />
      </div>
    </div>
  );
};
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homelayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/services",
          element: <ServicesPages />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/services/cost",
          element: <Cost />,
        },
        {
          path: "/services/cost/static",
          element: <Static />,
        },
        {
          path: "/services/cost/ecommerce",
          element: <Ecommerce />,
        },
        {
          path: "/services/cost/cms",
          element: <CMS />,
        },
        {
          path: "/services/cost/customwebpage",
          element: <CustomApp />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
