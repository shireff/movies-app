import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Error from './components/Error/Error'
import About from './components/About/About'
import Data from "./components/Data/Data";
import MovieDe from "./components/MovieDe/MovieDe";
import './index.css'
function App() {
  let router = createBrowserRouter([
    {
      path: "",
      element : <Layout/>,
      errorElement : <Error/>,
      children : [
        {path:"/" , element: <Data/>},
        {path:"about" , element: <About/>},
        {path:"mo/:id" , element: <MovieDe/>},
      ]
    }
  ])
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
