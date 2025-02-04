import { NavbarContainer, NavbarLinks } from "./Navbar.style";


export default function Navbar() {
    return(
        <>
            <NavbarContainer>
                <NavbarLinks href="#home">Início</NavbarLinks>
                <NavbarLinks href="#">Sobre</NavbarLinks>
                <NavbarLinks>Projetos</NavbarLinks>
                <NavbarLinks>Contato</NavbarLinks>
            </NavbarContainer>
        </>
    )
}