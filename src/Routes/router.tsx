
import App from "@/App";
import Book from "@/Pages/Book";
import Borrow from "@/Pages/Borrow";
import { createBrowserRouter } from "react-router";


const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: '/',
        Component: Book
      },
      {
        path: '/books',
        Component: Book
      },
      {
        path: '/borrow-summary',
        Component: Borrow
      }
    ]
  },
]);

export default router;