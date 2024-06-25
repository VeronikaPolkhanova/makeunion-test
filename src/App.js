import Profile from "./pages/Profile";
import ToDo from "./pages/TodoList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/profile", element: <Profile /> },
  {
    path: "/todo",
    element: <ToDo />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
