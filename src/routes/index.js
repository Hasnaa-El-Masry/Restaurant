import { createBrowserRouter } from "react-router-dom";
import Root from '../pages/root';
import NotFound from '../pages/404';

export const router = createBrowserRouter([
    {
        path: '',
        element: <Root />,
        errorElement:<NotFound/>
    }
])