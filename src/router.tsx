import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GuestLayout from "./pages/guests/layout/GuestLayout";
import Home from "./pages/guests/Home";
import UserLayout from "./pages/users/layout/UserLayout";
import Dashboard from "./pages/users/Dashboard";
import UserLogin from "./pages/users/Auth/UserLogin";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <PublicRoute redirectTo="/user">
            <UserLogin />
          </PublicRoute>
        ),
      },
    ],
  },
  {
    path: "/user",
    element: (
      <ProtectedRoute>
        <UserLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
]);

const MainRouter = () => {
  return <RouterProvider router={router} />;
};
export default MainRouter;
