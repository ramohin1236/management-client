import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ContactPage from './../Pages/ContactPage';


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
            path: "/",
            element: <ContactPage/>
        },
        
        
      ]
    },
    
  ]);

  export default router;