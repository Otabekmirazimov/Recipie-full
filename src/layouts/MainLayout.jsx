// components
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import ColorContainer from "../components/ColorContainer"

function MainLayout() {
  return (
    <>
      <Navbar/>
      <main className="align-element py-8">
        <ColorContainer/>
        <Outlet/>
      </main>
    </>
  )
}

export default MainLayout