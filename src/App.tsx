import { Outlet } from "react-router"
 



function App() {


  return (
    <>

      <div className="h-screen flex justify-center items-center">
        <Outlet />
      </div>

    </>
  )
}

export default App
