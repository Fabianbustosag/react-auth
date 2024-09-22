import React from 'react';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Login from './pages/Login/Login';
import Home from './pages/home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },


]);

const App = () => {
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
};

export default App;