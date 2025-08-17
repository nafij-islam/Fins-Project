
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
      <Route path="/about" element={<About />}></Route>
      <Route path="/privacy" element={<Privacy />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/readblog" element={<Readblog />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="/readCase" element={<ReadCase />}></Route>
      <Route path="/work" element={<Work />}></Route>
      <Route path="/pricing" element={<Pricing />}></Route>
      <Route path="/features" element={<Features />}></Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={route} /> ;
};

export default App;