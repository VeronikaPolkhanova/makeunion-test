import ProfilePage from "./pages/ProfilePage";
import TodoPage from "./pages/TodoPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import classes from "./style.module.scss";

const router = createBrowserRouter([
  { path: "/profile", element: <ProfilePage /> },
  {
    path: "/todo",
    element: <TodoPage />,
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
