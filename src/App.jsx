import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./App.css";
import Card from "./components/card/Card";
import MainLayout from "./layout/MainLayout";

//pages imort
import Home from "./pages/Home";
import Retsept from "./components/Retsept";
function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
      
          <Route path="recipes/:id" element={<Retsept />} />
      
      </Route>
    )
  );
  return <RouterProvider router={routes} />;
}

export default App;
