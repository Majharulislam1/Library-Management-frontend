import { Outlet } from "react-router"
import { Navbar06 } from "./components/ui/shadcn-io/navbar-06"
import FooterSection from "./components/FooterSection"
 
 



function App() {


  return (
    <>

        <Navbar06></Navbar06>
        <Outlet />
        <FooterSection></FooterSection>
    </>
  )
}

export default App
