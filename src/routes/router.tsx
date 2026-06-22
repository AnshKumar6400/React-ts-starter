import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
  },
  {
    path: "/login",
    element: <div>Login</div>,
  },
  {
    path: "/register",
    element: <div>Register</div>,
  },
]);
/**
 * @param
 * @returns RouterProvider
 */
export default function AppRouter() {
  return <RouterProvider router={router} />;
}
