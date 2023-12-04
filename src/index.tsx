import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import R01 from './pages/r01';
import R02 from './pages/r02';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/r01",
    element: <R01 />
  },
  {
    path: "/r02",
    element: <R02 />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>
);
