import { createBrowserRouter, RouterProvider } from "react-router-dom";

import User from "./components/User";
import TodoPage from "./pages/TodoPage";
import UsersPage from "./pages/UsersPage";
import classes from "./style.module.scss";
import Navigation from "./components/Navigation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [
      {
        path: "/",
        element: <TodoPage />,
      },
      {
        path: "/users",
        element: <UsersPage />,
      },
      {
        path: "users/:userId",
        element: <User />,
      },
      {
        path: "*",
        element: <p>Page doesnt exist</p>,
      },
    ],
  },
]);

function App() {
  return (
    <div className={classes.page}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
