import Input from "./components/Input";
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Page7 from "./pages/Page7";
import Page8 from "./pages/Page8";
import Final from "./pages/Final";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import FP from "./pages/FP";


function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Login/></>
    },
    {
      path:"/signup",
      element:<><SignUp/></>
    },
    {
      path:"/page1",
      element:<><Page1/></>
    },
    {
      path:"/page2",
      element:<><Page2/></>
    },

    {
      path:"/page3",
      element:<><Page3/></>
    },

    {
      path:"/page4",
      element:<Page4/>
    },
    {
      path:"/page5",
      element:<Page5/>
    },
    {
      path:"/page6",
      element:<Page6/>
    },
    {
      path:"/page7",
      element:<Page7/>
    },
    {
      path:"/page8",
      element:<Page8/>
    },
    {
      path:"/final",
      element:<Final/>
    },
    {
      path:"/forget",
      element:<FP/>
    }

  ])


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}


export default App;
