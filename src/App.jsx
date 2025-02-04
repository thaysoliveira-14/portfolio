import { GlobalStyle } from "./styles/GlobalStyle"
import { ContainerApp } from "./App.style"
import Sidebar from "./components/Sidebar/Sidebar"
import Navbar from "./components/Navbar/Navbar"

function App() {

  return (
    <>
      <GlobalStyle />
      <ContainerApp>
        <Sidebar />
        <Navbar />
      </ContainerApp>
    </>
  )
}

export default App
