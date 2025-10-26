import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./pages/Login";
import Container from "./layout/Container";
import Home from "./pages/Home";
import CurrentUser from "./context/UserContext";
import { useContext, useState } from "react";
import { Provider } from "react-redux";
import AppStore from "./store/AppStore";

function App() {
  const currentUser = useContext(CurrentUser);
  const [user, setUser] = useState(currentUser);
  return (
    <div className="py-7 px-10 h-screen">
      <Provider store={AppStore}>
        <CurrentUser.Provider value={{ user, setUser }}>
          <RouterProvider router={browserRouter}></RouterProvider>
        </CurrentUser.Provider>
      </Provider>
    </div>
  );
}

export default App;

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
