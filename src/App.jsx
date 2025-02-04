import { GlobalStyle } from "./styles/GlobalStyle"
import { ContainerApp } from "./App.style"
import Sidebar from "./components/Sidebar/Sidebar"

function App() {

  return (
    <>
      <GlobalStyle />
      <ContainerApp>
        <Sidebar />
      </ContainerApp>
    </>
  )
}

export default App
