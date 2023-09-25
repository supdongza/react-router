import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import Root from "./pages/Root";
import VideoDetail from "./pages/VideoDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <p>NOT Found</p>,
    children: [
      { index: true, element: <Home /> }, // 최상위 경로
      { path: "videos", element: <Videos /> },
      { path: "videos/:videoID", element: <VideoDetail /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
