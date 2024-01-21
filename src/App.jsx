import Nav from "./components/Nav/Nav.jsx";
import Header from "./components/Header/Header.jsx";
import SobreMi from "./components/SobreMi/SobreMi.jsx";
import Servicios from "./components/Servicios/Servicios.jsx"
import Proyectos from "./components/Proyectos/Proyectos.jsx";
import Contacto from "./components/Contacto/Contacto.jsx";
import { Footer } from "./components/Footer/Footer.jsx";

function App() {

  return (
    <>
      <Nav/>
      <Header/>
      <SobreMi/>
      <Servicios/>
      <Proyectos/>
      <Contacto/> 
      <Footer/>
    </>
  )
}

export default App
