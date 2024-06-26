import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ContactPage from './../Pages/ContactPage';
import ContactManagement from "../Pages/ContactManagement";
import SignIn from "../Pages/SignIn";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
       
        {
            path: "/",
            element: <ContactPage/>
        },
        
        {
            path: "/management",
            element: <ContactManagement/>
        },
        
        
      ]
    },
    
  ]);

  export default router;