import { createBrowserRouter } from "react-router-dom";
import {
  SignUp,
  Login,
  AddProduct,
  HomePage,
  ProductDetails,
} from "./pages/index";
import App from "./App";
import ProtectedRoute from "./utils/ProtectedRoute";
import ErrorPage from "./pages/Error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "sell_product",
        element: (
          <ProtectedRoute>
            <AddProduct />
          </ProtectedRoute>
        ),
      },
      {
        path: "product_details",
        element: <ProductDetails />,
      },
    ],
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
