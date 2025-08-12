
import {
  createBrowserRouter,
  createRoutesFromElements,
Route,} from "react-router";
import { RouterProvider } from "react-router-dom";

import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";
import Readblog from "./pages/Readblog";
import Blog from "./pages/Blog";
import ReadCase from "./pages/ReadCase";
import Work from "./pages/Work";
import Pricing from "./pages/Pricing";
import Features from "./pages/Features";
import Home from "./pages/Home";
import About from "./pages/About";
import Rootlayout from "./components/Rootlayout";

let route = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Rootlayout />}>
      <Route index element={<Home />}></Route>
      <Route path="/About" element={<About />}></Route>
      <Route path="/Privacy" element={<Privacy />}></Route>
      <Route path="/Contact" element={<Contact />}></Route>
      <Route path="/Readblog" element={<Readblog />}></Route>
      <Route path="/Blog" element={<Blog />}></Route>
      <Route path="/ReadCase" element={<ReadCase />}></Route>
      <Route path="/Work" element={<Work />}></Route>
      <Route path="/Pricing" element={<Pricing />}></Route>
      <Route path="/Features" element={<Features />}></Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={route} />;
};

export default App;