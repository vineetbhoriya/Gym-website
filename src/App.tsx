import './App.css'
import Navbar from "@/scenes/navbar"
import { useEffect, useState } from "react"
import { SelectedPage } from '@/shared/type'



function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0)
        setIsTopOfPage(true)
      setSelectedPage(SelectedPage.Home)
    }
    if (window.scrollY !== 0) setIsTopOfPage(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);

  return (
    <>
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}></Navbar>
    </>
  )
}

export default App
